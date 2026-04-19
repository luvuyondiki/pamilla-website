(function () {
  'use strict';

  var toggle = document.getElementById('nav-toggle');
  var menu =
    document.getElementById('nav-menu') ||
    document.getElementById('nav-menu-opp') ||
    document.getElementById('nav-menu-trip') ||
    document.getElementById('nav-menu-dest');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* Sticky header shadow */
  var headerWrap = document.getElementById('site-header-wrap');
  var scrollTicking = false;

  function updateHeaderScroll() {
    scrollTicking = false;
    if (!headerWrap) return;
    var y = window.scrollY || document.documentElement.scrollTop;
    if (y > 12) {
      headerWrap.classList.add('is-scrolled');
    } else {
      headerWrap.classList.remove('is-scrolled');
    }
  }

  function onScroll() {
    if (!scrollTicking) {
      scrollTicking = true;
      window.requestAnimationFrame(updateHeaderScroll);
    }
  }

  if (headerWrap) {
    updateHeaderScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* Scroll reveal */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduceMotion && 'IntersectionObserver' in window) {
    var revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length) {
      var revObs = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              revObs.unobserve(entry.target);
            }
          });
        },
        { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
      );
      revealEls.forEach(function (el) {
        revObs.observe(el);
      });
    }
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('is-revealed');
    });
  }

  /* Stat count-up */
  function animateCount(el, target, suffix, durationMs) {
    var start = performance.now();
    function frame(now) {
      var t = Math.min(1, (now - start) / durationMs);
      var eased = 1 - Math.pow(1 - t, 3);
      var val = Math.round(target * eased);
      el.textContent = String(val) + suffix;
      if (t < 1) {
        requestAnimationFrame(frame);
      } else {
        el.textContent = String(target) + suffix;
      }
    }
    requestAnimationFrame(frame);
  }

  if ('IntersectionObserver' in window) {
    var statNums = document.querySelectorAll('.stat-strip__num[data-count]');
    if (statNums.length) {
      var statObs = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            var el = entry.target;
            statObs.unobserve(el);
            var raw = el.getAttribute('data-count');
            var suffix = el.getAttribute('data-suffix') || '';
            var target = parseInt(raw, 10);
            if (!Number.isFinite(target)) return;
            if (reduceMotion) {
              el.textContent = String(target) + suffix;
              return;
            }
            el.textContent = '0' + suffix;
            animateCount(el, target, suffix, 1100);
          });
        },
        { threshold: 0.25 }
      );
      statNums.forEach(function (n) {
        statObs.observe(n);
      });
    }
  }
})();
