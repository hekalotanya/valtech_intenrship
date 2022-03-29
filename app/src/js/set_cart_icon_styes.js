// SET STYLES

function setStyleCart() {
  let shopList = [...JSON.parse(localStorage.shop_cart)];

  if (shopList) {
    const icons = [...document.querySelectorAll('.icon__cart')];

    if (icons) {
      icons.map(icon => {
        icon.classList.toggle('icon__circle--active', false);
      });
    }

    shopList.map(productId => {
      const icon = document.querySelector(`.icon__cart${productId}`);

      if (icon) {
        icon.classList.toggle('icon__circle--active', true);
      }
    });
  }
};

setStyleCart();

export { setStyleCart };
