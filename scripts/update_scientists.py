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
WINDOW_DAYS = 14
RESULT_LIMIT = 100
OCCUPATION_IDS = ("Q901", "Q169470", "Q170790", "Q593644", "Q864503")


def build_query(start_date):
    birthday_values = "\n".join(
        f"  ({day.month} {day.day})"
        for offset in range(WINDOW_DAYS)
        for day in [start_date + timedelta(days=offset)]
    )
    occupation_values = " ".join(f"wd:{item}" for item in OCCUPATION_IDS)
    return f"""
SELECT DISTINCT ?person ?personLabel ?birthDate ?deathDate ?description ?article WHERE {{
  VALUES ?occupation {{ {occupation_values} }}
  VALUES (?month ?day) {{
{birthday_values}
  }}
  ?person wdt:P31 wd:Q5;
          wdt:P106 ?occupation;
          wdt:P569 ?birthDate;
          p:P569 ?birthStatement;
          schema:description ?description;
          rdfs:label ?personLabel.
  ?birthStatement ps:P569 ?birthDate;
                  psv:P569 ?birthDateValue.
  ?birthDateValue wikibase:timeValue ?birthDate;
                  wikibase:timePrecision ?birthPrecision.
  ?article schema:about ?person;
           schema:isPartOf <https://en.wikipedia.org/>.
  OPTIONAL {{ ?person wdt:P570 ?deathDate. }}
  FILTER(?birthPrecision >= 11)
  FILTER(MONTH(?birthDate) = ?month && DAY(?birthDate) = ?day)
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
    parsed_birth_date = datetime.strptime(birth_date, "%Y-%m-%d").date()
    death_date = binding.get("deathDate", {}).get("value", "")[:4]
    born = str(parsed_birth_date.year)
    dates = f"{born}–{death_date}" if death_date else born

    return {
        "qid": qid,
        "slug": f"wikidata-{qid.lower()}",
        "name": binding["personLabel"]["value"],
        "birth_date": birth_date,
        "born": born,
        "died": death_date,
        "dates": dates,
        "bio": binding["description"]["value"],
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


def main():
    today = datetime.now(timezone.utc).date()
    bindings = fetch_results(build_query(today))

    scientists = json.loads(DATA_PATH.read_text(encoding="utf-8"))
    added = merge_scientists(scientists, bindings)
    if not added:
        print("No new scientist records found.")
        return

    scientists.extend(added)
    DATA_PATH.write_text(
        json.dumps(scientists, indent=2, ensure_ascii=True) + "\n",
        encoding="utf-8",
    )
    print(f"Added {len(added)} scientist records.")


if __name__ == "__main__":
    main()
