import { API_URL } from './helpers';

function initShowingFunctions() {
  if (document.location.href.includes(`${API_URL}products`)) {
    const showingTwoCard = document.querySelector('.sorting_two');
    const showingOneCard = document.querySelector('.sorting_list');

    const showingTwoCardRect = document.querySelector('.sorting_two_rect');
    const showingOneCardRect = document.querySelector('.sorting_list_rect');

    const products = document.querySelector('.products');
    const productCard = document.querySelectorAll('.product_card');
    const productCardButtons = document
      .querySelectorAll('.product_card__buttons');

    // SHOW TWO CARD IN THE ROW
    function showTwoCards() {
      if (products) {
        products.classList.toggle('products--two-in-row', true);
        showingTwoCardRect.classList.toggle('sorting__showing_icon--active', true);
        showingOneCardRect.classList.toggle('sorting__showing_icon--disabled', true);

        for (let i = 0; i < productCard.length; i++) {
          productCard[i].classList.toggle('product_card--two-card', true);
        }

        localStorage.showing_two_card = JSON.stringify(true);
      }
    }

    // SHOW ONE CARD IN THE ROW

    function showOneCard() {
      if (products) {
        products.classList.toggle('products--two-in-row', false);
        showingTwoCardRect.classList.toggle('sorting__showing_icon--active', false);
        showingOneCardRect.classList.toggle('sorting__showing_icon--active', true);
        showingOneCardRect.classList.toggle('sorting__showing_icon--disabled', false);

        for (let i = 0; i < productCard.length; i++) {
          productCard[i].classList.toggle('product_card--two-card', false);
        }

        for (let i = 0; i < productCardButtons.length; i++) {
          productCardButtons[i].style.display = 'flex';
        }

        localStorage.showing_two_card = JSON.stringify(false);
      }
    }

    if (showingTwoCard) {
      showingTwoCard.addEventListener('click', () => {
        showTwoCards();
      });
    }

    if (showingOneCard) {
      showingOneCard.addEventListener('click', () => {
        showOneCard();
      });
    }

    if (localStorage.showing_two_card === 'true') {
      showTwoCards();
    } else {
      showOneCard();
    }
  }
}

initShowingFunctions();

export { initShowingFunctions };
