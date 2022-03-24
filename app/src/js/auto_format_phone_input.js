const phoneField = document.querySelector('.shipping_adress__phone__input');
const formRegistrationInput = document.querySelector('.form__user_tel__input');

function phoneAuthoFill(e) {
  const input = e.target;
  let phoneValue = input.value;
  let output;

  phoneValue = phoneValue.replace(/[^0-9]/g, '');

  const area = phoneValue.substr(0, 3);
  const pre = phoneValue.substr(3, 3);
  const tel = phoneValue.substr(6, 4);

  if (area.length < 3) {
    output = '(' + area;
  } else if (area.length === 3 && pre.length < 3) {
    output = '(' + area + ')' + ' ' + pre;
  } else if (area.length === 3 && pre.length === 3) {
    output = '(' + area + ')' + ' ' + pre + ' - ' + tel;
  }
  input.value = output;
}

if (phoneField) {
  phoneField.addEventListener('keyup', (e) => phoneAuthoFill(e));
}

if (formRegistrationInput) {
  formRegistrationInput.addEventListener('keyup', (e) => phoneAuthoFill(e));
}
