
// OPEN AND UPDATE BASKET 

const buttonsCart = document.querySelectorAll('.basket__block');
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

      let quantityList = JSON.parse(localStorage.quantity);
      delete quantityList[buttonsDelete[i].id];
      localStorage.quantity = JSON.stringify(quantityList);

      fetchBasket();
    }
  }
}




// ADD TO BASKET 

const buttonsAdd = document.querySelectorAll('.cart');
let productId;


if (buttonsAdd) {
  let quantity = document.querySelector('.quantity__block__value');
  for (let i = 0; i < buttonsAdd.length; i++) {
    let productId = buttonsAdd[i].id;

    buttonsAdd[i].onclick = () => {
      if (!localStorage.shop_cart) {
        let value = [];
        localStorage.shop_cart = JSON.stringify(value);
      }

       if (quantity) {
         if (!localStorage.quantity) {
           let value = {};
           localStorage.quantity = JSON.stringify(value);
         }
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
      console.log(localStorage.quantity);

      const basketCircle = document.querySelector(`.basket__circle${buttonsAdd[i].id}`);
      const basketPath = document.querySelector(`.basket__path${buttonsAdd[i].id}`);

      if (basketCircle && basketPath) {
        basketCircle.style.fill = '#60A00C';
        basketPath.style.fill = 'white';
  
        setTimeout(() => {
          basketCircle.style.fill = 'white';
          basketPath.style.fill = 'black';
        }, 500);
      }

      const basketIconBlock = document.querySelector('.basket__block');
      basketIconBlock.style.transform =  'scale(1.5)';

      setTimeout(() => {
        basketIconBlock.style.transform = 'scale(1)';
      }, 2000)

      setCountBasket();
    }
  }
}


// GET TOTAL SUMM

if (document.location.href === 'http://localhost:3000/cart') {
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


// SET QUANTITY


if (document.location.href === 'http://localhost:3000/cart') {
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
  elementCount.innerHTML = `${JSON.parse(localStorage.shop_cart).length}`;
}

setCountBasket();