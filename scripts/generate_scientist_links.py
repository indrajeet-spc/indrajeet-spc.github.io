import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
FILE = ROOT / 'physics-pioneers.md'

def slugify(name):
    s = name.lower()
    s = re.sub(r"[^a-z0-9]+", '-', s)
    s = re.sub(r'-+', '-', s).strip('-')
    return s

text = FILE.read_text(encoding='utf-8')
lines = text.splitlines()

out = []
for i, line in enumerate(lines):
    if line.startswith('- '):
        content = line[2:].strip()
        # split description after em dash or hyphen ( — or - )
        parts = re.split(r'\s+—\s+|\s+-\s+', content, maxsplit=1)
        name = parts[0].strip()
        desc = parts[1].strip() if len(parts) > 1 else ''
        slug = slugify(name)
        link = f"- <a href=\"/scientist.html?slug={slug}\" class=\"scientist-link\" data-slug=\"{slug}\">{name}</a>"
        if desc:
            link += f" — {desc}"
        out.append(link)
    else:
        out.append(line)

FILE.write_text('\n'.join(out)+"\n", encoding='utf-8')
print('Updated', FILE)
