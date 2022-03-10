if (document.location.href.includes('http://localhost:3000/cart')) {
  let button = document.querySelector('.cart_menu__totals__checkout');
  button.onclick = () => {
    if (JSON.parse(localStorage.shop_cart).length) {
      const path = new URL(`http://localhost:3000/checkout`);
      document.location.href = path;
    }
  }
}
