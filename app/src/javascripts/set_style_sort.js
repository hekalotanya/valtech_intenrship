function setStylesSort() {
  let url_string = window.location.href;
  let url = new URL(url_string);

  // SET STYLE FOR CATEGORY LINK

  if (url.searchParams.has('category_id')) {
    const value = url.searchParams.get('category_id');
    const categoryLinkElement = document.querySelector(`.category_link${value}`);
    const categoryLinks = [...document.querySelectorAll('.category_link')];
    categoryLinks.map(link => {
      link.classList.toggle('category_link--active', false);
    })
    categoryLinkElement.classList.toggle('category_link--active', true);
  }

  // SET STYLE FOR COLOR LINK

  if (url.searchParams.has('color')) {
    const value = url.searchParams.get('color');
    const colorLinkElement = document.querySelector(`.${value}`);
    const colorLinks = [...document.querySelectorAll('.circle')];
    colorLinks.map(link => {
      link.classList.toggle('circle--active', false);
    })
    colorLinkElement.classList.toggle('circle--active', true);
  }

  // SET STYLE FOR SIZE LINK

  if (url.searchParams.has('size')) {
    const value = url.searchParams.get('size');

    const sizeLinkElement = document.querySelector(`.size${value}`);
    const sizeLinks = [...document.querySelectorAll('.size')];
    sizeLinks.map(link => {
      link.classList.toggle('size--active', false);
    })
    sizeLinkElement.classList.toggle('size--active', true);
  }

  // SET STYLE FOR PAGE LINK

  const pageLinks = [...document.querySelectorAll('.page')];
  pageLinks.map(link => {
    link.classList.toggle('page--active', false);
  })

  if (url.searchParams.has('page')) {
    const value = url.searchParams.get('page');
    let pageLinkElement;

    if (value > 3) {
      pageLinkElement = document.querySelector(`.pageArrow`);
      pageLinkElement.classList.toggle('page--active', true);
    } else {
      pageLinkElement = document.querySelector(`.page${value}`);
      pageLinkElement.classList.toggle('page--active', true);
      console.log(pageLinkElement);
    }
  } else {
    let pageLinkElement = document.querySelector(`.page1`);
    pageLinkElement.classList.toggle('page--active', true);
  }
}

setStylesSort();

export { setStylesSort };
