'use strict';

(function init() {
  var nav = document.querySelector('#nav');
  var navToggle = document.querySelector('#nav-toggle');
  var page = document.querySelector('.page');
  var phoneInput = document.querySelector('input[name="phone"]');
  var submitButton = document.querySelector('#form-submit');

  var initializeNav = function () {
    nav.classList.add('main-nav--js');
    navToggle.classList.remove('visually-hidden');
  };

  initializeNav();

  var toggleNav = function () {
    nav.classList.toggle('main-nav--js');
    nav.classList.toggle('main-nav--absolute');
    navToggle.classList.toggle('header__toggle--open');
    page.classList.toggle('page--menu-open');
  };

  var validateInput = function () {
    var lettersPattern = /[0-9]/;

    if (!phoneInput.value.match(lettersPattern)) {
      phoneInput.setCustomValidity('Нужно вводить только цифры');
    } else {
      phoneInput.setCustomValidity('');
    }
  };

  navToggle.addEventListener('click', toggleNav);
  submitButton.addEventListener('click', validateInput);
}());
