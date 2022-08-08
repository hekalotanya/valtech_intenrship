import { API_URL } from './helpers';
import { setStyleCart } from './set_cart_icon_styes';

const initQuanity = require('./product_quantity');

// SET LOCAL STORAGE

if (!localStorage.shop_cart) {
  localStorage.shop_cart = JSON.stringify([]);
}

if (!localStorage.quantity) {
  localStorage.quantity = JSON.stringify({});
}

function initEvents() {
  // DELETE ITEM FROM BASKET

  const buttonsDelete = document.querySelectorAll('.item__delete');

  if (buttonsDelete) {
    for (let i = 0; i < buttonsDelete.length; i++) {
      buttonsDelete[i].onclick = () => {
        document.querySelector('.preloader').classList.toggle('preloader--hiding', false);
        let shopList = [...JSON.parse(localStorage.shop_cart)];

        shopList = shopList
          .filter(product => product !== parseInt(buttonsDelete[i].id));
        localStorage.shop_cart = JSON.stringify(shopList);

        const quantityList = JSON.parse(localStorage.quantity);

        delete quantityList[buttonsDelete[i].id];
        localStorage.quantity = JSON.stringify(quantityList);

        loadBasketPage();
      };
    }
  }

  // BASKET PROCESS

  const cartIcons = document.querySelectorAll('.cart');

  if (cartIcons) {
    const quantity = document.querySelector('.quantity__block__value');

    for (let i = 0; i < cartIcons.length; i++) {
      const productId = cartIcons[i].id;

      cartIcons[i].onclick = () => {
        if (!localStorage.shop_cart) {
          const value = [];

          localStorage.shop_cart = JSON.stringify(value);
        }

        let shopList = [...JSON.parse(localStorage.shop_cart)];
        const quantityList = JSON.parse(localStorage.quantity);

        if (!shopList.find(id => id === parseInt(productId))) {
          const icon = document.querySelector(`.icon__cart${productId}`);

          if (icon) {
            icon.classList.toggle('icon__circle--active', true);
          }
          shopList.push(parseInt(productId));

          if (quantity) {
            quantityList[parseInt(productId)] = parseInt(quantity.innerHTML);
          } else {
            quantityList[parseInt(productId)] = 1;
          }

          const basketIconBlock = document.querySelector('.basket__block');

          basketIconBlock.classList.toggle('icon__block--change', true);

          setTimeout(() => {
            basketIconBlock.classList.toggle('icon__block--change', false);
          }, 2000);
        } else {
          const icon = document.querySelector(`.icon__cart${productId}`);

          if (icon) {
            icon.classList.toggle('icon__circle--active', false);
          }

          shopList = shopList
            .filter(product => product !== parseInt(cartIcons[i].id));

          delete quantityList[cartIcons[i].id];
          console.log(shopList, quantityList);
        }
        localStorage.shop_cart = JSON.stringify(shopList);
        localStorage.quantity = JSON.stringify(quantityList);
        setStyleCart();
        setCountBasket();
      };
    }
  }

  // UPDATE TOTAL OF CART

  function updateTotal() {
    const totalOfAll = document.querySelector('.amount__summ');
    const allTotals = [...document.querySelectorAll('.item__total')];
    let totalAmount = 0;

    allTotals.map(item => {
      totalAmount += parseInt(item.innerHTML.slice(1));
    });

    if (totalOfAll) {
      totalOfAll.innerHTML = `$${totalAmount}`;
    }
  }

  // GET TOTAL SUMM

  if (document.location.href.includes(`${API_URL}cart`)) {
    const quantityBlocks = document.querySelectorAll('.quantity__block');

    for (let i = 0; i < quantityBlocks.length; i++) {
      quantityBlocks[i].onclick = () => {
        const amountElement = document.querySelector(`.total${quantityBlocks[i].id}`);
        const price = document.querySelector(`.price${quantityBlocks[i].id}`);
        const valueQuantity = document.querySelector(`.value${quantityBlocks[i].id}`);
        const totalPrice = parseInt(valueQuantity.innerHTML)
          * parseInt(price.innerHTML.slice(1));

        amountElement.innerHTML = `$${totalPrice}`;

        const quantityList = JSON.parse(localStorage.quantity);

        quantityList[quantityBlocks[i].id] = parseInt(valueQuantity.innerHTML);
        localStorage.quantity = JSON.stringify(quantityList);

        updateTotal();
      };
    }
  }

  // SET QUANTITY

  if (document.location.href.includes(`${API_URL}cart`)) {
    const quantityValues
      = [...document.querySelectorAll('.quantity__block__value')];
    const quantityList = JSON.parse(localStorage.quantity);

    quantityValues.map(value => {
      const key = value.id;

      value.innerHTML = quantityList[key];

      const amountElement = document.querySelector(`.total${key}`);
      const price = document.querySelector(`.price${key}`);
      const totalPrice = quantityList[key] * parseInt(price.innerHTML.slice(1));

      amountElement.innerHTML = `$${totalPrice}`;
    });

    updateTotal();
  }

  // SET BASKET COUNT

  function setCountBasket() {
    const elementCount = document.querySelector('.basket__count');

    if (elementCount) {
      elementCount.innerHTML = `${JSON.parse(localStorage.shop_cart).length}`;
    }
  }

  setCountBasket();
}

// OPEN AND UPDATE BASKET

const buttonsCart = document.querySelectorAll('.basket__block');
const buttonUpdate = document.querySelector('.cart_menu__buttons__update');

function loadBasketPage() {
  async function fetchBasket() {
    const response = await fetch(`${API_URL}cart`, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: localStorage.shop_cart,
    });

    return response.text();
  }

  fetchBasket().then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const productBlock = document.querySelector('.cart_list__products');

    productBlock.innerHTML = doc
      .querySelector('.cart_list__products').innerHTML;
    initEvents();
    initQuanity.initQuantityEvents();
    document.querySelector('.preloader').classList.toggle('preloader--hiding', true);
  });
}

const page = document.querySelector('.cart_page');

if (page) {
  document.querySelector('.preloader').classList.toggle('preloader--hiding', false);
  window.onload = () => loadBasketPage();
}

if (buttonsCart) {
  for (let i = 0; i < buttonsCart.length; i++) {
    buttonsCart[i].onclick = () => {
      document.location.href = `${API_URL}cart`;
    };
  }
}

if (buttonUpdate) {
  buttonUpdate.onclick = () => loadBasketPage();
}

// MESSAGE FOR EMPTY CART
const menuElement = document.querySelector('.cart_list__names_of_column');

if (document.location.href === `${API_URL}cart`) {
  if (JSON.parse(localStorage.shop_cart).length === 0) {
    const message = document.querySelector('.cart__message');

    message.classList.toggle('cart__message--active', true);
    menuElement.classList.toggle('cart_list__names_of_column--disabled', true);
  }
}

initEvents();

export { initEvents };
