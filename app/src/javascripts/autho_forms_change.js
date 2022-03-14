const joinButton = document.querySelector('.switch_join');
const signInButton = document.querySelector('.switch_signin');
const registrationForm = document.getElementById('registration_form');
const signForm = document.getElementById('sign_form');

if (joinButton) {
  joinButton.onclick = (e) => {
    e.preventDefault();
    registrationForm.style.display = 'block';
    console.log(registrationForm);
    signForm.style.display = 'none';
  }
}

if (signInButton) {
  signInButton.onclick = (e) => {
    e.preventDefault();
    signForm.style.display = 'block';
    registrationForm.style.display = 'none';
  }
}
