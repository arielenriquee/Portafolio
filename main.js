(function () {
  const navbar = document.querySelector('#navbar');
  const hamburgesa = document.querySelector('#hamburger');
  if (!navbar || !hamburgesa) return;

  hamburgesa.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });

  // Cierra el menú al hacer clic en un enlace (opcional)
  navbar.querySelectorAll('ul a').forEach(a => {
    a.addEventListener('click', () => navbar.classList.remove('open'));
  });
})();

// --- Navbar fijo al hacer scroll ---
(function () {
  const navbar = document.querySelector('#navbar');
  const main = document.querySelector('main');
  if (!navbar || !main) return;

  let navbarHeight = Math.round(navbar.getBoundingClientRect().height);
  let breakpoint = main.offsetTop - navbarHeight;

  function recalc() {
    navbarHeight = Math.round(navbar.getBoundingClientRect().height);
    breakpoint = main.offsetTop - navbarHeight;
  }

  function onScroll() {
    const windowPos = window.scrollY || window.pageYOffset;
    if (windowPos >= breakpoint) {
      navbar.classList.remove('open');
      navbar.classList.add('navbar-fixed');
      main.style.marginTop = navbarHeight + 'px';
    } else {
      navbar.classList.remove('navbar-fixed');
      main.style.marginTop = '0';
    }
  }

  window.addEventListener('resize', recalc);
  window.addEventListener('load', () => { recalc(); onScroll(); });
  document.addEventListener('scroll', onScroll);
})();