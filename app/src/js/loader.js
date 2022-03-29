window.addEventListener('beforeunload', () => {
  document.querySelector('.preloader').classList.toggle('preloader--hiding', false);
});
