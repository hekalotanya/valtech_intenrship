import { API_URL } from './helpers';

function initProductDetail() {
  const productCards = document.querySelectorAll('.pr__detail');

  function getProductDetail(e) {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'SPAN') {
      const productId = e.currentTarget.id;
      const path = new URL(`${API_URL}products/${productId}`);

      document.location.href = path;
    }
  }

  if (productCards) {
    for (let i = 0; i < productCards.length; i++) {
      productCards[i].onclick = (e) => getProductDetail(e);
    }
  }
}

initProductDetail();

export { initProductDetail };
