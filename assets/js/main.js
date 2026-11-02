/* Learn cyber security — shared behaviour: mobile menu, active link, footer year */
(function () {
  'use strict';

  var START_YEAR = 2026;

  // Footer year (শুরুর বছর থেকে চলতি বছর পর্যন্ত স্বয়ংক্রিয়ভাবে)
  var yearEl = document.getElementById('copyright-year');
  if (yearEl) {
    var now = new Date().getFullYear();
    var text = now > START_YEAR ? START_YEAR + '–' + now : String(START_YEAR);
    try {
      text = text.replace(/\d/g, function (d) { return '০১২৩৪৫৬৭৮৯'.charAt(Number(d)); });
    } catch (e) { /* ignore */ }
    yearEl.textContent = text;
  }

  // Active navigation item
  var path = window.location.pathname.replace(/index\.html$/, '');
  if (path.charAt(path.length - 1) !== '/') { path += '/'; }
  var links = document.querySelectorAll('.primary-nav a');
  Array.prototype.forEach.call(links, function (a) {
    var href = a.getAttribute('href');
    var active = href === '/' ? path === '/' : path.indexOf(href) === 0;
    if (active) { a.setAttribute('aria-current', 'page'); }
    else { a.removeAttribute('aria-current'); }
  });

  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (!toggle || !nav) { return; }

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন');
    nav.classList.toggle('open', open);
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  Array.prototype.forEach.call(nav.querySelectorAll('a'), function (a) {
    a.addEventListener('click', function () { setOpen(false); });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 760) { setOpen(false); }
  });
})();
