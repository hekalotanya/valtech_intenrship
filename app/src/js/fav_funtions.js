import { setStyleFav, setStyleFavPrPage } from './set_fav_icon_styles';

function initFunction() {
  const FavButtons = [...document.querySelectorAll('.fav')];

  // FETCH DELETE FAV
  const fetchFavDelete = async(productId) => {
    const response = await fetch(`/favourites/delete/${productId}`);

    return response;
  };

  // FAV PROCESS

  const processFav = async(productId) => {
    let favArray = JSON.parse(localStorage.fav);

    if (favArray.includes(parseInt(productId))) {
      // DELETE FAV PROCESS
      const icon = document.querySelector(`.icon__fav${productId}`);

      if (icon) {
        icon.classList.toggle('icon__circle--active', false);
      }

      const iconPrPage = document.querySelector(`.icon_rect${productId}`);

      if (iconPrPage) {
        iconPrPage.classList.toggle('icon_rect--active', false);
      }

      favArray = favArray.filter(value => value !== parseInt(productId));
      localStorage.fav = JSON.stringify(favArray);
      setStyleFav();
      setStyleFavPrPage();

      const favCountElement = document.querySelector('.fav__count');

      favCountElement.innerHTML = parseInt(favCountElement.innerHTML) - 1;

      fetchFavDelete(productId).then(res => {
        const favProducts
          = [...document.querySelectorAll('.my__fav__product_card')];

        if (favProducts) {
          favProducts.map(element => {
            if (element.id === productId) {
              element.remove();

              if (favProducts.length === 1) {
                const favPage = document.querySelector('.pages__my_fav');
                const emptyMessage
                  = document.querySelector('.pages__empty_message');

                emptyMessage.classList
                  .toggle('pages__empty_message--active', true);
                favPage.classList.toggle('show', false);
              }
            }
          });
        }
      });
    } else {
      const icon = document.querySelector(`.icon__fav${productId}`);

      if (icon) {
        icon.classList.toggle('icon__circle--active', true);
      }

      const iconPrPage = document.querySelector(`.icon_rect${productId}`);

      if (iconPrPage) {
        iconPrPage.classList.toggle('icon_rect--active', true);
      }

      const response = await fetch(`/favourites/${productId}`);

      if (response.status === 400) {
        if (icon) {
          icon.classList.toggle('icon__circle--active', false);
        }

        if (iconPrPage) {
          iconPrPage.classList.toggle('icon_rect--active', false);
        }

        const errorMessage = document.querySelector('.error__message_fav');

        response.json().then(result => {
          errorMessage.innerHTML = result.error.message;
        });
        errorMessage.classList.toggle('error__message_fav--active', true);

        setTimeout(() => {
          errorMessage.classList.toggle('error__message_fav--active', false);
        }, 6000);
      } else {
        const favArray = JSON.parse(localStorage.fav);

        favArray.push(parseInt(productId));
        localStorage.fav = JSON.stringify(favArray);
        setStyleFav();
        setStyleFavPrPage();

        const favIconBlock = document.querySelector('.fav__block');

        favIconBlock.classList.toggle('icon__block--change', true);

        setTimeout(() => {
          favIconBlock.classList.toggle('icon__block--change', false);
        }, 2000);

        const favCountElement = document.querySelector('.fav__count');

        favCountElement.innerHTML = parseInt(favCountElement.innerHTML) + 1;
      }
    }
  };

  // ADDING EVENT LISTENERS

  FavButtons.map(button => {
    button.onclick = async() => {
      const productId = button.id;

      processFav(productId);
    };
  });
};

initFunction();

export { initFunction };
