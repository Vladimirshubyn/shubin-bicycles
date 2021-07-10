const form = document.querySelector('#form');
const phoneInput = document.querySelector('input[name="phone"]');

const validateInput = () => {
  let lettersPattern = /[0-9]/;

  if (phoneInput.value.match(lettersPattern)) {
    phoneInput.setCustomValidity('');
    return true;
  } else {
    phoneInput.setCustomValidity('Нужно вводить только цифры');
    return false;
  }
};

const formSubmit = (evt) => {
  evt.preventDefault();
  validateInput();
};

form.addEventListener('submit', formSubmit);
