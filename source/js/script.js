"use strict";

const nav = document.querySelector('#nav');
const navtoggle = document.querySelector('#nav-toggle');

const initializeNav = () => {
  nav.classList.add('main-nav--js');
  navtoggle.classList.remove('visually-hidden');
}

initializeNav();

const toggleNav = () => {
  nav.classList.toggle('main-nav--js');
  nav.classList.toggle('main-nav--absolute');
  navtoggle.classList.toggle('header__toggle--open');
}

navtoggle.addEventListener('click', toggleNav);
