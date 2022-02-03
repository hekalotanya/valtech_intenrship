// const topBarLogo = document.querySelector('.top_bar__logo');
// const topBarList = document.querySelector('.links');

// // eslint-disable-next-line no-console
// console.log(topBarList, topBarLogo);

// topBarLogo.addEventListener('click', () => {
//   if (topBarList.style.display === 'flex') {
//     topBarList.style.display = 'none';
//   } else {
//     topBarList.style.display = 'flex';
//   }
//   // eslint-disable-next-line no-console
//   console.log(topBarList, topBarLogo);
// });

document.addEventListener('animationstart', function(e) {
  if (e.animationName === 'fade-in') {
    e.target.classList.add('did-fade-in');
  }
});

document.addEventListener('animationend', function(e) {
  if (e.animationName === 'fade-out') {
    e.target.classList.remove('did-fade-in');
  }
});
