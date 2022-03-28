const errorMessage = document.querySelector('.error__message--auth');
const errorMessagePassw = document.querySelector('.error__message');
const successMessage = document.querySelector('.success__message');

if (errorMessage) {
  setTimeout(() => {
    errorMessage.classList.toggle('error__message--disabled', true);
  }, 3000);
}

if (successMessage) {
  successMessage.style.right = '12px';

  setTimeout(() => {
    successMessage.style.right = '-350px';
  }, 3000);
}

if (errorMessagePassw) {
  errorMessagePassw.style.right = '12px';

  setTimeout(() => {
    errorMessagePassw.style.right = '-350px';
  }, 3000);
}
