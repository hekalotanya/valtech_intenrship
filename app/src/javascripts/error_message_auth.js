const errorMessage = document.querySelector('.error__message');
const successMessage = document.querySelector('.success__message');

if (errorMessage) {
  setTimeout(() => {
    element.style.display = 'none';
  }, 6000)
}

if (successMessage) {
  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 3000)
}