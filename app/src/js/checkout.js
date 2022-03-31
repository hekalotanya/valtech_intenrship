import { API_URL } from './helpers';

// FETCH CHECKOUT PAGE

async function fetchCheckout(body) {
  await fetch(`${API_URL}checkout`, {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  }).then(res => {
    document.location.href = res.url;
  });
};

if (document.location.href.includes(`${API_URL}cart`)) {
  const button = document.querySelector('.cart_menu__totals__checkout');

  // GET CHECKOUT PAGE
  if (button) {
    button.onclick = () => {
      if (JSON.parse(localStorage.shop_cart).length) {
        fetchCheckout(localStorage.shop_cart);
      }
    };
  }
}

// SET QUANTITY

if (document.location.href.includes(`${API_URL}checkout`)) {
  const quantityValues = [...document.querySelectorAll('.des__count')];
  const quantityList = JSON.parse(localStorage.quantity);

  let subtotal = 0;

  if (quantityValues) {
    quantityValues.map(value => {
      const key = value.id;

      value.innerHTML = quantityList[key];

      const amountElement = document.querySelector(`.total${key}`);
      const price = document.querySelector(`.total${key}`);
      const totalPrice = quantityList[key] * parseInt(price.innerHTML);

      amountElement.innerHTML = `$${totalPrice}`;
      subtotal += totalPrice;

      const subtotalAmount = document.querySelector('.subtotal_amount');

      subtotalAmount.innerHTML = `$${subtotal}`;

      const taxes = parseInt(subtotal * 0.01);
      const taxesElement = document.querySelector('.taxes_amount');
      taxesElement.innerHTML = `$${taxes}`;

      const total = subtotal + taxes;
      const totalElement = document.querySelector('.bill__total__amount');
      totalElement.innerHTML = `$${total}`;
    });
  }
}

// FETCH CREATE ORDER

async function sentOrder(body) {
  try {
    await fetch(`${API_URL}checkout/order`, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    }).then(res => {
      localStorage.quantity = JSON.stringify({});
      localStorage.shop_cart = JSON.stringify([]);
      document.location.href = res.url;
    });
  } catch (e) {
    console.log(e);
  }

  document.querySelector('.preloader').classList.toggle('preloader--hiding', true);
}

// SENT ORDER
if (document.location.href.includes(`${API_URL}checkout`)) {
  const form = document.querySelector('.checkout_page__form_block');

  if (form) {
    form.onsubmit = (event) => {
      event.preventDefault();
      document.querySelector('.preloader').classList.toggle('preloader--hiding', false);

      const data = new FormData(event.target);
      const value = Object.fromEntries(data.entries());
      const totalAmount
        = parseInt(document.querySelector('.bill__total__amount')
          .innerHTML.slice(1));

      if (!totalAmount) {
        location.reload();
      }

      const body = {
        quantityList: JSON.parse(localStorage.quantity),
        ...value,
        totalAmount,
      };

      if (JSON.parse(localStorage.shop_cart).length) {
        sentOrder(JSON.stringify(body));
      }
    };
  }
}
