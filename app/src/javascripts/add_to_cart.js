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
      localStorage.shop_cart =  JSON.stringify(shopList);
      console.log(localStorage.shop_cart);
    }
  }
}
