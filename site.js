(function () {
  const nav = document.getElementById('site-nav');
  const toggle = document.querySelector('[data-menu-toggle]');
  if (!nav) return;

  toggle && toggle.addEventListener('click', function () {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      toggle && toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();
