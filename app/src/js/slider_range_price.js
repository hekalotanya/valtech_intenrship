let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue;

if (sliderOne) {
  sliderMaxValue = slideOne.max;
}

if (sliderOne) {
  window.onload = function() {
    slideOne();
    slideTwo();
  };

  sliderOne.oninput = () => slideOne();
  sliderTwo.oninput = () => slideTwo();
}

function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.value = sliderOne.value;
  fillColor();
}

function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.value = sliderTwo.value;
  fillColor();
}

function fillColor() {
  const percent1 = (sliderOne.value / sliderMaxValue) * 100;
  const percent2 = (sliderTwo.value / sliderMaxValue) * 100;

  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #60A00C ${percent1}% , #60A00C ${percent2}%, #dadae5 ${percent2}%)`;
}
