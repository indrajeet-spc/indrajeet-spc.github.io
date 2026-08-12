document.addEventListener('DOMContentLoaded', function () {
  function slugify(name) {
    return (name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/(^-|-$)/g, '');
  }

  function normalizeKey(value) {
    return (value || '')
      .toLowerCase()
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  var sectionMap = {};
  var contentRoot = document.querySelector('.pp-content') || document.querySelector('.container.prose') || document.querySelector('main') || document.body;

  if (contentRoot) {
    Array.from(contentRoot.querySelectorAll('h3')).forEach(function (h3) {
      // prefer explicit {#slug} in the heading text if present
      var textRaw = h3.textContent || '';
      var explicit = (textRaw.match(/\{\#([^\}]+)\}/) || [])[1];
      var generatedId = explicit || h3.id || h3.getAttribute('id') || slugify(textRaw || '');
      if (!generatedId) return;
      h3.id = generatedId;

      var title = (textRaw || '').replace(/\s*\{\#.*\}\s*$/, '').trim();
      var section = {
        id: generatedId,
        title: title,
        list: null
      };

      var node = h3.nextElementSibling;
      while (node) {
        if (node.tagName && node.tagName.toLowerCase() === 'h3') break;
        if (node.tagName && (node.tagName.toLowerCase() === 'ul' || node.tagName.toLowerCase() === 'ol')) {
          section.list = node;
          break;
        }
        node = node.nextElementSibling;
      }

      sectionMap[generatedId] = section;
      sectionMap[normalizeKey(generatedId)] = section;
      var titleNoNum = title.replace(/^\s*\d+[\.)]?\s*/, '').trim();
      sectionMap[normalizeKey(titleNoNum)] = section;
      // also index by the primary phrase before '&', ':' or similar so links like
      // '#classical-mechanics' match 'Classical Mechanics & Foundations'
      var primary = titleNoNum.split(/[&:\u2013\u2014\-–—]/)[0].trim();
      if (primary) sectionMap[normalizeKey(primary)] = section;
    });
    console.info('Physics Pioneers: detected sections', Object.keys(sectionMap));
  }

  function renderRightList(id) {
    var layout = document.querySelector('.pp-layout');
    if (!layout) return;
    var right = layout.querySelector('.pp-right');
    if (!right) {
      right = document.createElement('div');
      right.className = 'pp-right';
      layout.appendChild(right);
    }
    right.innerHTML = '';

    var key = normalizeKey(id || '');
    var section = sectionMap[key] || Object.keys(sectionMap).map(function (k) { return sectionMap[k]; }).find(function (entry) {
      return entry && (normalizeKey(entry.id) === key || normalizeKey(entry.title) === key);
    });

    if (!section) {
      right.textContent = 'No content found for this subject.';
      return;
    }

    var titleEl = document.createElement('h3');
    titleEl.textContent = section.title;
    right.appendChild(titleEl);

    if (section.list) {
      var clone = section.list.cloneNode(true);
      clone.querySelectorAll('li').forEach(function (li) {
        li.style.display = 'list-item';
      });
      right.appendChild(clone);
    } else {
      right.insertAdjacentHTML('beforeend', '<p>No list available.</p>');
    }

    right.setAttribute('tabindex', '-1');
    right.focus();
  }

  var firstSectionId = Object.keys(sectionMap).find(function (key) {
    return key && sectionMap[key] && sectionMap[key].title;
  });

  if (firstSectionId && sectionMap[firstSectionId]) {
    var tocLinks = document.querySelectorAll('.section-toc a');
    tocLinks.forEach(function (a) {
      if (normalizeKey(a.getAttribute('href') || '').replace(/^#/, '') === normalizeKey(firstSectionId)) {
        a.classList.add('active');
      }
    });
    renderRightList(firstSectionId);
  }

  document.querySelectorAll('.pp-content li').forEach(function (li) {
    if (li.querySelector('.scientist-link')) return;
    var text = li.textContent.trim();
    var parts = text.split('\u2014');
    if (parts.length === 1) parts = text.split(' - ');
    var name = parts[0].trim();
    var desc = parts[1] ? parts[1].trim() : '';
    var slug = slugify(name);
    var a = document.createElement('a');
    a.className = 'scientist-link';
    a.href = '/scientist.html?slug=' + encodeURIComponent(slug);
    a.setAttribute('data-slug', slug);
    a.innerHTML = name + ' <span class="dates" data-slug="' + slug + '"></span>';
    li.innerHTML = '';
    li.appendChild(a);
    if (desc) {
      li.insertAdjacentHTML('beforeend', ' — ' + desc);
    }
  });

  document.querySelectorAll('.section-toc a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var target = (this.getAttribute('href') || '').replace(/^#/, '');
      document.querySelectorAll('.section-toc a').forEach(function (a) {
        a.classList.remove('active');
      });
      this.classList.add('active');
      renderRightList(target);
    });
  });

  fetch('/data/scientists.json')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      var map = {};
      data.forEach(function (item) { map[item.slug] = item; });
      document.querySelectorAll('.scientist-link').forEach(function (a) {
        var slug = a.dataset.slug;
        var span = a.querySelector('.dates');
        if (map[slug] && span) {
          var b = map[slug].born || '';
          var d = map[slug].died || '';
          if (b || d) {
            span.textContent = ' (' + (b || '?') + '–' + (d || '') + ')';
          }
        }
      });
    })
    .catch(function () { /* ignore */ });
});
