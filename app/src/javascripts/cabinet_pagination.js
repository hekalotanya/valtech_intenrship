function initPagination() {
  const inform_button = document.querySelector('.item__information')
  const orders_button = document.querySelector('.item__orders')
  const fav_button = document.querySelector('.item__fav')

  const inform_page = document.querySelector('.pages__my_information');
  const orders_page = document.querySelector('.pages__my_orders');
  const fav_page = document.querySelector('.pages__my_fav');


  const favProducts = document.querySelectorAll('.my__fav__product_card');
  const orders = document.querySelectorAll('.pages__my_orders__order');
  const emptyMessage = document.querySelector('.pages__empty_message');

  if (inform_button) {
    inform_button.onclick = () => {
      inform_button.classList.toggle('active', true);
      orders_button.classList.toggle('active', false);
      fav_button.classList.toggle('active', false);

      inform_page.classList.toggle('show', true);
      orders_page.classList.toggle('show', false);
      fav_page.classList.toggle('show', false);
      emptyMessage.classList.toggle('pages__empty_message--active', false)
    }
  }

  if (orders_button) {
    orders_button.onclick = () => {
      orders_button.classList.toggle('active', true);
      fav_button.classList.toggle('active', false);
      inform_button.classList.toggle('active', false);

      orders_page.classList.toggle('show', true);
      fav_page.classList.toggle('show', false);
      inform_page.classList.toggle('show', false);
      emptyMessage.classList.toggle('pages__empty_message--active', false)

      if (!orders.length) {
        emptyMessage.classList.toggle('pages__empty_message--active', true)
        orders_page.classList.toggle('show', true);
      }
    }
  }

  if (fav_button) {
    fav_button.onclick = () => {
      fav_button.classList.toggle('active', true);
      inform_button.classList.toggle('active', false);
      orders_button.classList.toggle('active', false);

      fav_page.classList.toggle('show', true);
      inform_page.classList.toggle('show', false);
      orders_page.classList.toggle('show', false);
      emptyMessage.classList.toggle('pages__empty_message--active', false)


      if (!favProducts.length) {
        emptyMessage.classList.toggle('pages__empty_message--active', true)
        fav_page.classList.toggle('show', false);
      }
    }
  }
}

initPagination();
