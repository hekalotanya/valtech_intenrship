const descriptionLink = document.getElementById('nav__item__description');
const reviewsLink = document.getElementById('nav__item__reviews');

const textDescription = document.getElementById('text__description');
const textReviews = document.getElementById('text__reviews');

if (descriptionLink) {
  descriptionLink.addEventListener('click', () => {
    descriptionLink.className = 'reviews_menu__nav__item--isActive';
    reviewsLink.className = 'reviews_menu__nav__item';
    textDescription.className = 'text--isActive';
    textReviews.className = 'text';
  });
}

if (reviewsLink) {
  reviewsLink.addEventListener('click', () => {
    reviewsLink.className = 'reviews_menu__nav__item--isActive';
    descriptionLink.className = 'reviews_menu__nav__item';
    textReviews.className = 'text--isActive';
    textDescription.className = 'text';
  });
}
