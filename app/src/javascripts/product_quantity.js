if (document.location.href.includes('http://localhost:3000/products')) {
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
}



if (document.location.href === 'http://localhost:3000/cart') {
  const decrease = document.querySelectorAll('.quantity__block__decrease');
  const increase = document.querySelectorAll('.quantity__block__increase');

  if (decrease) {
    for (let i = 0; i < decrease.length; i++) {
      const value = document.querySelector(`.value${decrease[i].id}`);
      decrease[i].addEventListener('click', () => {
        if (parseInt(value.innerHTML) > 1) {
          value.innerHTML = parseInt(value.innerHTML) - 1;
        }
        return;
      });
    }
  }

  if (increase) {
    for (let i = 0; i < increase.length; i++) {
      const value = document.querySelector(`.value${increase[i].id}`);
      increase[i].addEventListener('click', () => {
        value.innerHTML = parseInt(value.innerHTML) + 1;
      });
    }
  }
}
