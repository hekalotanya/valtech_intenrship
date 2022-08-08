// variables for the categories section

const categoriesImages = document.querySelectorAll('.list__caruosel img');
const categoriesList = document.getElementById('list');
const categoriesSliderLine = document.getElementById('caruosel');
const categoriesArrowNext = document.getElementById('arrow_next');
const categoriesArrowPrev = document.getElementById('arrow_prev');
let count = 0;
let width;

// image scroll function

const rollSlider = () => {
  categoriesSliderLine.style.transform = `translate(-${width * count}px)`;
};

// setting the right size for the block

const init = () => {
  if (categoriesList) {
    width = categoriesList.offsetWidth;
    categoriesSliderLine.style.width = width * categoriesImages.length + 'px';

    categoriesImages.forEach(item => {
      item.style.width = width + 'px';
      item.style.height = 'auto';
    });

    rollSlider();
  }
};

// adding events to scroll buttons

if (categoriesArrowPrev) {
  categoriesArrowPrev.onclick = function() {
    count--;

    if (count < 0) {
      count = categoriesImages.length - 1;
    }

    rollSlider(categoriesSliderLine);
  };
}

if (categoriesArrowNext) {
  categoriesArrowNext.onclick = function() {
    count++;

    if (count >= categoriesImages.length) {
      count = 0;
    }

    rollSlider(categoriesSliderLine);
  };
}

// calling functions for the carousel on the categories section

if (categoriesImages) {
  init(categoriesList, categoriesSliderLine, categoriesImages);
}

window.addEventListener('resize', init);
