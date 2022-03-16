
// GET CHECKOUT PAGE
if (document.location.href.includes('http://localhost:3000/cart')) {
  let button = document.querySelector('.cart_menu__totals__checkout');
  button.onclick = () => {
    if (JSON.parse(localStorage.shop_cart).length) {
      async function fetchCheckout() {
        const response = await fetch('http://localhost:3000/checkout', {
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

      fetchCheckout();
    }
  }
}

// SET QUANTITY

if (document.location.href.includes('http://localhost:3000/checkout')) {
  const quantityValues = [...document.querySelectorAll('.des__count')];
  const quantityList = JSON.parse(localStorage.quantity);
  
  let subtotal = 0;
  
  if (quantityValues) {
    quantityValues.map(value => {
      let key = value.id;
      value.innerHTML = quantityList[key];
  
      const amountElement = document.querySelector(`.total${key}`);
      const price = document.querySelector(`.total${key}`);
      const totalPrice = quantityList[key] * parseInt(price.innerHTML);
      amountElement.innerHTML = `$${totalPrice}`;
      subtotal += totalPrice;
  
      const subtotalAmount = document.querySelector('.subtotal_amount');
      subtotalAmount.innerHTML = `$${subtotal}`;
  
  
      let taxes = parseInt(subtotal * 0.01);
      const taxesElement = document.querySelector('.taxes_amount');
      taxesElement.innerHTML = `$${taxes}`;
  
      let total = subtotal + taxes;
      const totalElement = document.querySelector('.bill__total__amount');
      totalElement.innerHTML = `$${total}`;
    })
  }
}


// SENT ORDER 
if (document.location.href.includes('http://localhost:3000/checkout')) {
  let form = document.querySelector('.checkout_page__form_block');
  if (form) {
    form.onsubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      const value = Object.fromEntries(data.entries());
      const totalAmount = parseInt(document.querySelector('.bill__total__amount').innerHTML.slice(1));
  
      const body = {
        quantityList: JSON.parse(localStorage.quantity),
        ...value,
        totalAmount,
      }
      if (JSON.parse(localStorage.shop_cart).length) {
        async function sentOrder() {
          const response = await fetch('http://localhost:3000/checkout/order', {
            mode:"cors",
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
          }).then(res => {
            localStorage.quantity = JSON.stringify({});
            localStorage.shop_cart = JSON.stringify([]);
            document.location.href = res.url;
          });
        }
  
        sentOrder();
      }
    }
  }
}
