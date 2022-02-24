const circles = document.querySelector('.color__circles');
const categories = document.querySelector('.categories__list');
const sizes = document.querySelector('.sizes');
const pages = document.querySelector('.products__pages');
const url = new URL('http://localhost:3000/products/sort');

const setParam  = (paramName) => (e) => {
  if (e.target.tagName === 'A') {
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
              splitParam[1] = e.target.id;
            }
          }
          resultParams.push(splitParam.join('='));
        });
        
        params = resultParams.join('&');
      } else {
        params = (e.target.id === 'increase') ? params + `&${paramName}=4` : params + `&${paramName}=${e.target.id}`;
      }
    } else {
      params = (e.target.id === 'increase') ? `?${paramName}=4` : `?${paramName}=${e.target.id}`; 
    }
    url.search = params;
    document.location.href = url;
  } else {
    return;
  }
}

if (document.location.href.includes('/products')) {
  circles.onclick = setParam('color');
  categories.onclick = setParam('category_id');
  sizes.onclick = setParam('size');
  pages.onclick = setParam('page');
};
