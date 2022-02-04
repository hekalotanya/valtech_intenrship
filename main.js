/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/caruosel.js":
/*!*************************!*\
  !*** ./src/caruosel.js ***!
  \*************************/
/***/ (() => {

// переменные для секции categories
var categoriesImages = document.querySelectorAll('.list__caruosel img');
var categoriesList = document.getElementById('list');
var categoriesSliderLine = document.getElementById('caruosel');
var categoriesArrowNext = document.getElementById('arrow_next');
var categoriesArrowPrev = document.getElementById('arrow_prev');
var count = 0;
var width; // функция прокрутки изображений

var rollSlider = function rollSlider() {
  categoriesSliderLine.style.transform = "translate(-".concat(width * count, "px)");
}; // установка нужного размера для блока


var init = function init() {
  width = categoriesList.offsetWidth;
  categoriesSliderLine.style.width = width * categoriesImages.length + 'px';
  categoriesImages.forEach(function (item) {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
  rollSlider();
}; // добавление событий на кнопки прокрутки


categoriesArrowPrev.onclick = function () {
  count--;

  if (count < 0) {
    count = categoriesImages.length - 1;
  }

  rollSlider(categoriesSliderLine);
};

categoriesArrowNext.onclick = function () {
  count++;

  if (count >= categoriesImages.length) {
    count = 0;
  }

  rollSlider(categoriesSliderLine);
}; // вызов функций для карусели на секции categories


init(categoriesList, categoriesSliderLine, categoriesImages);
window.addEventListener('resize', init);

/***/ }),

/***/ "./src/news_caruosel.js":
/*!******************************!*\
  !*** ./src/news_caruosel.js ***!
  \******************************/
/***/ (() => {

// переменные для секции categories
var newsImages = document.querySelectorAll('.post_block__caruosel .post');
var newsList = document.querySelector('.news__post_block');
var newsSliderLine = document.querySelector('.post_block__caruosel');
var newsArrowNext = document.querySelector('.post_block__next');
var newsArrowPrev = document.querySelector('.post_block__prev');
var newsCount = 0;
var newsWidth; // eslint-disable-next-line no-console

console.log(newsImages, newsList, newsSliderLine); // функция прокрутки изображений

var rollSlider = function rollSlider() {
  newsSliderLine.style.transform = "translate(-".concat(newsWidth * newsCount, "px)");
}; // установка нужного размера для блока


var init = function init() {
  newsWidth = newsList.offsetWidth;
  newsSliderLine.style.width = newsWidth * newsImages.length + 'px';
  newsImages.forEach(function (item) {
    item.style.width = newsWidth + 'px';
    item.style.height = 'auto';
  });
  rollSlider();
}; // добавление событий на кнопки прокрутки


newsArrowPrev.onclick = function () {
  newsCount--;

  if (newsCount < 0) {
    newsCount = newsImages.length - 1;
  }

  rollSlider(newsSliderLine);
};

newsArrowNext.onclick = function () {
  newsCount++;

  if (newsCount >= newsImages.length) {
    newsCount = 0;
  }

  rollSlider(newsSliderLine);
}; // вызов функций для карусели на секции news


init();
window.addEventListener('resize', init);

/***/ }),

/***/ "./src/top_bar.js":
/*!************************!*\
  !*** ./src/top_bar.js ***!
  \************************/
/***/ (() => {

document.addEventListener('animationstart', function (e) {
  if (e.animationName === 'fade-in') {
    e.target.classList.add('did-fade-in');
  }
});
document.addEventListener('animationend', function (e) {
  if (e.animationName === 'fade-out') {
    e.target.classList.remove('did-fade-in');
  }
});

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _caruosel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./caruosel */ "./src/caruosel.js");
/* harmony import */ var _caruosel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_caruosel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _top_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top_bar */ "./src/top_bar.js");
/* harmony import */ var _top_bar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_top_bar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _news_caruosel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news_caruosel */ "./src/news_caruosel.js");
/* harmony import */ var _news_caruosel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_news_caruosel__WEBPACK_IMPORTED_MODULE_3__);




})();

/******/ })()
;
//# sourceMappingURL=main.js.map