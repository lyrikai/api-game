/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://npm2/./src/style/index.scss?");

/***/ }),

/***/ "./src/Homee.js":
/*!**********************!*\
  !*** ./src/Homee.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* binding */ Home)\n/* harmony export */ });\nconst Home = (argument = '') => {\r\n    console.log('Home', argument);\r\n  };\r\n\r\n\n\n//# sourceURL=webpack://npm2/./src/Homee.js?");

/***/ }),

/***/ "./src/PageDetail.js":
/*!***************************!*\
  !*** ./src/PageDetail.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => (/* binding */ PageDetail)\n/* harmony export */ });\nconst PageDetail = (argument) => {\r\n    const preparePage = () => {\r\n      const cleanedArgument = argument.trim().replace(/\\s+/g, \"-\");\r\n      const displayGame = (gameData) => {\r\n        console.log(gameData)\r\n        const { name, released, description, background_image, description_raw, rating, ratings_count, developers, platforms, publishers, genres, tags, stores} = gameData;\r\n        const articleDOM = document.querySelector(\".page-detail .article\");\r\n        function firstSentence(text) {\r\n            let firstSentence = text.split(/[.?!]/)[0];\r\n            return firstSentence;\r\n          }\r\n\r\n          let a = []\r\n          platforms.forEach(function(item){\r\n            a.push(item.platform.name + \"</br>\");\r\n          });\r\n\r\n          let b = []\r\n          genres.forEach(function(item){\r\n            b.push(`<a href=\"#pagetag\">`+ item.name + \"</a><br>\");\r\n          });\r\n\r\n          let c = []\r\n          let ci = 0\r\n          tags.forEach(function(item){\r\n            ci = ci + 1\r\n            if(ci < 5){\r\n                c.push(item.name + \"</br>\");\r\n            }\r\n          });\r\n\r\n          let d = []\r\n          stores.forEach(function(item){\r\n            d.push(`<a href=\"https://`+item.store.domain +`\">`+ item.store.name + \"</><br>\");\r\n          });\r\n        \r\n        let ok = firstSentence(description_raw)\r\n\r\n        articleDOM.querySelector(\"img.back\").src = background_image;\r\n        articleDOM.querySelector(\".rating\").innerHTML = rating + \"/5 - \" + ratings_count +\" votes\";\r\n        articleDOM.querySelector(\".title-d\").innerHTML = name;\r\n        articleDOM.querySelector(\".short-desc\").innerHTML = ok;\r\n        articleDOM.querySelector(\".release\").innerHTML = released;\r\n        articleDOM.querySelector(\"p.description\").innerHTML = description;\r\n        articleDOM.querySelector(\".dev\").innerHTML = developers[0].name;\r\n        articleDOM.querySelector(\".platforms\").innerHTML = a;\r\n        articleDOM.querySelector(\".publiser\").innerHTML = publishers[0].name;\r\n        articleDOM.querySelector(\".genre\").innerHTML = b;\r\n        articleDOM.querySelector(\".tags\").innerHTML = c;\r\n        articleDOM.querySelector(\".buy-txt\").innerHTML = d;\r\n        \r\n\r\n      };\r\n  \r\n      const fetchGame = (url, argument) => {\r\n        let a = `${url}/${argument}?key=e59342cc36f443888806b7b87b1c6c01`\r\n        console.log(a)\r\n        fetch(`${url}/${argument}?key=e59342cc36f443888806b7b87b1c6c01`)\r\n          .then((response) => response.json())\r\n          .then((responseData) => {\r\n            console.log(responseData)\r\n            displayGame(responseData);\r\n          });\r\n      };\r\n\r\n      fetchGame('https://api.rawg.io/api/games', cleanedArgument);\r\n    };\r\n  \r\n    const render = () => {\r\n      pageContent.innerHTML = `\r\n      <div class=\"page-detail\">\r\n\r\n      <div class=\"article\">\r\n\r\n      <img class=\"back\" src=\"\">\r\n    \r\n      <div class=\"head\">\r\n          <div class=\"tilte-bloc\">\r\n              <p class=\"title-d\"></p>\r\n              <p class=\"short-desc\"></p>\r\n          </div>\r\n          <div class=\"rate-bloc\">\r\n              <p class=\"rating\"></p>\r\n          </div>\r\n      </div>\r\n  \r\n      <div class=\"text\">\r\n          <div class=\"plot-box\">\r\n              <p class=\"title-s\">Plot</p>\r\n              <p class=\"description\"></p>\r\n          </div>\r\n  \r\n          <div class=\"game-box\">\r\n              <p class=\"title-s\">Gameplay</p>\r\n              <p></p>\r\n          </div>\r\n  \r\n          <div class=\"shot-info\">\r\n              <div>\r\n                  <p class=\"title-s\">Release Date</p>\r\n                  <p class=\"release\"></p>\r\n              </div>\r\n              <div>\r\n                  <p class=\"title-s\">Developper</p>\r\n                  <p class=\"dev\"></p>\r\n              </div>\r\n              <div>\r\n                  <p class=\"title-s\">Platforms</p>\r\n                  <p class=\"platforms\"></p>\r\n              </div>\r\n              <div>\r\n                  <p class=\"title-s\">Publiser</p>\r\n                  <p class=\"publiser\"></p>\r\n              </div>\r\n          </div>\r\n  \r\n          <div class=\"shot-info-two\">\r\n              <div>\r\n                  <p class=\"title-s\">Genre</p>\r\n                  <p class=\"genre\"></p>\r\n              </div>\r\n              <div>\r\n                  <p class=\"title-s\">Tags</p>\r\n                  <p  class=\"tags\"></p>\r\n              </div> \r\n          </div>\r\n      </div>\r\n  \r\n      <div class=\"buy\">\r\n          <h2 class=\"title-s\">Buy</h2>\r\n          <p class=\"buy-txt\"></p>\r\n          \r\n      </div>\r\n      \r\n      <div class=\"trailer\">\r\n          <h2 class=\"title-s\">Trailer</h2>\r\n          <p></p>\r\n          <p></p>\r\n      </div>\r\n  \r\n      <div>\r\n          <h2>SCREENSHOTS</h2>\r\n          <div>\r\n              <img src=\"\" alt=\"\" class=\"scren1\">\r\n              <img src=\"\" alt=\"\" class=\"scren2\">\r\n          </div>\r\n          <div>\r\n              <img src=\"\" alt=\"\" class=\"scren3\">\r\n              <img src=\"\" alt=\"\" class=\"scren4\">\r\n          </div>\r\n      </div>\r\n  \r\n      <div>\r\n          <h2>Similar games</h2>\r\n          <div>\r\n              <div></div>\r\n              <div></div>\r\n              <div></div>\r\n          </div>\r\n          <div>\r\n              <div></div>\r\n              <div></div>\r\n              <div></div>\r\n          </div>\r\n      </div>\r\n      </div>\r\n  \r\n      </div>\r\n\r\n        \r\n      `;\r\n  \r\n      preparePage();\r\n    };\r\n  \r\n    render();\r\n  };\r\n\r\n  \r\n\r\n  \n\n//# sourceURL=webpack://npm2/./src/PageDetail.js?");

/***/ }),

