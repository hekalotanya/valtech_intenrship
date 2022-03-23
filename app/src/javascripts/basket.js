const initQuanity = require('./product_quantity');
import { API_URL } from './helpers';

function initEvents() {

  // SET LOCAL STORAGE

  if (!localStorage.shop_cart) {
    localStorage.shop_cart = JSON.stringify([]);
  }

  if (!localStorage.quantity) {
    localStorage.quantity = JSON.stringify({});
  }


  // DELETE ITEM FROM BASKET

  const buttonsDelete = document.querySelectorAll('.item__delete');

  if (buttonsDelete) {
    for (let i = 0; i < buttonsDelete.length; i++) {

      buttonsDelete[i].onclick = () => {
        let shopList = [...JSON.parse(localStorage.shop_cart)];
        shopList = shopList.filter(product => product !== parseInt(buttonsDelete[i].id));
        localStorage.shop_cart = JSON.stringify(shopList);

        let quantityList = JSON.parse(localStorage.quantity);
        delete quantityList[buttonsDelete[i].id];
        localStorage.quantity = JSON.stringify(quantityList);

        loadBasketPage();
      }
    }
  }




  // ADD TO BASKET 

  const buttonsAdd = document.querySelectorAll('.cart');

  if (buttonsAdd) {
    let quantity = document.querySelector('.quantity__block__value');
    for (let i = 0; i < buttonsAdd.length; i++) {
      let productId = buttonsAdd[i].id;

      buttonsAdd[i].onclick = () => {
        if (!localStorage.shop_cart) {
          let value = [];
          localStorage.shop_cart = JSON.stringify(value);
        }
    
        let shopList = [...JSON.parse(localStorage.shop_cart)];
        let quantityList = JSON.parse(localStorage.quantity);
        if (!shopList.find(id => id === parseInt(productId))) {
          shopList.push(parseInt(productId));
          if (quantity) {
            quantityList[parseInt(productId)] = parseInt(quantity.innerHTML);
          } else {
            quantityList[parseInt(productId)] = 1;
          }
        }
        localStorage.shop_cart = JSON.stringify(shopList);
        localStorage.quantity = JSON.stringify(quantityList);

        const basketIconBlock = document.querySelector('.basket__block');
        basketIconBlock.classList.toggle('icon__block--change', true);

        setTimeout(() => {
          basketIconBlock.classList.toggle('icon__block--change', false);
        }, 2000)

        setCountBasket();
      }
    }
  }


  // UPDATE TOTAL OF CART

  function updateTotal() {
    const totalOfAll = document.querySelector('.amount__summ');
    const allTotals = [...document.querySelectorAll('.item__total')];
    let totalAmount = 0;

    allTotals.map(item => {
      totalAmount += parseInt(item.innerHTML.slice(1));
    })

    totalOfAll.innerHTML = `$${totalAmount}`;
  }

  // GET TOTAL SUMM

  if (document.location.href === (`${API_URL}cart`)) {
    const quantityBlocks = document.querySelectorAll('.quantity__block');

    for (let i = 0; i < quantityBlocks.length; i++) {
      quantityBlocks[i].onclick = () => {
        const amountElement = document.querySelector(`.total${quantityBlocks[i].id}`);
        const price = document.querySelector(`.price${quantityBlocks[i].id}`);
        const valueQuantity = document.querySelector(`.value${quantityBlocks[i].id}`);
        const totalPrice = parseInt(valueQuantity.innerHTML) * parseInt(price.innerHTML.slice(1));
        amountElement.innerHTML = `$${totalPrice}`;

        const quantityList = JSON.parse(localStorage.quantity);
        quantityList[quantityBlocks[i].id] = parseInt(valueQuantity.innerHTML);
        localStorage.quantity = JSON.stringify(quantityList);

        updateTotal();
      }
    }
  }


  // SET QUANTITY


  if (document.location.href === `${API_URL}cart`) {
    const quantityValues = [...document.querySelectorAll('.quantity__block__value')];
    const quantityList = JSON.parse(localStorage.quantity);


    quantityValues.map(value => {
      let key = value.id;
      value.innerHTML = quantityList[key];

      const amountElement = document.querySelector(`.total${key}`);
      const price = document.querySelector(`.price${key}`);
      const totalPrice = quantityList[key] * parseInt(price.innerHTML.slice(1));
      amountElement.innerHTML = `$${totalPrice}`;
    })

    updateTotal();
  }


  // SET BASKET COUNT 

  function setCountBasket () {
    let elementCount = document.querySelector('.basket__count');
    if (elementCount) {
      elementCount.innerHTML = `${JSON.parse(localStorage.shop_cart).length}`;
    }
  }

  setCountBasket();
}

// OPEN AND UPDATE BASKET 

const buttonsCart = document.querySelectorAll('.basket__block');
const buttonUpdate = document.querySelector('.cart_menu__buttons__update');

function loadBasketPage () {
  async function fetchBasket() {
    const response = await fetch(`${API_URL}cart`, {
      mode:"cors",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: localStorage.shop_cart,
    })

    return response.text();
  }
  
  fetchBasket().then( html => {
    let parser = new DOMParser();
    let doc = parser.parseFromString(html, 'text/html');
    const productBlock = document.querySelector('.cart_list__products');
    productBlock.innerHTML = doc.querySelector('.cart_list__products').innerHTML;
    initEvents();
    initQuanity.initQuantityEvents();
  });
}

const page = document.querySelector('.cart_page');
if (page) {
  window.onload = () => loadBasketPage();
}

if (buttonsCart) {
  for (let i = 0; i < buttonsCart.length; i++) {
    buttonsCart[i].onclick = () => {
      document.location.href = `${API_URL}cart`;
    }
  }
}

if (buttonUpdate) {
  buttonUpdate.onclick = () => loadBasketPage();
}

// MESSAGE FOR EMPTY CART
const cartElement = document.querySelector('.cart_list');
const menuElement = document.querySelector('.cart_list__names_of_column');
if (document.location.href === `${API_URL}cart`) {
  if (JSON.parse(localStorage.shop_cart).length === 0) {
    const message = document.createElement('span');
    message.className = 'cart__message grid__item--1--12';
    message.innerHTML = `It's empty :(`
    cartElement.append(message);
    menuElement.style.display = 'none';
  } else {
    menuElement.style.display = 'grid';
  }
}

initEvents();

export { initEvents };