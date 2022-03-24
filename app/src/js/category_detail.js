import { API_URL } from './helpers';

const categoryCards = document.querySelectorAll('.cat__detail');

function getCategoryDetail(e) {
  const categoryId = e.currentTarget.id;
  const path = new URL(`${API_URL}products/sort?category_id=${categoryId}`);

  document.location.href = path;
}

if (categoryCards) {
  for (let i = 0; i < categoryCards.length; i++) {
    categoryCards[i].onclick = (e) => getCategoryDetail(e);
  }
}
