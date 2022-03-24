import { API_URL } from './helpers';

if (document.location.href === `${API_URL}`) {
  // переменные для секции categories

  const categoriesImages = document.querySelectorAll('.list__caruosel img');
  const categoriesList = document.getElementById('list');
  const categoriesSliderLine = document.getElementById('caruosel');
  const categoriesArrowNext = document.getElementById('arrow_next');
  const categoriesArrowPrev = document.getElementById('arrow_prev');
  let count = 0;
  let width;

  // функция прокрутки изображений

  const rollSlider = () => {
    categoriesSliderLine.style.transform = `translate(-${width * count}px)`;
  };

  // установка нужного размера для блока

  const init = () => {
    if (categoriesList) {
      width = categoriesList.offsetWidth;
    }
    categoriesSliderLine.style.width = width * categoriesImages.length + 'px';

    categoriesImages.forEach(item => {
      item.style.width = width + 'px';
      item.style.height = 'auto';
    });

    rollSlider();
  };

  // добавление событий на кнопки прокрутки

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

  // вызов функций для карусели на секции categories

  init(categoriesList, categoriesSliderLine, categoriesImages);

  window.addEventListener('resize', init);
}
