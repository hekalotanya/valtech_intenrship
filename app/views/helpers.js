const hbs = require('hbs');

hbs.registerHelper('page2', (value) => {
  let result = '<a id="1" class="page page1">1</a>';

  if (Math.ceil(value / 6) >= 2) {
    result += '<a id="2" class="page page2">2</a>';
  }

  if (Math.ceil(value / 6) >= 3) {
    result += '<a id="3" class="page page3">3</a>';
  }

  if (Math.ceil(value / 6) >= 4) {
    result += '<a id="increase" class="page pageArrow">></a>';
  }

  return result;
});
