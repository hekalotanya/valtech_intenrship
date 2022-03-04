const buttons = document.querySelectorAll('.basket');
const buttonUpdate = document.querySelector('.cart_menu__buttons__update');

// let listOfId = JSON.parse(localStorage.shop_cart);

// console.log(listOfId, 'listofID')

async function fetchBasket() {
  const response = await fetch('http://localhost:3000/cart', {
    mode:"cors",
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: localStorage.shop_cart,
  }).then(res => {
    document.location.href = res.url;
  });
}

if (buttons) {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => fetchBasket();
  }
}

if (buttonUpdate) {
  buttonUpdate.onclick = () => fetchBasket();
}
