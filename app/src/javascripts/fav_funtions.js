function initFunction() {
  const addToFavButtons = [...document.querySelectorAll('.fav')];
  const deleteFromFavButtons = [...document.querySelectorAll('.delete_fav')]


  // FETCH ADD TO FAV

  const fetchFav = async (productId) => {
    const response = await fetch(`/favourites/${productId}`);

    if (response.status === 500) {
      const errorMessage = document.querySelector('.error__message_fav');
      console.log('error');
      errorMessage.classList.toggle('error__message_fav--active', true);

      setTimeout(() => {
        errorMessage.classList.toggle('error__message_fav--active', false);
      }, 6000);
    } else {
      const favIconBlock = document.querySelector('.fav__block');
      favIconBlock.classList.toggle('icon__block--change', true);

      setTimeout(() => {
        favIconBlock.classList.toggle('icon__block--change', false);
      }, 2000)

      const favCountElement = document.querySelector('.fav__count');
      favCountElement.innerHTML = parseInt(favCountElement.innerHTML) + 1;
    }
  }

  addToFavButtons.map(button => {
    button.onclick = async () => {
      const productId = button.id;

      fetchFav(productId);
    }
  })


  // DELETE FROM FAV

  deleteFromFavButtons.map(button => {
    button.onclick = async () => {
      const productId = button.id;
      const favCountElement = document.querySelector('.fav__count');
      favCountElement.innerHTML = parseInt(favCountElement.innerHTML) - 1;
      
      const fetchFavDelete = async(productId) => {
        const response = await fetch(`/favourites/delete/${productId}`);

        return response;
      }

      fetchFavDelete(productId).then(res => {
        const favProducts = [...document.querySelectorAll('.my__fav__product_card')];
        favProducts.map(element => {
          if (element.id === productId) {
            element.remove();
            if (favProducts.length === 1) {
              const fav_page = document.querySelector('.pages__my_fav');
              const emptyMessage = document.querySelector('.pages__empty_message');
              emptyMessage.classList.toggle('pages__empty_message--active', true)
              fav_page.classList.toggle('show', false);
            }
          }
        });
      })
    };
  }) 
} 


initFunction();

export { initFunction }