const categoryCards = document.querySelectorAll('.cat__detail');

function getCategoryDetail(e) {
  const categoryId = e.currentTarget.id;
  const path = new URL(`http://localhost:3000/products/sort?category_id=${categoryId}`);
  document.location.href = path;
}

if (categoryCards) {
  for (let i = 0; i < categoryCards.length; i++) {
    categoryCards[i].onclick = (e) => getCategoryDetail(e);
  }
}
