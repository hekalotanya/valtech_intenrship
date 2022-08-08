function initPagination() {
  const informButton = document.querySelector('.item__information');
  const ordersButton = document.querySelector('.item__orders');
  const favButton = document.querySelector('.item__fav');

  const informPage = document.querySelector('.pages__my_information');
  const ordersPage = document.querySelector('.pages__my_orders');
  const favPage = document.querySelector('.pages__my_fav');

  const favProducts = document.querySelectorAll('.my__fav__product_card');
  const orders = document.querySelectorAll('.pages__my_orders__order');
  const emptyMessage = document.querySelector('.pages__empty_message');

  if (informButton) {
    informButton.onclick = () => {
      informButton.classList.toggle('active', true);
      ordersButton.classList.toggle('active', false);
      favButton.classList.toggle('active', false);

      informPage.classList.toggle('show', true);
      ordersPage.classList.toggle('show', false);
      favPage.classList.toggle('show', false);
      emptyMessage.classList.toggle('pages__empty_message--active', false);
    };
  }

  if (ordersButton) {
    ordersButton.onclick = () => {
      ordersButton.classList.toggle('active', true);
      favButton.classList.toggle('active', false);
      informButton.classList.toggle('active', false);

      ordersPage.classList.toggle('show', true);
      favPage.classList.toggle('show', false);
      informPage.classList.toggle('show', false);
      emptyMessage.classList.toggle('pages__empty_message--active', false);

      if (!orders.length) {
        emptyMessage.classList.toggle('pages__empty_message--active', true);
        ordersPage.classList.toggle('show', true);
      }
    };
  }

  if (favButton) {
    favButton.onclick = () => {
      favButton.classList.toggle('active', true);
      informButton.classList.toggle('active', false);
      ordersButton.classList.toggle('active', false);

      favPage.classList.toggle('show', true);
      informPage.classList.toggle('show', false);
      ordersPage.classList.toggle('show', false);
      emptyMessage.classList.toggle('pages__empty_message--active', false);

      if (!favProducts.length) {
        emptyMessage.classList.toggle('pages__empty_message--active', true);
        favPage.classList.toggle('show', false);
      }
    };
  }
}

initPagination();
