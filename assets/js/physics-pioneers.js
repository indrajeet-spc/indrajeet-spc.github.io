document.addEventListener('DOMContentLoaded', function () {
  // Wrap headings + following lists into section blocks (id comes from heading id)
  var firstH3 = document.querySelector('h3');
  var contentRoot = (firstH3 && firstH3.parentElement) || document.querySelector('.container.prose') || document.querySelector('main') || document.body;
  if (contentRoot) {
    var headings = Array.from(contentRoot.querySelectorAll('h3'));
    headings.forEach(function (h3, idx) {
      var id = h3.id || h3.getAttribute('id');
      if (!id) return;
      var wrapper = document.createElement('div');
      wrapper.className = 'section-block';
      wrapper.id = id;
      // insert wrapper before heading and move heading into wrapper
      contentRoot.insertBefore(wrapper, h3);
      wrapper.appendChild(h3);
      // move following siblings until next h3
      var sib = wrapper.nextSibling;
      while (sib && !(sib.nodeType===1 && sib.tagName==='H3')) {
        var next = sib.nextSibling;
        wrapper.appendChild(sib);
        sib = next;
      }
    });

    // hide all sections initially, show first by default
    var sections = Array.from(contentRoot.querySelectorAll('.section-block'));
    sections.forEach(function(s){ s.style.display = 'none'; });
    if (sections.length) {
      sections[0].style.display = 'block';
      // mark corresponding TOC link active
      var firstId = sections[0].id;
      var tocLinks = document.querySelectorAll('.section-toc a');
      tocLinks.forEach(function(a){ if (a.getAttribute('href').substring(1)===firstId) a.classList.add('active'); });
      // render the first section into the right pane
      renderRightList(firstId);
    }
  }

  // Convert plain list items into links and set data-slug
  function slugify(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/(^-|-$)/g, '');
  }
  document.querySelectorAll('.section-block li').forEach(function (li) {
    // skip if already converted
    if (li.querySelector('.scientist-link')) return;
    var text = li.textContent.trim();
    var parts = text.split('\u2014'); // em dash
    if (parts.length===1) parts = text.split(' - ');
    var name = parts[0].trim();
    var desc = parts[1] ? parts[1].trim() : '';
    var slug = slugify(name);
    var a = document.createElement('a');
    a.className = 'scientist-link';
    a.href = '/scientist.html?slug=' + encodeURIComponent(slug);
    a.setAttribute('data-slug', slug);
    a.innerHTML = name + ' <span class="dates" data-slug="' + slug + '"></span>';
    // clear li and append
    li.innerHTML = '';
    li.appendChild(a);
    if (desc) {
      li.insertAdjacentHTML('beforeend', ' — ' + desc);
    }
  });

  // Toggle sections when TOC links clicked
  document.querySelectorAll('.section-toc a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var target = this.getAttribute('href').substring(1);
      // mark active
      document.querySelectorAll('.section-toc a').forEach(function (a) { a.classList.remove('active'); });
      this.classList.add('active');
      // render the subject's list into the right pane
      renderRightList(target);
    });
  });

  // Render a subject list into the visible right pane
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
    // Try to find the heading element with this id, then gather the following list
    function slugifyText(t) {
      return t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/(^-|-$)/g, '');
    }

    var heading = document.querySelector('h3[id="' + id + '"]') || document.getElementById(id);
    if (!heading) {
      // try matching by slugified heading text
      var allH3 = Array.from(document.querySelectorAll('h3'));
      for (var i=0;i<allH3.length;i++) {
        var h = allH3[i];
        var text = h.textContent || '';
        if (slugifyText(text) === id) { heading = h; break; }
        // remove numbering like '1. ' or '1) '
        var noNum = text.replace(/^\s*\d+\.?\s*/,'');
        if (slugifyText(noNum) === id) { heading = h; break; }
        // fallback: contains words
        if (text.toLowerCase().indexOf(id.replace(/-/g,' ')) !== -1) { heading = h; break; }
      }
    }
    if (!heading) {
      // helpful debug info in console
      console.warn('Physics Pioneers: cannot find heading for', id);
      console.info('Available headings:', Array.from(document.querySelectorAll('h3')).map(function(h){return {text:h.textContent, id:h.id};}));
      right.textContent = 'No content found for this subject.';
      return;
    }
    var title = heading.textContent.trim();
    var titleEl = document.createElement('h3');
    titleEl.textContent = title;
    right.appendChild(titleEl);

    // walk siblings after the heading until next h3 to find the first list
    var node = heading.nextElementSibling;
    var foundList = null;
    while (node && !(node.tagName && node.tagName.toLowerCase() === 'h3')) {
      if (!foundList && (node.tagName && (node.tagName.toLowerCase() === 'ul' || node.tagName.toLowerCase() === 'ol'))) {
        foundList = node;
        break;
      }
      node = node.nextElementSibling;
    }

    if (foundList) {
      // clone to avoid moving original nodes
      var clone = foundList.cloneNode(true);
      // ensure list items are displayed as block list items
      clone.querySelectorAll('li').forEach(function (li) {
        li.style.display = 'list-item';
      });
      right.appendChild(clone);
    } else {
      right.insertAdjacentHTML('beforeend', '<p>No list available.</p>');
    }
    // focus for accessibility
    right.setAttribute('tabindex', '-1');
    right.focus();
  }

  // Populate dates in the lists from data/scientists.json
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
