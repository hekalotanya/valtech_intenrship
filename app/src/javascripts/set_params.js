const basketFile = require('./basket');
const producFile = require('./product_detail');
const initShowingFunctions = require('./showing_prodcuts');

const circles = document.querySelector('.color__circles');
const categories = document.querySelector('.categories__list');
const sizes = document.querySelector('.sizes');
const pages = document.querySelector('.products__pages');
const priceGre = document.querySelector('.range-slider_gre');
const priceLess = document.querySelector('.range-slider_less');
const url = new URL('http://localhost:3000/products/sort');

const setParam  = (paramName) => (e) => {
  if (e.target.tagName === 'A' || e.target.tagName === 'INPUT') {
    let params = document.location.search;
    if (params) {
      let resultParams = [];
      if (params.includes(`${paramName}`)) {
        let splitParams = params.split('&');

        splitParams.map(param => {
          let splitParam = param.split('=');
          if (param.includes(`${paramName}`)) {
            if (e.target.id === 'increase') {
              splitParam[1]++;
            } else {
              if (paramName === 'price') {
                if (priceGre.valueAsNumber < priceLess.valueAsNumber) {
                  splitParam[1] =  `${priceGre.valueAsNumber}-${priceLess.valueAsNumber}`;
                }
              } else {
                splitParam[1] = e.target.id;
              }
            }
          }
          resultParams.push(splitParam.join('='));
        });
        
        params = resultParams.join('&');
      } else {
        if (paramName === 'price') {
          if (priceGre.valueAsNumber < priceLess.valueAsNumber) {
            params = params + `&${paramName}=${priceGre.valueAsNumber}-${priceLess.valueAsNumber}`;
          }
        } else {
          params = (e.target.id === 'increase') ? params + `&${paramName}=4` : params + `&${paramName}=${e.target.id}`;
        }
      }
    } else {
      if (paramName === 'price') {
        if (priceGre.valueAsNumber < priceLess.valueAsNumber) {
          params = `?${paramName}=${priceGre.valueAsNumber}-${priceLess.valueAsNumber}`
        }
      } else {
        params = (e.target.id === 'increase') ? `?${paramName}=4` : `?${paramName}=${e.target.id}`; 
      }
    }
    url.search = params;
    // document.location.href = url;
    async function fetchProducts() {
      const response = await fetch(url, {
        mode:"cors",
        method: 'GET',
      })
      return response.text();
    }

    fetchProducts().then( html => {
      let parser = new DOMParser();
      let doc = parser.parseFromString(html, 'text/html');
      const productBlock = document.querySelector('.products');
      productBlock.innerHTML = doc.querySelector('.products').innerHTML;

      const numberOfResults = document.querySelector('.number_of_results');
      numberOfResults.innerHTML = doc.querySelector('.number_of_results').innerHTML;

      const prodcutsPages = document.querySelector('.products__pages');
      prodcutsPages.innerHTML = doc.querySelector('.products__pages').innerHTML;
      basketFile.initEvents();
      producFile.initProductDetail();
      initShowingFunctions.initShowingFunctions();
    });
    const nextTitle = 'My new page title';
    const nextState = { additionalInformation: 'Updated the URL with JS' };

    // This will create a new entry in the browser's history, without reloading
    window.history.pushState(nextState, nextTitle, url);
  } else {
    return;
  }
}


if (circles) {
  circles.onclick = setParam('color');
}

if (categories) {
  categories.onclick = setParam('category_id');
}

if (sizes) {
  sizes.onclick = setParam('size');
}

if (pages) {
  pages.onclick = setParam('page');
  window.scrollTo(window.pageXOffset, 0);
}

if (priceGre) {
  priceGre.onchange = setParam('price');
}

if (priceLess) {
  priceLess.onchange = setParam('price');
}


