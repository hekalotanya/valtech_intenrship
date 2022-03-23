// SET COUNT OF FAV 


function initFunction() {
  const addToFavButtons = [...document.querySelectorAll('.fav')];
  const deleteFromFavButtons = [...document.querySelectorAll('.delete_fav')]


  addToFavButtons.map(button => {
    button.onclick = async () => {
      console.log(button);
      const productId = button.id;
      console.log(productId);
      
      const fetchFav = (productId) => {
        const response = fetch(`/favourites/${productId}`);

        return response;
      }

      fetchFav(productId).then(res => {
        console.log(res.status);
        if (res.status === 500) {
          const errorMessage = document.querySelector('.error__message_fav');
          console.log('error');
          errorMessage.classList.toggle('error__message_fav--active', true);

          setTimeout(() => {
            errorMessage.classList.toggle('error__message_fav--active', false);
          }, 6000);
        } else {
          const favIconBlock = document.querySelector('.fav__block');
          console.log(favIconBlock);
          favIconBlock.classList.toggle('icon__block--change', true);

          setTimeout(() => {
            favIconBlock.classList.toggle('icon__block--change', false);
          }, 2000)

          const favCountElement = document.querySelector('.fav__count');
          favCountElement.innerHTML = parseInt(favCountElement.innerHTML) + 1;
        }
      })
    };
  })

  deleteFromFavButtons.map(button => {
    button.onclick = async () => {
      const productId = button.id;
      console.log(productId);
      
      const fetchFavDelete = async(productId) => {
        const response = await fetch(`/favourites/delete/${productId}`);

        return response;
      }

      fetchFavDelete(productId).then(res => {
        console.log(res.status);
      })
    };
  }) 
} 


initFunction();

export { initFunction }