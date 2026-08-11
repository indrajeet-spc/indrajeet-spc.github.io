---
layout: default
title: "Nobel Prizes in Physics | Dr. Indrajeet Kumar"
heading: "Nobel Prizes in Physics"
kicker: "PHYSICS HONOURS"
subtitle: "A complete year-by-year collection of prize motivations, laureates and related publications"
permalink: /publications/
---

## Physics Nobel Prize Collection

This collection uses the official Nobel Prize API and includes every available Nobel Prize in Physics record, including years in which no prize was awarded.

<div class="nobel-toolbar">
<label for="nobel-year">Jump to year</label>
<select id="nobel-year"><option value="all">All years</option></select>
</div>

<div id="nobel-prizes" class="nobel-list" aria-live="polite">
<p class="news-status">Loading the Nobel Prize collection...</p>
</div>

<p class="nobel-attribution">Data: <a href="https://www.nobelprize.org/" target="_blank" rel="noopener">Nobel Prize</a>. Related publication links open scholarly searches for the selected prize topic.</p>

<script>
document.addEventListener("DOMContentLoaded", function () {
	const list = document.getElementById("nobel-prizes");
	const yearSelect = document.getElementById("nobel-year");
	const apiUrl = "https://api.nobelprize.org/2.1/nobelPrizes?nobelPrizeCategory=phy&limit=200";
	let prizes = [];

	const escapeHtml = function (value) {
		return String(value || "").replace(/[&<>'"]/g, function (character) {
			return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", "\"": "&quot;" }[character];
		});
	};

	const officialLink = function (prize) {
		return "https://www.nobelprize.org/prizes/physics/" + encodeURIComponent(prize.awardYear) + "/summary/";
	};

	const render = function () {
		const selectedYear = yearSelect.value;
		const visiblePrizes = selectedYear === "all" ? prizes : prizes.filter(function (prize) {
			return prize.awardYear === selectedYear;
		});

		list.innerHTML = visiblePrizes.map(function (prize) {
			const laureates = (prize.laureates || []).map(function (laureate) {
				return laureate.knownName && laureate.knownName.en;
			}).filter(Boolean).join(", ");
			const motivation = prize.topMotivation && prize.topMotivation.en ||
				prize.laureates && prize.laureates[0] && prize.laureates[0].motivation && prize.laureates[0].motivation.en ||
				"No prize was awarded this year.";
			const scholarUrl = "https://scholar.google.com/scholar?q=" + encodeURIComponent("Nobel Prize Physics " + prize.awardYear + " " + motivation);

			return '<article class="nobel-card">' +
				'<div class="nobel-year">' + escapeHtml(prize.awardYear) + '</div>' +
				'<div class="nobel-content"><h2>Nobel Prize in Physics, ' + escapeHtml(prize.awardYear) + '</h2>' +
				'<p><strong>Laureates:</strong> ' + escapeHtml(laureates || "No laureate listed") + '</p>' +
				'<p><strong>Prize motivation:</strong> ' + escapeHtml(motivation) + '</p>' +
				'<div class="nobel-links"><a href="' + officialLink(prize) + '" target="_blank" rel="noopener">Complete Nobel information →</a>' +
				'<a href="' + scholarUrl + '" target="_blank" rel="noopener">Related publications →</a></div></div></article>';
		}).join("");
	};

	fetch(apiUrl)
		.then(function (response) {
			if (!response.ok) throw new Error("Nobel API unavailable");
			return response.json();
		})
		.then(function (data) {
			prizes = data.nobelPrizes || [];
			prizes.forEach(function (prize) {
				const option = document.createElement("option");
				option.value = prize.awardYear;
				option.textContent = prize.awardYear;
				yearSelect.appendChild(option);
			});
			render();
		})
		.catch(function () {
			list.innerHTML = '<p class="news-status">The Nobel Prize collection is temporarily unavailable. <a href="https://www.nobelprize.org/prizes/physics/" target="_blank" rel="noopener">Browse the official collection</a>.</p>';
		});

	yearSelect.addEventListener("change", render);
});
</script>
