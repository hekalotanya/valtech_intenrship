import { API_URL } from './helpers';

// FETCH SUBSCRIBE

async function fetchSubscribe(body) {
  await fetch(`${API_URL}subscribe`, {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

const form = document.querySelector('.subscribe__form');

if (form) {
  form.onsubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    const body = {
      ...value,
    };

    fetchSubscribe(body).then(() => {
      location.reload();
    });
  };
};
