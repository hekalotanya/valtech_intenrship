// variables for the news section

const newsImages = document.querySelectorAll('.post_block__caruosel .post');
const newsList = document.querySelector('.news__post_block');
const newsSliderLine = document.querySelector('.post_block__caruosel');
const newsArrowNext = document.querySelector('.post_block__next');
const newsArrowPrev = document.querySelector('.post_block__prev');
let newsCount = 0;
let newsWidth;

// image scroll function

const rollSlider = () => {
  newsSliderLine.style.transform = `translate(-${newsWidth * newsCount}px)`;
};

// setting the right size for the block

const init = () => {
  if (newsList) {
    newsWidth = newsList.offsetWidth;
    newsSliderLine.style.width = newsWidth * newsImages.length + 'px';

    newsImages.forEach(item => {
      item.style.width = newsWidth + 'px';
      item.style.height = 'auto';
    });

    rollSlider();
  }
};

// adding events to scroll buttons

if (newsArrowPrev) {
  newsArrowPrev.onclick = function() {
    newsCount--;

    if (newsCount < 0) {
      newsCount = newsImages.length - 1;
    }

    rollSlider(newsSliderLine);
  };
}

if (newsArrowNext) {
  newsArrowNext.onclick = function() {
    newsCount++;

    if (newsCount >= newsImages.length) {
      newsCount = 0;
    }

    rollSlider(newsSliderLine);
  };
}

// call functions for the carousel on the news section

if (newsImages) {
  init();
}

window.addEventListener('resize', init);
