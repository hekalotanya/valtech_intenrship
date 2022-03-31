// переменные для секции categories

const newsImages = document.querySelectorAll('.post_block__caruosel .post');
const newsList = document.querySelector('.news__post_block');
const newsSliderLine = document.querySelector('.post_block__caruosel');
const newsArrowNext = document.querySelector('.post_block__next');
const newsArrowPrev = document.querySelector('.post_block__prev');
let newsCount = 0;
let newsWidth;

// функция прокрутки изображений

const rollSlider = () => {
  newsSliderLine.style.transform = `translate(-${newsWidth * newsCount}px)`;
};

// установка нужного размера для блока

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

// добавление событий на кнопки прокрутки

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

// вызов функций для карусели на секции news

if (newsImages) {
  init();
}

window.addEventListener('resize', init);
