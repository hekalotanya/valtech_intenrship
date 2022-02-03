const images = document.querySelectorAll('.list__caruosel img');
const sliderLine = document.getElementById('caruosel');
let count = 0;
let width;

const rollSlider = () => {
  sliderLine.style.transform = `translate(-${width * count}px)`;
  // eslint-disable-next-line no-console
  console.log(`translate(-${width * count}px)`);
};

const init = () => {
  width = document.getElementById('list').offsetWidth;
  sliderLine.style.width = width * images.length + 'px';

  images.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });

  rollSlider();
};

init();

window.addEventListener('resize', init);

document.getElementById('arrow_prev').onclick = function() {
  count--;

  if (count < 0) {
    count = images.length - 1;
  }

  rollSlider();
};

document.getElementById('arrow_next').onclick = function() {
  count++;

  if (count >= images.length) {
    count = 0;
  }

  rollSlider();
};
