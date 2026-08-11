import html
import json
import re
import urllib.request
import xml.etree.ElementTree as ET
from datetime import timezone
from email.utils import parsedate_to_datetime
from pathlib import Path

FEED_URL = "https://www.nasa.gov/rss/dyn/breaking_news.rss"
OUTPUT_PATH = Path(__file__).resolve().parents[1] / "data" / "scientific-news.json"


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


def main():
    request = urllib.request.Request(FEED_URL, headers={"User-Agent": "indrajeet-spc.github.io scientific news updater"})
    with urllib.request.urlopen(request, timeout=30) as response:
        root = ET.fromstring(response.read())

    items = []
    for item in root.findall("./channel/item")[:6]:
        title = clean_text(item.findtext("title"), 140)
        url = (item.findtext("link") or "").strip()
        summary = clean_text(item.findtext("description"), 220)
        if title and url:
            items.append({
                "title": title,
                "url": url,
                "date": format_date(item.findtext("pubDate")),
                "summary": summary,
            })

    if not items:
        raise RuntimeError("The NASA feed returned no usable stories")

    payload = {
        "source": "NASA News",
        "source_url": "https://www.nasa.gov/news/",
        "updated_at": __import__("datetime").datetime.now(timezone.utc).isoformat(),
        "items": items,
    }
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(json.dumps(payload, indent=2, ensure_ascii=True) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
