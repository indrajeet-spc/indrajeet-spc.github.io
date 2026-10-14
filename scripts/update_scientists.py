import json
import re
import unicodedata
import urllib.parse
import urllib.request
from datetime import datetime, timedelta, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "data" / "scientists.json"
QUERY_URL = "https://query.wikidata.org/sparql"
RESULT_LIMIT = 500


def build_query():
    return f"""
SELECT DISTINCT ?person ?personLabel ?birthDate ?deathDate ?description ?article ?image WHERE {{
  ?person wdt:P31 wd:Q5;
          wdt:P106 wd:Q169470;
          wdt:P569 ?birthDate;
          schema:description ?description;
          rdfs:label ?personLabel.
  ?article schema:about ?person;
           schema:isPartOf <https://en.wikipedia.org/>.
  OPTIONAL {{ ?person wdt:P18 ?image. }}
  OPTIONAL {{ ?person wdt:P570 ?deathDate. }}
  FILTER(LANG(?description) = "en")
  FILTER(LANG(?personLabel) = "en")
}}
LIMIT {RESULT_LIMIT}
""".strip()


def fetch_results(query):
    url = QUERY_URL + "?" + urllib.parse.urlencode(
        {"query": query, "format": "json"}
    )
    request = urllib.request.Request(
        url,
        headers={
            "Accept": "application/sparql-results+json",
            "User-Agent": (
                "ScientistBirthdays/1.0 "
                "(https://github.com/indrajeet-spc/indrajeet-spc.github.io)"
            ),
        },
    )
    with urllib.request.urlopen(request, timeout=90) as response:
        return json.load(response)["results"]["bindings"]


def normalize_name(name):
    decomposed = unicodedata.normalize("NFKD", name.casefold())
    return "".join(character for character in decomposed if character.isalnum())


def make_scientist(binding):
    qid = binding["person"]["value"].rsplit("/", 1)[-1]
    if not re.fullmatch(r"Q\d+", qid):
        raise ValueError(f"Unexpected Wikidata item ID: {qid}")

    birth_date = binding["birthDate"]["value"][:10]
    if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", birth_date):
        return None

    try:
        parsed_birth_date = datetime.strptime(birth_date, "%Y-%m-%d").date()
    except ValueError:
        return None

    death_date = binding.get("deathDate", {}).get("value", "")[:4]
    born = str(parsed_birth_date.year)
    dates = f"{born}–{death_date}" if death_date else born

    image = binding.get("image", {}).get("value", "")
    bio = binding["description"]["value"]
    bio_lower = bio.lower()
    if "physicist" not in bio_lower and "physics" not in bio_lower:
        return None
    if not image:
        return None

    return {
        "qid": qid,
        "slug": f"wikidata-{qid.lower()}",
        "name": binding["personLabel"]["value"],
        "birth_date": birth_date,
        "born": born,
        "died": death_date,
        "dates": dates,
        "field": "Physics",
        "image": image,
        "bio": bio,
        "citations": [
            {
                "title": "Wikipedia biography",
                "url": binding["article"]["value"],
            },
            {
                "title": "Wikidata record",
                "url": binding["person"]["value"],
            },
        ],
    }


def merge_scientists(existing, bindings):
    known_ids = {entry.get("qid") for entry in existing if entry.get("qid")}
    known_names = {normalize_name(entry["name"]) for entry in existing}
    added = []

    for binding in bindings:
        scientist = make_scientist(binding)
        normalized_name = normalize_name(scientist["name"])
        if scientist["qid"] in known_ids or normalized_name in known_names:
            continue
        known_ids.add(scientist["qid"])
        known_names.add(normalized_name)
        added.append(scientist)

    return added


def load_scientists():
    if not DATA_PATH.exists():
        return []

    try:
        scientists = json.loads(DATA_PATH.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        print(f"Warning: {DATA_PATH} is not valid JSON. Starting from an empty list.")
        return []

    if not isinstance(scientists, list):
        raise ValueError(f"{DATA_PATH} must contain a JSON array of scientists.")

    return scientists


def unique_by_qid(scientists):
    seen = set()
    result = []
    for scientist in scientists:
        qid = scientist.get("qid")
        if qid and qid in seen:
            continue
        result.append(scientist)
        if qid:
            seen.add(qid)
    return result


def main():
    bindings = fetch_results(build_query())
    scientists = [
        scientist for scientist in (make_scientist(binding) for binding in bindings)
        if scientist is not None
    ]

    DATA_PATH.write_text(
        json.dumps(scientists, indent=2, ensure_ascii=True) + "\n",
        encoding="utf-8",
    )
    print(f"Saved {len(scientists)} physicist records.")


if __name__ == "__main__":
    main()
