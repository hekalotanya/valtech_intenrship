const mainImage = document.querySelector('.main_image');

const images = document.querySelectorAll('.list_image');

const changeImage = (e) => {
  const src = e.target.src;

  e.target.src = mainImage.src;
  mainImage.src = src;
};

if (images) {
  for (let i = 0; i < images.length; i++) {
    images[i].onclick = (e) => changeImage(e);
  }
}
