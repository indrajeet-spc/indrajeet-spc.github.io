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
  var scientistMap = null; // cache fetched scientist data by slug
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

    // Fallback: if no sections found, try parsing raw Markdown text (when serving .md directly)
    if (Object.keys(sectionMap).length === 0) {
      console.info('Physics Pioneers: attempting markdown fallback parse');
      var txt = contentRoot.innerText || contentRoot.textContent || '';
      var lines = txt.split(/\r?\n/);
      var current = null;
      for (var i = 0; i < lines.length; i++) {
        var L = lines[i].trim();
        var m = L.match(/^###\s*(.*)/);
        if (m) {
          // start a new section
          if (current) {
            // finalize previous
            sectionMap[current.id] = current;
            sectionMap[normalizeKey(current.id)] = current;
            sectionMap[normalizeKey(current.title.replace(/^\s*\d+[\.)]?\s*/,''))] = current;
          }
          var rawTitle = m[1] || '';
          var explicit = (rawTitle.match(/\{\#([^\}]+)\}/) || [])[1];
          var title = rawTitle.replace(/\s*\{\#.*\}\s*$/, '').trim();
          var id = explicit || slugify(title) || 'section-' + i;
          var ul = document.createElement('ul');
          current = { id: id, title: title, list: ul };
          continue;
        }
        if (current && L.match(/^[-*]\s+/)) {
          var li = document.createElement('li');
          li.textContent = L.replace(/^[-*]\s+/, '');
          current.list.appendChild(li);
        }
      }
      if (current) {
        sectionMap[current.id] = current;
        sectionMap[normalizeKey(current.id)] = current;
        sectionMap[normalizeKey(current.title.replace(/^\s*\d+[\.)]?\s*/,''))] = current;
      }
      console.info('Physics Pioneers: markdown fallback produced sections', Object.keys(sectionMap));
    }
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

    // If no section found via DOM mapping, try extracting a markdown block from the page HTML/text
    if (!section) {
      try {
        var html = document.body.innerHTML || '';
        // First try to find a heading with an explicit {#id}
        var reExplicit = new RegExp('###\\s*[^<]*\\{#' + id + '\\}([\\s\\S]*?)(?=(?:###|$))','i');
        var match = html.match(reExplicit);
        if (!match) {
          // try matching heading line by its slugified/normalized id in text
          var labelPattern = id.replace(/[-\s]+/g, '[\\s\\-\u2013\u2014]*');
          var reLabel = new RegExp('###\\s*.*' + labelPattern + '.*([\\s\\S]*?)(?=(?:###|$))','i');
          match = html.match(reLabel);
        }
        if (match && match[1]) {
          var block = match[1];
          // extract lines that start with - or *
          var lines = block.split(/\r?\n/);
          var items = lines.map(function (l) { return l.trim(); }).filter(function (l) { return /^[-*]\s+/.test(l); });
          var titleText = id.replace(/-/g,' ');
          var titleEl = document.createElement('h3');
          titleEl.textContent = titleText;
          right.appendChild(titleEl);
          if (items.length) {
            var ul = document.createElement('ul');
            items.forEach(function(it){ var li = document.createElement('li'); li.textContent = it.replace(/^[-*]\s+/,''); ul.appendChild(li); });
            // convert list items to links before appending
            convertListToLinks(ul);
            right.appendChild(ul);
            right.setAttribute('tabindex', '-1'); right.focus();
            return;
          }
        }
      } catch (e) {
        console.warn('Physics Pioneers: markdown extraction failed', e);
      }

      right.textContent = 'No content found for this subject.';
      return;
    }

    var titleEl = document.createElement('h3');
    titleEl.textContent = section.title;
    right.appendChild(titleEl);

    if (section.list) {
      var clone = section.list.cloneNode(true);
      clone.querySelectorAll('li').forEach(function (li) { li.style.display = 'list-item'; });
      // convert plain list items into links
      convertListToLinks(clone);
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

  // populate dates for any links created from the existing content
  ensureScientistData(populateDates);

  // Helper: convert LI elements inside a UL/OL to links to scientist page
  function convertListToLinks(rootList) {
    Array.from(rootList.querySelectorAll('li')).forEach(function (li) {
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
      if (desc) li.insertAdjacentHTML('beforeend', ' — ' + desc);
    });
    // after creating links, ensure dates are populated
    ensureScientistData(populateDates);
  }

  function populateDates() {
    if (!scientistMap) return;
    document.querySelectorAll('.scientist-link').forEach(function (a) {
      var slug = a.dataset.slug;
      var span = a.querySelector('.dates');
      if (scientistMap[slug] && span) {
        var b = scientistMap[slug].born || '';
        var d = scientistMap[slug].died || '';
        if (b || d) span.textContent = ' (' + (b || '?') + '–' + (d || '') + ')';
      }
    });
  }

  function ensureScientistData(cb) {
    if (scientistMap) { if (cb) cb(); return; }

    var candidates = [
      '/data/scientists.json',
      'data/scientists.json',
      window.location.origin + '/data/scientists.json',
      (window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '') + '/data/scientists.json').replace(/([^:])\/\//g,'$1/'),
    ];

    var tried = 0;
    function tryNext() {
      if (tried >= candidates.length) { console.warn('Physics Pioneers: could not load scientists.json from any candidate'); if (cb) cb(); return; }
      var url = candidates[tried++];
      // avoid fetching obvious duplicates
      if (!url) return tryNext();
      fetch(url)
        .then(function (r) {
          if (!r.ok) throw new Error('status ' + r.status);
          return r.json();
        })
        .then(function (data) {
          scientistMap = {};
          data.forEach(function (item) { scientistMap[item.slug] = item; });
          if (cb) cb();
        })
        .catch(function (err) {
          console.debug('Physics Pioneers: failed to load', url, err && err.message);
          tryNext();
        });
    }

    tryNext();
  }

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

  // data loading handled via ensureScientistData/populateDates
});
