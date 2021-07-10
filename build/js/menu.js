const nav = document.querySelector('#nav');
const navToggle = document.querySelector('#nav-toggle');
const page = document.querySelector('.page');

const initializeNav = () => {
  nav.classList.add('main-nav--js');
  navToggle.classList.remove('visually-hidden');
};

initializeNav();

const toggleNav = () => {
  nav.classList.toggle('main-nav--js');
  nav.classList.toggle('main-nav--absolute');
  navToggle.classList.toggle('header__toggle--open');
  page.classList.toggle('page--menu-open');
};

navToggle.addEventListener('click', toggleNav);
