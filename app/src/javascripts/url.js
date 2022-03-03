const circles = document.querySelector('.color__circles');
const categories = document.querySelector('.categories__list');
const sizes = document.querySelector('.sizes');
const pages = document.querySelector('.products__pages');
const priceGre = document.querySelector('.range-slider_gre');
const priceLess = document.querySelector('.range-slider_less');
const productCards = document.querySelectorAll('.product_card');
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
    document.location.href = url;
  } else {
    return;
  }
}

async function getProductDetail(e) {
  const productId = e.currentTarget.id;
  const path = new URL(`http://localhost:3000/products/${productId}`);
  document.location.href = path;
}


if (document.location.href.includes('/products')) {
  circles.onclick = setParam('color');
  categories.onclick = setParam('category_id');
  sizes.onclick = setParam('size');
  pages.onclick = setParam('page');
  priceGre.onchange = setParam('price');
  priceLess.onchange = setParam('price');

  for (let i = 0; i < productCards.length; i++) {
    productCards[i].onclick = (e) => getProductDetail(e);
  }
};
