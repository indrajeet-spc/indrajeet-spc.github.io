(function () {
  var container = document.getElementById("birthday-scientists");
  if (!container) return;

  function dayOfYear(date) {
    var start = new Date(date.getFullYear(), 0, 0);
    return Math.floor((date - start) / 86400000);
  }

  function birthdayOffset(birthDate, today) {
    var birthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    var offset = dayOfYear(birthday) - dayOfYear(today);
    if (offset < 0) {
      birthday = new Date(today.getFullYear() + 1, birthDate.getMonth(), birthDate.getDate());
      offset = Math.round((birthday - today) / 86400000);
    }
    return offset;
  }

  function escapeHtml(value) {
    return String(value || "").replace(/[&<>"']/g, function (character) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }[character];
    });
  }

  var today = new Date();
  today.setHours(0, 0, 0, 0);

  fetch("{{ '/data/scientists.json' | relative_url }}?v=" + today.getTime())
    .then(function (response) {
      if (!response.ok) throw new Error("Unable to load scientist data");
      return response.json();
    })
    .then(function (scientists) {
      var upcoming = scientists
        .filter(function (scientist) {
          return /^\d{4}-\d{2}-\d{2}$/.test(scientist.birth_date);
        })
        .map(function (scientist) {
          var parts = scientist.birth_date.split("-").map(Number);
          var birthDate = new Date(parts[0], parts[1] - 1, parts[2]);
          return {
            scientist: scientist,
            offset: birthdayOffset(birthDate, today),
            date: birthDate
          };
        })
        .filter(function (entry) {
          return entry.offset <= 7;
        })
        .sort(function (first, second) {
          return first.offset - second.offset;
        });

      if (!upcoming.length) {
        container.innerHTML = "<p>No scientist birthdays are listed in the next seven days.</p>";
        return;
      }

      container.innerHTML = upcoming.map(function (entry) {
        var scientist = entry.scientist;
        var birthday = new Date(today.getFullYear(), entry.date.getMonth(), entry.date.getDate());
        var dateLabel = birthday.toLocaleDateString(undefined, {
          month: "long",
          day: "numeric"
        });
        return [
          "<a class=\"scientist-card\" href=\"{{ '/scientist.html' | relative_url }}?slug=" + encodeURIComponent(scientist.slug) + "\">",
          "<h3>" + escapeHtml(scientist.name) + "</h3>",
          '<p class="birthday-date">Birthday: ' + dateLabel + "</p>",
          "<p>" + escapeHtml(scientist.bio) + "</p>",
          "<p><strong>Contribution:</strong> " + escapeHtml(scientist.contribution) + "</p>",
          "</a>"
        ].join("");
      }).join("");
    })
    .catch(function () {
      container.innerHTML = "<p>Scientist birthday information is temporarily unavailable.</p>";
    });
})();
