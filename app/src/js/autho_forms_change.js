const joinButton = document.querySelector('.switch_join');
const signInButton = document.querySelector('.switch_signin');
const registrationForm = document.getElementById('registration_form');
const signForm = document.getElementById('sign_form');

if (joinButton) {
  joinButton.onclick = (e) => {
    e.preventDefault();
    registrationForm.classList.toggle('autho__block--active', true);
    signForm.classList.toggle('autho__block--active', false);
  };
}

if (signInButton) {
  signInButton.onclick = (e) => {
    e.preventDefault();
    registrationForm.classList.toggle('autho__block--active', false);
    signForm.classList.toggle('autho__block--active', true);
  };
}
