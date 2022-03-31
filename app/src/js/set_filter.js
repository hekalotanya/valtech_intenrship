import { API_URL } from './helpers';
import { setStylesSort } from './set_style_sort';
import { setStyleFav } from './set_fav_icon_styles';
import { setStyleCart } from './set_cart_icon_styes';

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
const sortValue = document.getElementById('sort');
const url = new URL(document.location.href);

// GET URL WITH NEW PARAMS

function getUrl(paramName, e) {
  if (e.target.tagName === 'A' || e.target.tagName === 'INPUT') {
    const url = new URL(document.location.href);
    let value;

    switch (paramName) {
      case 'price':
        if (priceGre.valueAsNumber < priceLess.valueAsNumber) {
          value = `${priceGre.valueAsNumber}-${priceLess.valueAsNumber}`;

          url.searchParams.set(`price`, value);
        }
        break;
      case 'page':
        value = e.target.id;

        switch (value) {
          case 'increase':
            value = (url.searchParams.get('page'))
              ? (parseInt(url.searchParams.get('page')) + 1) : 1;
            break;
          case 'decrease':
            value = (url.searchParams.get('page'))
              ? (parseInt(url.searchParams.get('page')) - 1) : 1;
            break;
        }
        url.searchParams.set('page', value);
        break;
      default:
        value = e.target.id;

        if (url.searchParams.get(`${paramName}`) === value) {
          url.searchParams.delete(`${paramName}`);
        } else {
          url.searchParams.set(`${paramName}`, value);
        }
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
  document.querySelector('.preloader').classList.toggle('preloader--hiding', false);

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
    document.querySelector('.preloader').classList.toggle('preloader--hiding', true);
    basketFile.initEvents();
    producFile.initProductDetail();
    initShowingFunctions.initShowingFunctions();
    initFavFunctions.initFunction();
    setStylesSort();
    setStyleFav();
    setStyleCart();
    console.log('height');
  });

  const nextTitle = 'My new page title';
  const nextState = { additionalInformation: 'Updated the URL with JS' };

  // This will create a new entry in the browser's history, without reloading
  window.history.pushState(nextState, nextTitle, newUrl);
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

// SET SORT

if (sortValue) {
  sortValue.addEventListener('change', () => {
    const url = new URL(document.location.href);

    url.searchParams.set('sort', sortValue.value);

    if (sortValue.value === 'default') {
      url.searchParams.delete('sort');
    }
    renderingProducts(url.href);
  });
}
