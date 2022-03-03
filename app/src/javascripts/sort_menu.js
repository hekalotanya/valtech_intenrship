const buttonClose = document.querySelector('.left_side_bar__close');
const buttonOpen = document.querySelector('.phone_filter');
const menu = document.querySelector('.left_side_bar');


if (buttonClose) {
  buttonClose.addEventListener('click', () => {
    menu.style.transform = 'translateX(-100%)';
  })
}

if (buttonOpen) {
  buttonOpen.addEventListener('click', () => {
    menu.style.transform = 'translateX(0%)';
  });
}
