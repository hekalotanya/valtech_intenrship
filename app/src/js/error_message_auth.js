const errorMessage = document.querySelector('.error__message');
const successMessage = document.querySelector('.success__message');

if (errorMessage) {
  errorMessage.style.right = '12px';

  setTimeout(() => {
    errorMessage.style.right = '-350px';
  }, 6000);
}

if (successMessage) {
  successMessage.style.right = '12px';

  setTimeout(() => {
    successMessage.style.right = '-350px';
  }, 3000);
}
