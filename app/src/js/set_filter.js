import { API_URL } from './helpers';
import { setStylesSort } from './set_style_sort';

const basketFile = require('./basket');
const producFile = require('./product_detail');
const initShowingFunctions = require('./showing_prodcuts');
const initFavFunctions = require('./fav_funtions');

const circles = document.querySelector('.color__circles');
const categories = document.querySelector('.categories__list');
const sizes = document.querySelector('.sizes');
const pages = document.querySelector('.products__pages');
const priceGre = document.querySelector('.range-slider_gre');
const priceLess = document.querySelector('.range-slider_less');
const url = new URL(`${API_URL}products/sort`);

// GET URL WITH NEW PARAMS

function getUrl(paramName, e) {
  if (e.target.tagName === 'A' || e.target.tagName === 'INPUT') {
    switch (paramName) {
      case 'price':
        if (priceGre.valueAsNumber < priceLess.valueAsNumber) {
          const value = `${priceGre.valueAsNumber}-${priceLess.valueAsNumber}`;

          url.searchParams.set(`price`, value);
        }
        break;
      default:
        const value = e.target.id;

        url.searchParams.set(`${paramName}`, value);
        break;
    }

    if (paramName !== 'page') {
      url.searchParams.set('page', 1);
    }

    return url.href;
  };
};

// FETCH PRODUCTS WITH PARAMS

const renderingProducts = (newUrl) => {
  const response = fetch(newUrl).then(result => {
    return result.text();
  });

  response.then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const productBlock = document.querySelector('.products');

    productBlock.innerHTML = doc.querySelector('.products').innerHTML;

    const numberOfResults = document.querySelector('.number_of_results');

    numberOfResults.innerHTML = doc
      .querySelector('.number_of_results').innerHTML;

    const prodcutsPages = document.querySelector('.products__pages');

    prodcutsPages.innerHTML = doc.querySelector('.products__pages').innerHTML;
    basketFile.initEvents();
    producFile.initProductDetail();
    initShowingFunctions.initShowingFunctions();
    initFavFunctions.initFunction();
    setStylesSort();
  });

  const nextTitle = 'My new page title';
  const nextState = { additionalInformation: 'Updated the URL with JS' };

  // This will create a new entry in the browser's history, without reloading
  window.history.pushState(nextState, nextTitle, url);
  setStylesSort();
};

// ADDING EVENT LISTENERS

if (circles) {
  circles.addEventListener('click', (e) => {
    const newUrl = getUrl('color', e);

    renderingProducts(newUrl);
  });
}

if (categories) {
  categories.addEventListener('click', (e) => {
    const newUrl = getUrl('category_id', e);

    renderingProducts(newUrl);
  });
}

if (sizes) {
  sizes.addEventListener('click', (e) => {
    const newUrl = getUrl('size', e);

    renderingProducts(newUrl);
  });
}

if (pages) {
  pages.addEventListener('click', (e) => {
    const newUrl = getUrl('page', e);

    renderingProducts(newUrl);
  });

  pages.addEventListener('click', (e) => {
    window.scrollTo(0, 0);
  });
}

if (priceGre) {
  priceGre.addEventListener('change', (e) => {
    const newUrl = getUrl('price', e);

    renderingProducts(newUrl);
  });
}

if (priceLess) {
  priceLess.addEventListener('change', (e) => {
    const newUrl = getUrl('price', e);

    renderingProducts(newUrl);
  });
}
