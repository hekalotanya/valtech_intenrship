function initPagination() {
  const inform_button = document.querySelector('.item__information')
  const orders_button = document.querySelector('.item__orders')
  const fav_button = document.querySelector('.item__fav')

  const inform_page = document.querySelector('.pages__my_information');
  const orders_page = document.querySelector('.pages__my_orders');
  const fav_page = document.querySelector('.pages__my_fav');

  if (inform_button) {
    inform_button.onclick = () => {
      inform_button.classList.toggle('active', true);
      orders_button.classList.toggle('active', false);
      fav_button.classList.toggle('active', false);

      inform_page.classList.toggle('show', true);
      orders_page.classList.toggle('show', false);
      fav_page.classList.toggle('show', false);
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
    }
  }
}

initPagination();