# Dr. Indrajeet Kumar — Academic Website

Jekyll/Markdown website prepared for GitHub Pages.

Scientific news on the homepage is sourced from multiple science RSS feeds, including NASA, Phys.org, ScienceDaily, and Nature Physics. A GitHub Actions workflow refreshes the local news data once per day at 7:00 AM India time.

To control the subjects shown, edit the `NEWS_TOPICS` list near the top of `scripts/update_scientific_news.py`. Stories are selected when a topic appears in their title, summary, or NASA category. Use an empty list to allow all NASA news.

## Before publishing

1. Replace `images/README.txt` with your photograph named `profile-photo.jpg`.
2. Upload your real `documents/cv.pdf`.
3. Upload your real `documents/syllabus.pdf`.
4. Replace publication placeholders with verified information.
5. Replace researcher-profile placeholders with actual URLs.
6. Upload/push the repository to GitHub.
7. Open **Settings → Pages**.
8. Select **Deploy from a branch**, choose `main`, and `/ (root)`.

## Lecture-note sites

UG: https://indrajeet-spc.github.io/lecture-notes

PG: https://indrajeet-spc.github.io/PG-lecture-notes
