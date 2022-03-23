
function initFunction() {
  const addToFavButtons = [...document.querySelectorAll('.fav')];
  const deleteFromFavButtons = [...document.querySelectorAll('.delete_fav')]

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

  deleteFromFavButtons.map(button => {
    button.onclick = async () => {
      const productId = button.id;
      console.log(productId);

      const favCountElement = document.querySelector('.fav__count');
      favCountElement.innerHTML = parseInt(favCountElement.innerHTML) - 1;
      
      const fetchFavDelete = async(productId) => {
        const response = await fetch(`/favourites/delete/${productId}`);

        return response;
      }

      fetchFavDelete(productId).then(res => {
        console.log(res);
      })
    };
  }) 
} 


initFunction();

export { initFunction }