const showingTwoCard = document.querySelector('.sorting_two');
const showingOneCard = document.querySelector('.sorting_list');

const showingTwoCardRect = document.querySelector('.sorting_two_rect');
const showingOneCardRect = document.querySelector('.sorting_list_rect');


const products = document.querySelector('.products');
const productCard = document.querySelectorAll('.product_card');

let productCardFlex;
let productCardAlign;

if (productCard.length) {
  productCardFlex = productCard[0].style.flexDirection;
  productCardAlign = productCard[0].style.alignItems;
}

const productCardButtons = document.querySelectorAll('.product_card__buttons');

if (showingTwoCard) {
  showingTwoCard.addEventListener('click', () => {
    products.style.flexDirection = 'row';
    products.style.flexWrap = 'wrap';
    products.style.gap = '4%';
    showingTwoCardRect.style.fill = '#60A00C';
    showingOneCardRect.style.fill = 'white'
  
    for (let i = 0; i < productCard.length; i++) {
      productCard[i].style.width = '48%';
      productCard[i].style.flexDirection = 'row';
      productCard[i].style.flexWrap = 'wrap';
      productCard[i].style.alignItems = 'flex-start';
      productCard[i].style.gap = '10px';
      productCard[i].style.padding = '10px';
      productCard[i].style.marginBottom = '15px';
    }
  
    for (let i = 0; i < productCardButtons.length; i++) {
      productCardButtons[i].style.display = 'none';
    }
  })
}

if (showingOneCard) {
  showingOneCard.addEventListener('click', () => {
    products.style.flexDirection = 'column';
    products.style.flexWrap = 'nowrap';
    products.style.gap = '40px';
    showingTwoCardRect.style.fill = 'white';
    showingOneCardRect.style.fill = '#60A00C'
  
    for (let i = 0; i < productCard.length; i++) {
      productCard[i].style.width = 'auto';
      productCard[i].style.flexDirection = productCardFlex;
      productCard[i].style.alignItems = productCardAlign;
      // productCard[i].style.gap = '0';
      productCard[i].style.padding = '25px 50px 25px 30px';
      productCard[i].style.marginBottom = '0';
    }
  
    for (let i = 0; i < productCardButtons.length; i++) {
      productCardButtons[i].style.display = 'flex';
    }
  })
}