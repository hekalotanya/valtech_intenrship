const list = document.getElementById('caruosel');
const listElems = list.querySelectorAll('li');
const width = 260;

let position = 0; // положение ленты прокрутки

document.getElementById('arrow_prev').onclick = function() {
  // const blockWidth = document.getElementById('list').offsetWidth;
  // const count = blockWidth / 260;

  position += width;
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
};

document.getElementById('arrow_next').onclick = function() {
  const blockWidth = document.getElementById('list').offsetWidth;
  const count = blockWidth / 260;

  position -= width;
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};
