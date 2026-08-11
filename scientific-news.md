---
layout: default
title: "Scientific News | Dr. Indrajeet Kumar"
heading: "Scientific News"
kicker: "SCIENCE NEWS"
subtitle: "Research-focused stories from multiple science publishers, refreshed every day"
permalink: /scientific-news/
---

<div id="scientific-news" class="news-grid" aria-live="polite">
<p class="news-status">Loading the latest scientific news...</p>
</div>

<p class="news-source">Stories are collected from multiple science publishers and filtered by your selected research topics.</p>

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
					'<h2><a href="' + escapeHtml(item.url) + '" target="_blank" rel="noopener">' + escapeHtml(item.title) + '</a></h2>' +
					'<p class="news-abstract"><strong>Abstract:</strong> ' + escapeHtml(item.abstract) + '</p>' +
					'<a class="news-link" href="' + escapeHtml(item.url) + '" target="_blank" rel="noopener">Read complete news -></a>' +
					'</article>';
			}).join("");
		})
		.catch(function () {
			newsContainer.innerHTML = '<p class="news-status">Scientific news is temporarily unavailable. Please try again later.</p>';
		});
});
</script>
