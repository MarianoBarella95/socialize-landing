// necesito traer elementos del DOM
const btnToggle = document.querySelector('.btn-toggle');
const nav = document.querySelector('nav');
const inputUser = document.querySelector('.input-user');
const inputPassword = document.querySelector('.input-password');
const alertUser = document.querySelector('.alert-user');
const alertPassword = document.querySelector('.alert-password');

function toggleMenu() {
    nav.classList.toggle('show-links');
}

btnToggle.addEventListener('click', toggleMenu);

inputUser.addEventListener('input', function() {
    if (inputUser.value.length < 8) {
      alertUser.style.display = 'inline';
    } else {
      alertUser.style.display = 'none';
    }
  });

inputPassword.addEventListener('input', function() {
    const value = inputPassword.value;
    const containsNonNumber = /\D/.test(value);
  
    if (containsNonNumber) {
      alertPassword.style.display = 'inline';
    } else {
      alertPassword.style.display = 'none';
    }
  });