if (document.location.href.includes('http://localhost:3000/products/')) {
  const description_link = document.getElementById('nav__item__description');
  const reviews_link = document.getElementById('nav__item__reviews');

  const text_description = document.getElementById('text__description');
  const text_reviews = document.getElementById('text__reviews');

  description_link.addEventListener('click', () => {
    description_link.className = 'reviews_menu__nav__item--isActive';
    reviews_link.className = 'reviews_menu__nav__item';
    text_description.className = 'text--isActive';
    text_reviews.className = 'text';
  })

  reviews_link.addEventListener('click', () => {
    reviews_link.className = 'reviews_menu__nav__item--isActive';
    description_link.className = 'reviews_menu__nav__item';
    text_reviews.className = 'text--isActive';
    text_description.className = 'text';
  })
}
