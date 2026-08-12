import html
import json
import re
import urllib.request
import xml.etree.ElementTree as ET
from datetime import timezone
from email.utils import parsedate_to_datetime
from pathlib import Path

OUTPUT_PATH = Path(__file__).resolve().parents[1] / "data" / "scientific-news.json"
FEEDS = [
    ("NASA News", "https://www.nasa.gov/rss/dyn/breaking_news.rss"),
    ("Phys.org", "https://phys.org/rss-feed/physics-news/"),
    ("ScienceDaily", "https://www.sciencedaily.com/rss/matter_energy/physics.xml"),
    ("ScienceDaily Nanotechnology", "https://www.sciencedaily.com/rss/matter_energy/nanotechnology.xml"),
    ("Nature Physics", "https://www.nature.com/subjects/physics.rss"),
    ("Science Magazine", "https://www.sciencemag.org/rss/news_current.xml"),
    ("Scientific American", "https://www.scientificamerican.com/feed/rss/"),
    ("APS Physics", "https://physics.aps.org/rss"),
    ("The Conversation - Science", "https://theconversation.com/global/topics/science-and-technology-53.rss"),
]
NEWS_TOPICS = [
    "physics",
    "space science",
    "surface plasmon resonance",
    "density functional theory",
    "optical sensors",
    "double resonance",
    "graphene",
]


def clean_text(value, limit):
    text = html.unescape(value or "")
    text = re.sub(r"<[^>]+>", " ", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text[:limit].rstrip() + ("..." if len(text) > limit else "")


def format_date(value):
    try:
        parsed = parsedate_to_datetime(value).astimezone(timezone.utc)
        return parsed.strftime("%d %b %Y")
    except (TypeError, ValueError):
        return "Recent"


def first_text(item, names):
    for name in names:
        value = item.findtext(name)
        if value:
            return value
    return ""


def matches_topic(item):
    searchable_text = " ".join([
        first_text(item, ["title"]),
        first_text(item, ["description", "{http://purl.org/rss/1.0/modules/content/}encoded"]),
        " ".join(category.text or "" for category in item.findall("category")),
    ]).lower()
    return not NEWS_TOPICS or any(topic.lower() in searchable_text for topic in NEWS_TOPICS)


def main():
    items = []
    seen_urls = set()
    for source, feed_url in FEEDS:
        request = urllib.request.Request(feed_url, headers={"User-Agent": "indrajeet-spc.github.io scientific news updater"})
        try:
            with urllib.request.urlopen(request, timeout=30) as response:
                root = ET.fromstring(response.read())
        except (OSError, ET.ParseError):
            continue

        for item in root.findall(".//item"):
            if not matches_topic(item):
                continue

            title = clean_text(first_text(item, ["title"]), 140)
            url = first_text(item, ["link"]).strip()
            abstract = clean_text(first_text(item, ["description", "{http://purl.org/rss/1.0/modules/content/}encoded"]), 300)
            if title and url and url not in seen_urls:
                items.append({
                    "title": title,
                    "url": url,
                    "source": source,
                    "date": format_date(first_text(item, ["pubDate", "published", "updated"])),
                    "abstract": abstract or "Abstract unavailable. Open the full article for details.",
                })
                seen_urls.add(url)

    if not items:
        raise RuntimeError("The configured science feeds returned no usable stories")

    items = items[:12]

    payload = {
        "sources": [{"name": source, "url": feed_url} for source, feed_url in FEEDS],
        "updated_at": __import__("datetime").datetime.now(timezone.utc).isoformat(),
        "items": items,
    }
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(json.dumps(payload, indent=2, ensure_ascii=True) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
