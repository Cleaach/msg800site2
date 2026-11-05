(function () {
  var sections = window.SECTIONS || [];
  var totalPages = sections.reduce(function (n, s) { return n + s.pages.length; }, 0);
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var esc = function (value) {
    return String(value).replace(/[&<>"']/g, function (c) {
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c];
    });
  };
  function topbar(current) {
    return '<header class="topbar"><button class="menu-button" id="menuButton" aria-label="Open navigation">☰</button>' +
      '<div class="crumb">Basic Stochastic Processes <span>/</span> <strong>' + esc(current || 'Course index') + '</strong></div>' +
      '<a class="top-link" href="' + (current ? './' : '#about') + '">' + (current ? 'Index' : 'About') + '</a></header>';
  }
  function nav() {
    return sections.map(function (s, i) {
      return '<a class="nav-item" href="#section/' + s.id + '" data-section="' + s.id + '">' +
        '<span class="nav-number">' + String(i + 1).padStart(2, '0') + '</span><span>' + esc(s.title) + '</span></a>';
    }).join('');
  }
  function shell(current, body) {
    document.body.innerHTML = '<button class="scrim" id="scrim" aria-label="Close navigation"></button>' +
      '<aside class="sidebar" id="sidebar"><div class="brand"><div class="brand-mark">σ</div><div><div class="brand-title">Stochastic<br>Processes</div><div class="brand-subtitle">lecture notes</div></div></div>' +
      '<div class="sidebar-tools"><label class="search-wrap" for="search"><span aria-hidden="true">⌕</span><input id="search" type="search" placeholder="Search notes…" autocomplete="off"><kbd>/</kbd></label></div>' +
      '<nav id="sectionNav" aria-label="Sections">' + nav() + '</nav><div class="sidebar-foot">Transcribed from handwritten lecture notes<br><span>Scroll, search, and study anywhere.</span></div></aside>' +
      '<main class="main">' + topbar(current) + body + '</main>';
    bindShell();
  }
  function sectionCards() {
    return sections.map(function (s, i) {
      return '<a class="section-card" href="#section/' + s.id + '"><div class="card-index">' + String(i + 1).padStart(2, '0') + ' / section</div>' +
        '<h3>' + esc(s.title) + '</h3><p>' + esc(s.subtitle) + '</p><div class="card-foot"><span>' + s.pages.length + ' pages</span><span>' + esc(s.file) + '</span></div></a>';
    }).join('');
  }
  function searchResults(query) {
    var needle = query.trim().toLowerCase(), hits = [];
    sections.forEach(function (s) {
      s.pages.forEach(function (p) {
        var plain = (p.title + ' ' + p.content).replace(/<[^>]+>/g, ' ').replace(/&[^;]+;/g, ' ');
        var at = plain.toLowerCase().indexOf(needle);
        if (at !== -1 || s.title.toLowerCase().indexOf(needle) !== -1 || s.subtitle.toLowerCase().indexOf(needle) !== -1) {
          var start = Math.max(0, at - 55), excerpt = plain.slice(start, start + 180).replace(/\s+/g, ' ').trim();
          hits.push('<div class="result-card"><a href="#section/' + s.id + '#page-' + p.page + '"><small>' + esc(s.title) + ' · page ' + p.page + '</small><h3>' + esc(p.title) + '</h3><p>' + esc(excerpt || s.subtitle) + '…</p></a></div>');
        }
      });
    });
    return '<div class="eyebrow">Search results</div><h2>' + hits.length + ' result' + (hits.length === 1 ? '' : 's') + ' for “' + esc(query) + '”</h2>' +
      (hits.join('') || '<div class="no-results">No matching page found. Try Fourier, Markov, martingale, queue, or spectrum.</div>');
  }
  function home(query) {
    query = query || '';
    var isSearch = query.trim().length > 0;
    var body = '<section class="hero" id="about"><div class="eyebrow">A compact study companion</div><h1>Basic <em>Stochastic</em><br>Processes</h1>' +
      '<p>Clean, searchable, page-by-page transcriptions of the course notes, formatted for quick study on a phone or desktop.</p>' +
      '<div class="hero-meta"><span><b>' + sections.length + '</b> sections</span><span><b>' + totalPages + '</b> pages</span><span>mobile-ready</span></div></section>' +
      '<div class="content-head"><div><div class="eyebrow">' + (isSearch ? 'Search' : 'Course index') + '</div><h2>' + (isSearch ? 'Find a concept' : 'Choose a section') + '</h2></div>' +
      '<div class="view-note">' + (isSearch ? 'Searches titles and transcriptions' : 'Tap a section to begin') + '</div></div>' +
      (isSearch ? '<div class="search-results">' + searchResults(query) + '</div>' : '<div class="section-grid">' + sectionCards() + '</div>') +
      '<footer class="footer">Built for quick review · Equations use a math-first serif fallback · <button id="backTop">Back to top ↑</button></footer>';
    shell('', body);
    document.title = 'Basic Stochastic Processes';
    var back = $('#backTop');
    if (back) back.addEventListener('click', function () { window.scrollTo({top:0, behavior:'smooth'}); });
    var box = $('#search');
    if (isSearch && box) box.value = query;
  }
  function sectionPage(section) {
    var pageCards = section.pages.map(function (p) {
      return '<article class="page-block" id="page-' + p.page + '"><div class="transcript"><div class="page-label"><span>Page ' + p.page + '</span><a href="#page-' + p.page + '">#' + String(p.page).padStart(2, '0') + '</a></div>' +
        '<h2>' + esc(p.title) + '</h2>' + p.content + '</div></article>';
    }).join('');
    var index = sections.indexOf(section), previous = sections[index - 1], next = sections[index + 1];
    var body = '<section class="section-page"><a class="back-link" href="./">← All sections</a><div class="eyebrow" style="margin-top:28px">' + esc(section.file) + '</div>' +
      '<h1>' + esc(section.title) + '</h1><p class="lead">' + esc(section.subtitle) + '</p><div class="page-tools"><span>' + section.pages.length + ' transcribed pages</span><span>·</span><span>Page-by-page documentation</span></div>' +
      '<div class="section-notes">' + pageCards + '</div><div class="section-nav-bottom">' +
      (previous ? '<a href="#section/' + previous.id + '">← ' + esc(previous.title) + '</a>' : '<span></span>') +
      (next ? '<a href="#section/' + next.id + '">' + esc(next.title) + ' →</a>' : '<span></span>') + '</div></section>';
    shell(section.title, body);
    document.title = section.title + ' · Basic Stochastic Processes';
    var fragment = location.hash.indexOf('#page-');
    if (fragment !== -1) {
      var id = location.hash.slice(fragment + 6);
      setTimeout(function () { var target = document.getElementById('page-' + id); if (target) target.scrollIntoView({block:'start'}); }, 0);
    }
  }
  function bindShell() {
    var sidebar = $('#sidebar'), scrim = $('#scrim');
    var menu = $('#menuButton');
    if (menu) menu.addEventListener('click', function () { sidebar.classList.add('open'); scrim.classList.add('open'); });
    if (scrim) scrim.addEventListener('click', function () { sidebar.classList.remove('open'); scrim.classList.remove('open'); });
    document.querySelectorAll('.nav-item').forEach(function (item) { item.addEventListener('click', function () { sidebar.classList.remove('open'); scrim.classList.remove('open'); }); });
    var search = $('#search');
    if (search) search.addEventListener('input', function () {
      var value = search.value.trim();
      if (location.hash.indexOf('#section/') === 0) {
        if (value) location.hash = '#search/' + encodeURIComponent(value);
      } else {
        home(value);
        var current = $('#search');
        if (current) { current.focus(); current.setSelectionRange(value.length, value.length); }
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && document.activeElement && document.activeElement.tagName !== 'INPUT') { e.preventDefault(); var input = $('#search'); if (input) input.focus(); }
    }, {once:true});
  }
  function render() {
    var hash = location.hash.slice(1);
    if (hash.indexOf('search/') === 0) home(decodeURIComponent(hash.slice(7)));
    else if (hash.indexOf('section/') === 0) {
      var id = hash.slice(8).split('#')[0];
      sectionPage(sections.find(function (s) { return s.id === id; }) || sections[0]);
    } else home('');
    document.querySelectorAll('.nav-item').forEach(function (item) {
      item.classList.toggle('active', hash.indexOf('section/') === 0 && item.dataset.section === hash.slice(8).split('#')[0]);
    });
  }
  window.addEventListener('hashchange', render);
  render();
})();
