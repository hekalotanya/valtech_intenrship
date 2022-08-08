function setStylesSort() {
  const urlString = window.location.href;
  const url = new URL(urlString);

  // SET STYLE FOR CATEGORY LINK
  function setStyleCategory() {
    const value = url.searchParams.get('category_id');
    const categoryLinkElement = document.querySelector(`.category_link${value}`);
    const categoryLinks = [...document.querySelectorAll('.category_link')];

    if (categoryLinks) {
      categoryLinks.map(link => {
        link.classList.toggle('category_link--active', false);
      });
    }

    if (url.searchParams.has('category_id')) {
      categoryLinkElement.classList.toggle('category_link--active', true);
    }
  }

  // SET STYLE FOR COLOR LINK
  function setStyleColor() {
    const value = url.searchParams.get('color');
    const colorLinkElement = document.querySelector(`.${value}`);
    const colorLinks = [...document.querySelectorAll('.circle')];

    colorLinks.map(link => {
      link.classList.toggle('circle--active', false);
    });

    if (url.searchParams.has('color')) {
      colorLinkElement.classList.toggle('circle--active', true);
    }
  }

  // SET STYLE FOR SIZE LINK
  function setStyleSize() {
    const value = url.searchParams.get('size');

    const sizeLinkElement = document.querySelector(`.size${value}`);
    const sizeLinks = [...document.querySelectorAll('.size')];

    sizeLinks.map(link => {
      link.classList.toggle('size--active', false);
    });

    if (url.searchParams.has('size')) {
      sizeLinkElement.classList.toggle('size--active', true);
    }
  }

  // SET STYLE FOR PAGE LINK

  const pageLinks = [...document.querySelectorAll('.page')];

  pageLinks.map(link => {
    link.classList.toggle('page--active', false);
  });

  if (url.searchParams.has('page')) {
    const value = url.searchParams.get('page');
    const currentPageElement = document.querySelector('.currentPage');
    const decreaseElement = document.querySelector('.pageDecrease');

    if (value > 3) {
      currentPageElement.innerHTML = value;
      currentPageElement.classList.add('page--active');
      decreaseElement.classList.add('pageDecrease--active');
    } else {
      const pageLinkElement = document.querySelector(`.page${value}`);

      if (pageLinkElement) {
        if (currentPageElement) {
          currentPageElement.style.display = 'none';
        }
        pageLinkElement.classList.toggle('page--active', true);
      }
    }
  } else {
    const pageLinkElement = document.querySelector(`.page1`);
    const decreaseElement = document.querySelector('.pageDecrease');

    if (decreaseElement) {
      decreaseElement.classList.toggle('pageDecrease--active', false);
    }

    if (pageLinkElement) {
      const currentPageElement = document.querySelector('.currentPage');

      currentPageElement.classList.toggle('page--active', false);
      currentPageElement.style.display = 'none';
      pageLinkElement.classList.toggle('page--active', true);
    }
  }

  setStyleCategory();
  setStyleColor();
  setStyleSize();
}

try {
  setStylesSort();
} catch (e) {
  console.log(e);
}

export { setStylesSort };
