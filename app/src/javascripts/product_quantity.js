const value = document.querySelector('.quantity__block__value');
const decrease = document.querySelector('.quantity__block__decrease');
const increase = document.querySelector('.quantity__block__increase');

if (decrease) {
  decrease.addEventListener('click', () => {
    if (parseInt(value.innerHTML) > 1) {
      value.innerHTML = parseInt(value.innerHTML) - 1;
    }
    return;
  });
}

if (increase) {
  increase.addEventListener('click', () => {
    value.innerHTML = parseInt(value.innerHTML) + 1;
  });
}
