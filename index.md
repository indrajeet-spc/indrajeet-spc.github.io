---
layout: default
title: "Dr. Indrajeet Kumar | Physics"
heading: "Dr. Indrajeet Kumar"
kicker: "FACULTY • PHYSICS"
permalink: /
---

<div class="hero-strip">
<p class="kicker">WELCOME</p>
<h2>Teaching physics. Exploring nature. Sharing knowledge.</h2>
<p>Academic resources, research interests, lecture notes and professional information.</p>
</div>

## Teaching & Course Materials

### Undergraduate Physics

Lecture notes, syllabi, assignments and practical resources for undergraduate students.

[**Open UG Lecture Notes →**](https://indrajeet-spc.github.io/lecture-notes)

### Postgraduate Physics

Advanced lecture notes and learning resources for postgraduate physics students.

[**Open PG Lecture Notes →**](https://indrajeet-spc.github.io/PG-lecture-notes)

### Academic Resources

[**View Resources →**]({{ '/resources/' | relative_url }})

## Research Interests

### Atmospheric Physics

Atmospheric dynamics, thermodynamics and physical phenomena of the Earth's atmosphere.

### Optics

Behavior and properties of light and its interaction with matter.

[**Explore Research →**]({{ '/research/' | relative_url }})

## Scientific News

Latest science stories from multiple sources, refreshed automatically every day.

<div id="scientific-news" class="news-grid" aria-live="polite">
<p class="news-status">Loading the latest scientific news…</p>
</div>

<p class="news-source">Source: <a href="https://www.nasa.gov/news/" target="_blank" rel="noopener">NASA News</a></p>

<script>
document.addEventListener("DOMContentLoaded", function () {
	const newsContainer = document.getElementById("scientific-news");
	const newsUrl = "{{ '/data/scientific-news.json' | relative_url }}?v=" + Date.now();
	const escapeHtml = function (value) {
		return String(value).replace(/[&<>'"]/g, function (character) {
			return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", "\"": "&quot;" }[character];
		});
	};

	fetch(newsUrl)
		.then(function (response) {
			if (!response.ok) {
				throw new Error("News feed unavailable");
			}
			return response.json();
		})
		.then(function (data) {
			if (!Array.isArray(data.items) || data.items.length === 0) {
				throw new Error("No news available");
			}

			newsContainer.innerHTML = data.items.map(function (item) {
				return '<article class="news-card">' +
					'<p class="news-date">' + escapeHtml(item.date) + ' · ' + escapeHtml(item.source) + '</p>' +
					'<h3><a href="' + escapeHtml(item.url) + '" target="_blank" rel="noopener">' + escapeHtml(item.title) + '</a></h3>' +
					'<p class="news-abstract"><strong>Abstract:</strong> ' + escapeHtml(item.abstract) + '</p>' +
					'<a class="news-link" href="' + escapeHtml(item.url) + '" target="_blank" rel="noopener">Read complete news →</a>' +
					'</article>';
			}).join("");
		})
		.catch(function () {
			newsContainer.innerHTML = '<p class="news-status">Scientific news is temporarily unavailable. Please try again later.</p>';
		});
});
</script>

## Contact

<div id="contact"></div>

**Department of Physics**  
S.P. College, Dumka  
Dumka–Pakur Road  
Dumka – 814101  
Jharkhand, India

**Email:** [indrajeet.spcollege@gmail.com](mailto:indrajeet.spcollege@gmail.com)  
**Mobile:** 8638874019
