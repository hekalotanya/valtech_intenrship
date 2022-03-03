if (document.location.href === 'http://localhost:3000/productDetail') {
  const value = document.querySelector('.quantity__block__value');
  const decrease = document.querySelector('.quantity__block__decrease');
  const increase = document.querySelector('.quantity__block__increase');
  
  decrease.addEventListener('click', () => {
    if (parseInt(value.innerHTML) > 1) {
      value.innerHTML = parseInt(value.innerHTML) - 1;
    }
    return;
  });
  
  increase.addEventListener('click', () => {
    value.innerHTML = parseInt(value.innerHTML) + 1;
  });
}