/***/ "./src/PageList.js":
/*!*************************!*\
  !*** ./src/PageList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageList\": () => (/* binding */ PageList)\n/* harmony export */ });\n\r\n\r\nconst PageList = (argument = '') => {\r\n  const preparePage = () => {\r\n    const cleanedArgument = argument.trim().replace(/\\s+/g, '-');\r\n\r\n    const displayResults = (articles) => {\r\n      console.log(articles)\r\n      const resultsContent = articles.map((article) => (\r\n        `\r\n        <article class=\"cardGame\">\r\n          <img class=\"img\" src=\"${article.background_image}\"></h2>\r\n          <a class=\"game-name\" href=\"#pagedetail/${article.id}\">${article.name}</a>\r\n        </article>`\r\n      ));\r\n      const resultsContainer = document.querySelector('.page-list .articles');\r\n      resultsContainer.innerHTML = resultsContent.join(\"\\n\");\r\n    };\r\n\r\n    const fetchList = (url, argument) => {\r\n      const finalURL = argument ? `${url}&search=${argument}` : url;\r\n      fetch(finalURL)\r\n        .then((response) => response.json())\r\n        .then((responseData) => {\r\n          displayResults(responseData.results)\r\n        });\r\n    };\r\n\r\n\r\n    fetchList(`https://api.rawg.io/api/games?key=e59342cc36f443888806b7b87b1c6c01`, cleanedArgument);\r\n    //fetchList(`https://api.rawg.io/api/games?genres=1&key=e59342cc36f443888806b7b87b1c6c01`, cleanedArgument);\r\n\r\n    document.getElementById(\"send\").addEventListener('click', ()=>{\r\n     let gamename = document.getElementById(\"game\").value\r\n     fetchList(`https://api.rawg.io/api/games?key=e59342cc36f443888806b7b87b1c6c01`, gamename);\r\n    })\r\n\r\n  };\r\n\r\n  const render = () => {\r\n    pageContent.innerHTML = `\r\n    <section>\r\n    <h1>Welcome,</h1>\r\n    <p class=\"intro-txt\">The Hyper Progame is the world’s premier event for computer and video games and related products. At The Hyper Progame,\r\n    the video game industry’s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best,\r\n    brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies,\r\n    groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you\r\n    with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure</p>\r\n  </section>\r\n      <section class=\"page-list\">\r\n        <div class=\"articles\">Loading...</div>\r\n      </section>\r\n    `;\r\n\r\n    preparePage();\r\n  };\r\n\r\n  render();\r\n};\r\n\r\n  \n\n//# sourceURL=webpack://npm2/./src/PageList.js?");

/***/ }),

/***/ "./src/Pagetag.js":
/*!************************!*\
  !*** ./src/Pagetag.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Pagetag\": () => (/* binding */ Pagetag)\n/* harmony export */ });\n\r\n\r\nconst Pagetag = (argument = '') => {\r\n    const preparePage = () => {\r\n      const cleanedArgument = argument.trim().replace(/\\s+/g, '-');\r\n  \r\n      const displayResults = (articles) => {\r\n        console.log(articles)\r\n        const resultsContent = articles.map((article) => (\r\n          `\r\n          <article class=\"cardGame\">\r\n\r\n            <h2>${article.released}</h2>\r\n            <a href=\"#pagedetail/${article.id}\">${article.name}</a>\r\n          </article>`\r\n        ));\r\n        const resultsContainer = document.querySelector('.page-list .articles');\r\n        resultsContainer.innerHTML = resultsContent.join(\"\\n\");\r\n      };\r\n  \r\n      const fetchList = (url, argument) => {\r\n        const finalURL = argument ? `${url}&search=${argument}` : url;\r\n        fetch(finalURL)\r\n          .then((response) => response.json())\r\n          .then((responseData) => {\r\n            displayResults(responseData.results)\r\n          });\r\n      };\r\n  \r\n      fetchList(`https://api.rawg.io/api/games?key=e59342cc36f443888806b7b87b1c6c01`, cleanedArgument);\r\n      //fetchList(`https://api.rawg.io/api/games?genres=1&key=e59342cc36f443888806b7b87b1c6c01`, cleanedArgument);\r\n  \r\n    };\r\n  \r\n    const render = () => {\r\n      pageContent.innerHTML = `\r\n      <section>\r\n      <h1 class=\"color-pink\">Welcome,</h1>\r\n      <p>The Hyper Progame is the world’s premier event for computer and video games and related products. At The Hyper Progame,\r\n      the video game industry’s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best,\r\n      brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies,\r\n      groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you\r\n      with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure</p>\r\n    </section>\r\n        <section class=\"page-list\">\r\n          <div class=\"articles\">Loading...</div>\r\n        </section>\r\n      `;\r\n  \r\n      preparePage();\r\n    };\r\n  \r\n    render();\r\n  };\r\n  \r\n    \n\n//# sourceURL=webpack://npm2/./src/Pagetag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var _Homee_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Homee.js */ \"./src/Homee.js\");\n/* harmony import */ var _PageList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageList.js */ \"./src/PageList.js\");\n/* harmony import */ var _PageDetail_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageDetail.js */ \"./src/PageDetail.js\");\n/* harmony import */ var _Pagetag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pagetag.js */ \"./src/Pagetag.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst routes = {\r\n    '': _Homee_js__WEBPACK_IMPORTED_MODULE_1__.Home,\r\n    'pagelist': _PageList_js__WEBPACK_IMPORTED_MODULE_2__.PageList,\r\n    'pagedetail': _PageDetail_js__WEBPACK_IMPORTED_MODULE_3__.PageDetail,\r\n    'pagetag': _Pagetag_js__WEBPACK_IMPORTED_MODULE_4__.Pagetag,\r\n  };\r\n\r\n\r\nconst callRoute = () => {\r\n    const { hash } = window.location;\r\n    const pathParts = hash.substring(1).split('/');\r\n    const pageName = pathParts[0];\r\n    const pageArgument = pathParts[1] || '';\r\n    const pageFunction = routes[pageName];\r\n    if (pageFunction !== undefined) {\r\n      pageFunction(pageArgument);\r\n    }\r\n  };\r\n\r\n\r\n  const elements = document.querySelectorAll('*');\r\nelements.forEach(element => {\r\n  element.innerHTML = element.innerHTML.replace(/,/g, \"\");\r\n});\r\n  \r\n  \r\nwindow.addEventListener('hashchange', () => callRoute());\r\nwindow.addEventListener('DOMContentLoaded', () => callRoute());\r\n\r\n\n\n//# sourceURL=webpack://npm2/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;