
// OPEN AND UPDATE BASKET 

const buttonsCart = document.querySelectorAll('.basket');
const buttonUpdate = document.querySelector('.cart_menu__buttons__update');

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

if (buttonsCart) {
  for (let i = 0; i < buttonsCart.length; i++) {
    buttonsCart[i].onclick = () => fetchBasket();
  }
}

if (buttonUpdate) {
  buttonUpdate.onclick = () => fetchBasket();
}

// DELETE ITEM FROM BASKET

const buttonsDelete = document.querySelectorAll('.item__delete');

if (buttonsDelete) {
  for (let i = 0; i < buttonsDelete.length; i++) {

    buttonsDelete[i].onclick = () => {
      let shopList = [...JSON.parse(localStorage.shop_cart)];
      shopList = shopList.filter(product => product !== parseInt(buttonsDelete[i].id));
      localStorage.shop_cart = JSON.stringify(shopList);
      fetchBasket();
    }
  }
}




// ADD TO BASKET 

const buttonsAdd = document.querySelectorAll('.cart');
let productId;


if (buttonsAdd) {
  for (let i = 0; i < buttonsAdd.length; i++) {
    let productId = buttonsAdd[i].id;

    buttonsAdd[i].onclick = () => {
      if (!localStorage.shop_cart) {
        let value = [];
        localStorage.shop_cart = JSON.stringify(value);
      }
  
      let shopList = [...JSON.parse(localStorage.shop_cart)];
      if (!shopList.find(id => id === parseInt(productId))) {
        shopList.push(parseInt(productId));
      }
      localStorage.shop_cart = JSON.stringify(shopList);
    }
  }
}
