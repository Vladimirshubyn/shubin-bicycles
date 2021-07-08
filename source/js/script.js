"use strict";

const nav = document.querySelector('#nav');
const navToggle = document.querySelector('#nav-toggle');
const page = document.querySelector('.page');
const form = document.querySelector('#form');
const phoneInput = document.querySelector('input[name="phone"]');
const submitButton = document.querySelector('#form-submit');

const initializeNav = () => {
  nav.classList.add('main-nav--js');
  navToggle.classList.remove('visually-hidden');
}

initializeNav();

const toggleNav = () => {
  nav.classList.toggle('main-nav--js');
  nav.classList.toggle('main-nav--absolute');
  navToggle.classList.toggle('header__toggle--open');
  page.classList.toggle('page--menu-open');
}


const validateInput = () => {
  let lettersPattern = /[0-9]/;

  if (phoneInput.value.match(lettersPattern)) {
    return true
  }
  else {
    alert("Нужно вводить только цифры");
    return false;
  }
}

const formSubmit = (evt) => {
  evt.preventDefault();
  validateInput()
}

navToggle.addEventListener('click', toggleNav);
form.addEventListener('submit', formSubmit);
