import { API_URL } from './helpers';

// SET FAV INTO LOCAL STORAGE

if (document.location.href === (`${API_URL}products/`)) {
  if (favouritesId) {
    let fav = [...favouritesId];

    localStorage.fav = JSON.stringify(fav);
  }
}

// SET STYLES

function setStyleFav() {
  const favArray = JSON.parse(localStorage.fav);

  if (favArray) {
    const icons = [...document.querySelectorAll('.icon__fav')];

    icons.map(icon => {
      icon.classList.toggle('icon__circle--active', false);
    });

    favArray.map(favId => {
      const icon = document.querySelector(`.icon__fav${favId}`);

      if (icon) {
        icon.classList.toggle('icon__circle--active', true);
      }
    });
  }
};

function setStyleFavPrPage() {
  const favArray = JSON.parse(localStorage.fav);

  if (favArray) {
    const icons = [...document.querySelectorAll('.icon_rect')];

    icons.map(icon => {
      icon.classList.toggle('icon_rect--active', false);
    });

    favArray.map(favId => {
      const icon = document.querySelector(`.icon_rect${favId}`);

      if (icon) {
        icon.classList.toggle('icon_rect--active', true);
      }
    });
  }
};

setStyleFav();
setStyleFavPrPage();

export { setStyleFav, setStyleFavPrPage };
