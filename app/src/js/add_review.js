import { API_URL } from './helpers';

const form = document.querySelector('.description__review_form');

if (form) {
  form.onsubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    const productId = form.id;
    const body = {
      ...value,
      productId,
    };

    async function sentReview() {
      const response = await fetch(`${API_URL}review`, {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (response.status === 400) {
        const errorMessage = document.querySelector('.error__message_review');

        errorMessage.classList.toggle('error__message_fav--active', true);

        setTimeout(() => {
          errorMessage.classList.toggle('error__message_fav--active', false);
        }, 6000);
      } else {
        const successMessage = document
          .querySelector('.success__message_review');

        successMessage.classList
          .toggle('success__message_review--active', true);

        setTimeout(() => {
          successMessage.classList
            .toggle('success__message_review--active', false);
        }, 6000);
      }
    }
    sentReview();
  };
}
