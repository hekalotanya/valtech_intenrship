const icons = [...document.querySelectorAll('.show_password')];

if (icons) {
  icons.map(icon => {
    icon.addEventListener('click', () => {
      const iconCircle = [...icon.children][1];
      const input = [...iconCircle.parentElement.parentElement.children][0];

      if (input.getAttribute('type') === 'password') {
        input.removeAttribute('type');
        input.setAttribute('type', 'text');

        iconCircle.classList.toggle('show_password__icon_circle--active', true);
      } else {
        input.removeAttribute('type');
        input.setAttribute('type', 'password');

        iconCircle.classList.toggle('show_password__icon_circle--active', false);
      }
    });
  });
}
