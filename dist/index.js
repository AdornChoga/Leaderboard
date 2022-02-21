/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/background.jpg */ "./src/assets/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\r\n  font-size: 62.5%;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: sans-serif;\r\n  background-image:\r\n    linear-gradient(rgba(192, 52, 104, 0.37), rgba(183, 77, 115, 0.5)),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-position: center;\r\n  background-size: contain;\r\n}\r\n\r\nheader {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  height: 5rem;\r\n  width: 100%;\r\n  background-color: darkcyan;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  list-style: none;\r\n  justify-content: space-between;\r\n  padding-right: 2rem;\r\n  align-items: center;\r\n}\r\n\r\nnav h1 {\r\n  margin: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.main-title {\r\n  font-family: 'Jockey One', sans-serif;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 2.7rem;\r\n  font-style: italic;\r\n  text-shadow: 0.4rem 0.2rem 0.4rem white;\r\n}\r\n\r\n.home {\r\n  display: none;\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.my-games-link {\r\n  font-size: 2.5rem;\r\n  font-family: 'Jockey One', sans-serif;\r\n}\r\n\r\nmain {\r\n  padding-left: 8rem;\r\n  margin-top: 7rem;\r\n  padding-bottom: 3rem;\r\n}\r\n\r\n.current-game {\r\n  font-size: 2.3rem;\r\n  margin-left: 3rem;\r\n  color: cyan;\r\n  width: fit-content;\r\n  padding: 0.5rem;\r\n  letter-spacing: 0.2rem;\r\n}\r\n\r\n.my-games-container {\r\n  display: none;\r\n  margin: 0;\r\n  width: 80%;\r\n}\r\n\r\n.popups-container {\r\n  display: none;\r\n  position: fixed;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100vh;\r\n  background-color: rgba(26, 24, 18, 0.5);\r\n  backdrop-filter: blur(0.5rem);\r\n}\r\n\r\n.enter-game-popup {\r\n  margin-inline: auto;\r\n  background-color: white;\r\n  margin-top: 1rem;\r\n  width: 40%;\r\n  padding: 1rem 1rem 3rem 1rem;\r\n}\r\n\r\nlegend {\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n}\r\n\r\nfieldset div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 80%;\r\n  margin-inline: auto;\r\n}\r\n\r\n#game-input {\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  padding: 0.5rem 0.3rem;\r\n  border: rgba(26, 24, 18, 0.5) solid;\r\n  border-radius: 0.5rem;\r\n  outline: none;\r\n  font-size: 1.7rem;\r\n}\r\n\r\n#submit-game {\r\n  padding: 0.3rem 1rem;\r\n  border-radius: 0.5rem;\r\n  align-self: flex-end;\r\n  font-size: 1.3rem;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\n#submit-game:active {\r\n  transform: scale(0.8);\r\n}\r\n\r\n.grid-container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  padding-left: 7em;\r\n  grid-gap: 8rem;\r\n  width: 90%;\r\n}\r\n\r\nh2 {\r\n  font-size: 3.5rem;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n\r\n#recent-scores-title,\r\n#add-score-title {\r\n  font-size: 3rem;\r\n  color: white;\r\n  font-family: \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n.recent-scores-heading {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  width: 85%;\r\n}\r\n\r\n.leaderboard-buttons {\r\n  font-weight: bold;\r\n  font-size: 1.6rem;\r\n  border: none;\r\n  padding: 0.5rem 1.5rem;\r\n  cursor: pointer;\r\n  border-radius: 0.6rem;\r\n  background-color: #257eb8;\r\n}\r\n\r\n.leaderboard-buttons:hover {\r\n  background-color: rgba(86, 233, 123, 0.726);\r\n  color: white;\r\n}\r\n\r\n.leaderboard-buttons:active {\r\n  transform: scale(0.9);\r\n}\r\n\r\n#refresh-button {\r\n  align-self: center;\r\n}\r\n\r\n.scores-list {\r\n  width: 83%;\r\n  height: 63vh;\r\n  overflow-y: auto;\r\n  font-size: 1.7rem;\r\n  padding: 1rem;\r\n  list-style: none;\r\n  display: flex;\r\n  gap: 1rem;\r\n  flex-direction: column;\r\n  border: 2px solid black;\r\n  background-color: darkcyan;\r\n}\r\n\r\n.scores-list li {\r\n  padding: 0.5em 0.2em;\r\n  border-left: 0.3rem solid black;\r\n  border-top-right-radius: 0.8rem;\r\n  border-bottom-right-radius: 0.8rem;\r\n}\r\n\r\n.scores-list li:nth-child(odd) {\r\n  background-color: white;\r\n}\r\n\r\n.scores-list li:nth-child(even) {\r\n  background-color: lightgrey;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 70%;\r\n  gap: 2rem;\r\n  margin-top: 4rem;\r\n}\r\n\r\n#name-input,\r\n#score-input {\r\n  display: block;\r\n  padding: 0.3em;\r\n  font-size: 2rem;\r\n  border-radius: 0.4rem;\r\n  outline: none;\r\n  border: 0.2rem solid rgb(19, 134, 129);\r\n}\r\n\r\ninput:focus {\r\n  box-shadow: 0 0 0.8rem cyan;\r\n}\r\n\r\n#submit-score {\r\n  align-self: flex-end;\r\n}\r\n\r\n.game-menu-container {\r\n  padding-top: 1rem;\r\n}\r\n\r\n#select-game {\r\n  font-size: 1.8rem;\r\n  font-weight: bold;\r\n  margin: 0;\r\n  margin-bottom: 0.7rem;\r\n  color: #ff8749;\r\n}\r\n\r\n.game-menu {\r\n  width: 17rem;\r\n  height: 3rem;\r\n  font-size: 1.6rem;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  background-color: #257eb8;\r\n}\r\n\r\n.games-list-title {\r\n  font-size: 2.5rem;\r\n  color: white;\r\n}\r\n\r\n.my-games-section {\r\n  display: flex;\r\n  flex-direction: column-reverse;\r\n  align-items: center;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.new-game-form {\r\n  width: 30%;\r\n  margin: 0.5rem;\r\n}\r\n\r\n#input-new-game {\r\n  padding: 0.4rem;\r\n  font-size: 1.5rem;\r\n  border-radius: 0.5rem;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n#submit-new-game {\r\n  width: fit-content;\r\n  margin-inline: auto;\r\n  border-radius: 0.5rem;\r\n  font-size: 1.3rem;\r\n  font-weight: bold;\r\n  padding: 0.4rem;\r\n  cursor: pointer;\r\n  border: none;\r\n}\r\n\r\n#submit-new-game:hover {\r\n  background-color: #257eb8;\r\n  color: white;\r\n}\r\n\r\n#submit-new-game:active {\r\n  transform: scale(0.8);\r\n}\r\n\r\n.games-list-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  list-style-type: none;\r\n  padding: 1rem;\r\n  width: 45%;\r\n  height: 55vh;\r\n  border-top: solid red;\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n  backdrop-filter: blur(0.3rem);\r\n  overflow-y: auto;\r\n}\r\n\r\n.game-list-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 1.5rem;\r\n  outline: rgb(19, 134, 129) inset;\r\n  padding: 0.8rem;\r\n  background-color: #008b8b;\r\n}\r\n\r\n.game-list-item p {\r\n  margin: 0;\r\n  color: white;\r\n  font-size: 1.8rem;\r\n}\r\n\r\n.delete-game {\r\n  font-size: 1.4rem;\r\n  color: red;\r\n  cursor: pointer;\r\n}\r\n\r\nfooter {\r\n  position: fixed;\r\n  border: 0.2rem solid black;\r\n  bottom: 0;\r\n  height: 4rem;\r\n  width: 100%;\r\n  background-color: grey;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["html {\r\n  font-size: 62.5%;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: sans-serif;\r\n  background-image:\r\n    linear-gradient(rgba(192, 52, 104, 0.37), rgba(183, 77, 115, 0.5)),\r\n    url(./assets/images/background.jpg);\r\n  background-position: center;\r\n  background-size: contain;\r\n}\r\n\r\nheader {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  height: 5rem;\r\n  width: 100%;\r\n  background-color: darkcyan;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  list-style: none;\r\n  justify-content: space-between;\r\n  padding-right: 2rem;\r\n  align-items: center;\r\n}\r\n\r\nnav h1 {\r\n  margin: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.main-title {\r\n  font-family: 'Jockey One', sans-serif;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 2.7rem;\r\n  font-style: italic;\r\n  text-shadow: 0.4rem 0.2rem 0.4rem white;\r\n}\r\n\r\n.home {\r\n  display: none;\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.my-games-link {\r\n  font-size: 2.5rem;\r\n  font-family: 'Jockey One', sans-serif;\r\n}\r\n\r\nmain {\r\n  padding-left: 8rem;\r\n  margin-top: 7rem;\r\n  padding-bottom: 3rem;\r\n}\r\n\r\n.current-game {\r\n  font-size: 2.3rem;\r\n  margin-left: 3rem;\r\n  color: cyan;\r\n  width: fit-content;\r\n  padding: 0.5rem;\r\n  letter-spacing: 0.2rem;\r\n}\r\n\r\n.my-games-container {\r\n  display: none;\r\n  margin: 0;\r\n  width: 80%;\r\n}\r\n\r\n.popups-container {\r\n  display: none;\r\n  position: fixed;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100vh;\r\n  background-color: rgba(26, 24, 18, 0.5);\r\n  backdrop-filter: blur(0.5rem);\r\n}\r\n\r\n.enter-game-popup {\r\n  margin-inline: auto;\r\n  background-color: white;\r\n  margin-top: 1rem;\r\n  width: 40%;\r\n  padding: 1rem 1rem 3rem 1rem;\r\n}\r\n\r\nlegend {\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n}\r\n\r\nfieldset div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 80%;\r\n  margin-inline: auto;\r\n}\r\n\r\n#game-input {\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  padding: 0.5rem 0.3rem;\r\n  border: rgba(26, 24, 18, 0.5) solid;\r\n  border-radius: 0.5rem;\r\n  outline: none;\r\n  font-size: 1.7rem;\r\n}\r\n\r\n#submit-game {\r\n  padding: 0.3rem 1rem;\r\n  border-radius: 0.5rem;\r\n  align-self: flex-end;\r\n  font-size: 1.3rem;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\n#submit-game:active {\r\n  transform: scale(0.8);\r\n}\r\n\r\n.grid-container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  padding-left: 7em;\r\n  grid-gap: 8rem;\r\n  width: 90%;\r\n}\r\n\r\nh2 {\r\n  font-size: 3.5rem;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n\r\n#recent-scores-title,\r\n#add-score-title {\r\n  font-size: 3rem;\r\n  color: white;\r\n  font-family: \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n.recent-scores-heading {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  width: 85%;\r\n}\r\n\r\n.leaderboard-buttons {\r\n  font-weight: bold;\r\n  font-size: 1.6rem;\r\n  border: none;\r\n  padding: 0.5rem 1.5rem;\r\n  cursor: pointer;\r\n  border-radius: 0.6rem;\r\n  background-color: #257eb8;\r\n}\r\n\r\n.leaderboard-buttons:hover {\r\n  background-color: rgba(86, 233, 123, 0.726);\r\n  color: white;\r\n}\r\n\r\n.leaderboard-buttons:active {\r\n  transform: scale(0.9);\r\n}\r\n\r\n#refresh-button {\r\n  align-self: center;\r\n}\r\n\r\n.scores-list {\r\n  width: 83%;\r\n  height: 63vh;\r\n  overflow-y: auto;\r\n  font-size: 1.7rem;\r\n  padding: 1rem;\r\n  list-style: none;\r\n  display: flex;\r\n  gap: 1rem;\r\n  flex-direction: column;\r\n  border: 2px solid black;\r\n  background-color: darkcyan;\r\n}\r\n\r\n.scores-list li {\r\n  padding: 0.5em 0.2em;\r\n  border-left: 0.3rem solid black;\r\n  border-top-right-radius: 0.8rem;\r\n  border-bottom-right-radius: 0.8rem;\r\n}\r\n\r\n.scores-list li:nth-child(odd) {\r\n  background-color: white;\r\n}\r\n\r\n.scores-list li:nth-child(even) {\r\n  background-color: lightgrey;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 70%;\r\n  gap: 2rem;\r\n  margin-top: 4rem;\r\n}\r\n\r\n#name-input,\r\n#score-input {\r\n  display: block;\r\n  padding: 0.3em;\r\n  font-size: 2rem;\r\n  border-radius: 0.4rem;\r\n  outline: none;\r\n  border: 0.2rem solid rgb(19, 134, 129);\r\n}\r\n\r\ninput:focus {\r\n  box-shadow: 0 0 0.8rem cyan;\r\n}\r\n\r\n#submit-score {\r\n  align-self: flex-end;\r\n}\r\n\r\n.game-menu-container {\r\n  padding-top: 1rem;\r\n}\r\n\r\n#select-game {\r\n  font-size: 1.8rem;\r\n  font-weight: bold;\r\n  margin: 0;\r\n  margin-bottom: 0.7rem;\r\n  color: #ff8749;\r\n}\r\n\r\n.game-menu {\r\n  width: 17rem;\r\n  height: 3rem;\r\n  font-size: 1.6rem;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  background-color: #257eb8;\r\n}\r\n\r\n.games-list-title {\r\n  font-size: 2.5rem;\r\n  color: white;\r\n}\r\n\r\n.my-games-section {\r\n  display: flex;\r\n  flex-direction: column-reverse;\r\n  align-items: center;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.new-game-form {\r\n  width: 30%;\r\n  margin: 0.5rem;\r\n}\r\n\r\n#input-new-game {\r\n  padding: 0.4rem;\r\n  font-size: 1.5rem;\r\n  border-radius: 0.5rem;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n#submit-new-game {\r\n  width: fit-content;\r\n  margin-inline: auto;\r\n  border-radius: 0.5rem;\r\n  font-size: 1.3rem;\r\n  font-weight: bold;\r\n  padding: 0.4rem;\r\n  cursor: pointer;\r\n  border: none;\r\n}\r\n\r\n#submit-new-game:hover {\r\n  background-color: #257eb8;\r\n  color: white;\r\n}\r\n\r\n#submit-new-game:active {\r\n  transform: scale(0.8);\r\n}\r\n\r\n.games-list-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  list-style-type: none;\r\n  padding: 1rem;\r\n  width: 45%;\r\n  height: 55vh;\r\n  border-top: solid red;\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n  backdrop-filter: blur(0.3rem);\r\n  overflow-y: auto;\r\n}\r\n\r\n.game-list-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 1.5rem;\r\n  outline: rgb(19, 134, 129) inset;\r\n  padding: 0.8rem;\r\n  background-color: #008b8b;\r\n}\r\n\r\n.game-list-item p {\r\n  margin: 0;\r\n  color: white;\r\n  font-size: 1.8rem;\r\n}\r\n\r\n.delete-game {\r\n  font-size: 1.4rem;\r\n  color: red;\r\n  cursor: pointer;\r\n}\r\n\r\nfooter {\r\n  position: fixed;\r\n  border: 0.2rem solid black;\r\n  bottom: 0;\r\n  height: 4rem;\r\n  width: 100%;\r\n  background-color: grey;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _localstorage_current_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage/current-game.js */ "./src/modules/localstorage/current-game.js");


const apiPathInfo = () => {
  const api = {
    baseUrl: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/',
    games: 'games/',
    id: `${_localstorage_current_game_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchCurrentGame().gameId}/`,
    scores: 'scores/',
  };
  return api;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiPathInfo);

/***/ }),

/***/ "./src/modules/create_game.js":
/*!************************************!*\
  !*** ./src/modules/create_game.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");


const createGame = async (gameName) => {
  const { baseUrl, games } = (0,_api_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const path = `${baseUrl}${games}`;
  const response = await fetch(path, {
    method: 'POST',
    body: JSON.stringify(
      {
        name: gameName,
      },
    ),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const results = await response.json();
  const gameId = results.result.split(' ')[3];
  return { gameName, gameId };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGame);

/***/ }),

/***/ "./src/modules/events.js":
/*!*******************************!*\
  !*** ./src/modules/events.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _localstorage_games_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage/games-data.js */ "./src/modules/localstorage/games-data.js");
/* harmony import */ var _localstorage_current_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage/current-game.js */ "./src/modules/localstorage/current-game.js");
/* harmony import */ var _recent_scores_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recent_scores.js */ "./src/modules/recent_scores.js");
/* harmony import */ var _load_scores_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./load_scores.js */ "./src/modules/load_scores.js");





const events = () => {
  const scoresContainer = document.querySelector('.scores-list');
  const home = document.querySelector('.home');
  const myGamesLink = document.querySelector('.my-games-link');
  const myGamesContainer = document.querySelector('.my-games-container');
  const mainTitle = document.querySelector('.main-title');
  const gridContainer = document.querySelector('.grid-container');
  const displayedGame = document.querySelector('.current-game');

  myGamesLink.addEventListener('click', () => {
    mainTitle.style.display = 'none';
    gridContainer.style.display = 'none';
    displayedGame.style.display = 'none';
    home.style.display = 'block';
    myGamesContainer.style.display = 'flex';
    myGamesLink.style.display = 'none';
  });

  home.addEventListener('click', () => {
    mainTitle.style.display = 'block';
    gridContainer.style.display = 'grid';
    displayedGame.style.display = 'block';
    home.style.display = 'none';
    myGamesContainer.style.display = 'none';
    myGamesLink.style.display = 'block';
  });

  if (_localstorage_games_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchGames().length > 0) {
    _localstorage_games_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchGames().forEach((game) => {
      if (game.gameId === _localstorage_current_game_js__WEBPACK_IMPORTED_MODULE_1__["default"].fetchCurrentGame().gameId) {
        displayedGame.innerHTML = game.gameName.toUpperCase();
      }
    });
  } else {
    displayedGame.innerHTML = '';
    scoresContainer.innerHTML = '';
  }

  if (_localstorage_games_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchGames().length === 1) {
    const game = _localstorage_games_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchGames()[0];
    _localstorage_current_game_js__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentGame(game.gameId);
    displayedGame.innerHTML = game.gameName;
    (0,_load_scores_js__WEBPACK_IMPORTED_MODULE_3__["default"])(scoresContainer, _recent_scores_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }

  if (_localstorage_games_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchGames().length === 0) {
    _localstorage_current_game_js__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentGame(null);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);

/***/ }),

/***/ "./src/modules/html-templates.js":
/*!***************************************!*\
  !*** ./src/modules/html-templates.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "myGamesTemplate": () => (/* binding */ myGamesTemplate),
/* harmony export */   "enterGamePopup": () => (/* binding */ enterGamePopup)
/* harmony export */ });
/* harmony import */ var _localstorage_games_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage/games-data.js */ "./src/modules/localstorage/games-data.js");
/* harmony import */ var _localstorage_current_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage/current-game.js */ "./src/modules/localstorage/current-game.js");
/* harmony import */ var _create_game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create_game.js */ "./src/modules/create_game.js");
/* harmony import */ var _recent_scores_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recent_scores.js */ "./src/modules/recent_scores.js");
/* harmony import */ var _load_scores_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./load_scores.js */ "./src/modules/load_scores.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events.js */ "./src/modules/events.js");







const myGamesTemplate = () => {
  const myGamesContainer = document.querySelector('.my-games-container');
  myGamesContainer.innerHTML = `
    <div class="game-menu-container">
      <h1 id="select-game">Current Game:</h1>
      <select class="game-menu"></select>
    </div>
    <div class="my-games-section">
      <form class="new-game-form">
        <input type="text" placeholder="Add a new game..." id="input-new-game" value=""/>
        <button type="submit" id="submit-new-game">Add Game</button>
      </form>
    </div>
  `;
  const gameMenu = document.querySelector('.game-menu');
  _localstorage_games_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchGames().forEach((game) => {
    const gameOption = document.createElement('option');
    gameOption.classList.add('game-option');
    gameOption.id = game.gameId;
    gameOption.innerHTML = game.gameName;
    if (game.gameId === _localstorage_current_game_js__WEBPACK_IMPORTED_MODULE_1__["default"].fetchCurrentGame().gameId) {
      gameOption.selected = true;
    }
    gameMenu.appendChild(gameOption);
  });

  gameMenu.addEventListener('change', () => {
    const scoresContainer = document.querySelector('.scores-list');
    const selectedGame = gameMenu.options[gameMenu.selectedIndex];
    _localstorage_current_game_js__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentGame(selectedGame.id);
    scoresContainer.innerHTML = '';
    (0,_load_scores_js__WEBPACK_IMPORTED_MODULE_4__["default"])(scoresContainer, _recent_scores_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
    (0,_events_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  });

  const myGamesSection = document.querySelector('.my-games-section');
  const gamesList = document.createElement('ul');
  gamesList.classList.add('games-list-container');
  _localstorage_games_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchGames().forEach((game) => {
    const listItem = document.createElement('li');
    listItem.classList.add('game-list-item');
    listItem.innerHTML = `
      <p>${game.gameName}</p>
      <button type="button" class="delete-game" id="${game.gameId}">delete</button>
    `;
    gamesList.appendChild(listItem);
  });
  myGamesSection.appendChild(gamesList);
  myGamesSection.innerHTML += `
    <h1 class="games-list-title">Games</h1>
  `;

  const newGameForm = document.querySelector('.new-game-form');
  const inputNewGame = document.querySelector('#input-new-game');
  newGameForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newGame = inputNewGame.value.trim();
    const { gameName, gameId } = await (0,_create_game_js__WEBPACK_IMPORTED_MODULE_2__["default"])(newGame);
    _localstorage_games_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateGames({ gameName, gameId });
    const listItem = document.createElement('li');
    listItem.classList.add('game-list-item');
    listItem.innerHTML = `
      <p>${gameName}</p>
      <button type="button" class="delete-game" id="${gameId}">delete</button>
    `;
    myGamesTemplate();
    (0,_events_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
    newGameForm.reset();
  });

  const deleteGame = document.querySelectorAll('.delete-game');
  deleteGame.forEach((btn) => {
    btn.addEventListener('click', () => {
      const games = _localstorage_games_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchGames();
      const remainingGames = games.filter((game) => game.gameId !== btn.id);
      _localstorage_games_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].setGames(remainingGames);
      (0,_events_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
      myGamesTemplate();
    });
  });
};

const enterGamePopup = () => {
  const popupContainer = document.querySelector('.popups-container');
  popupContainer.innerHTML = `
    <form class="enter-game-popup">
      <fieldset>
        <legend>Welcome to Leaderboard</legend>
        <br />
        <div>
          <input type="text" placeholder="Enter game name" id="game-input" value="" />
          <br />
          <button type="submit" id="submit-game">OK</button>
        </div>
      </fieldset>
    </form>
  `;
  popupContainer.style.display = 'block';
  const gameInputForm = document.querySelector('.enter-game-popup');
  gameInputForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const game = document.querySelector('#game-input');
    const { gameName, gameId } = await (0,_create_game_js__WEBPACK_IMPORTED_MODULE_2__["default"])(game.value);
    _localstorage_games_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateGames({ gameName, gameId });
    _localstorage_current_game_js__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentGame(gameId);
    popupContainer.style.display = 'none';
    window.location.reload();
  });
};



/***/ }),

/***/ "./src/modules/load_scores.js":
/*!************************************!*\
  !*** ./src/modules/load_scores.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadScores = async (htmlContainer, scores) => {
  const data = await scores();
  data.forEach((score) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${score.user}: ${score.score}`;
    htmlContainer.appendChild(listItem);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadScores);

/***/ }),

/***/ "./src/modules/localstorage/current-game.js":
/*!**************************************************!*\
  !*** ./src/modules/localstorage/current-game.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class currentGame {
  static fetchCurrentGame() {
    if (localStorage.getItem('current-game') === null) {
      localStorage.setItem('current-game', JSON.stringify({}));
    }
    return JSON.parse(localStorage.getItem('current-game'));
  }

  static setCurrentGame(id) {
    if (id) {
      const currentGame = this.fetchCurrentGame();
      currentGame.gameId = id;
      localStorage.setItem('current-game', JSON.stringify(currentGame));
    } else {
      localStorage.setItem('current-game', JSON.stringify({}));
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currentGame);

/***/ }),

/***/ "./src/modules/localstorage/games-data.js":
/*!************************************************!*\
  !*** ./src/modules/localstorage/games-data.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class gamesData {
  static fetchGames() {
    if (localStorage.getItem('games') === null) {
      localStorage.setItem('games', JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem('games'));
  }

  static setGames(games) {
    localStorage.setItem('games', JSON.stringify(games));
  }

  static updateGames(game) {
    const games = this.fetchGames();
    games.push(game);
    localStorage.setItem('games', JSON.stringify(games));
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gamesData);

/***/ }),

/***/ "./src/modules/recent_scores.js":
/*!**************************************!*\
  !*** ./src/modules/recent_scores.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");


const recentScores = async () => {
  const {
    baseUrl, games, id, scores,
  } = (0,_api_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const path = `${baseUrl}${games}${id}${scores}`;
  const data = await fetch(path);
  const response = await data.json();
  const { result } = response;
  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (recentScores);

/***/ }),

/***/ "./src/modules/submit.js":
/*!*******************************!*\
  !*** ./src/modules/submit.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _upload_scores_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload_scores.js */ "./src/modules/upload_scores.js");


const submit = () => {
  const nameInput = document.querySelector('#name-input');
  const scoreInput = document.querySelector('#score-input');
  if (nameInput.value !== '' && scoreInput.value !== '') {
    (0,_upload_scores_js__WEBPACK_IMPORTED_MODULE_0__["default"])(nameInput.value, Number(scoreInput.value));
    nameInput.value = '';
    scoreInput.value = '';
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (submit);


/***/ }),

/***/ "./src/modules/upload_scores.js":
/*!**************************************!*\
  !*** ./src/modules/upload_scores.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");


const uploadScore = async (user, score) => {
  const {
    baseUrl, games, id, scores,
  } = (0,_api_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const path = `${baseUrl}${games}${id}${scores}`;
  const response = await fetch(path, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  await response.json();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uploadScore);

/***/ }),

/***/ "./src/assets/images/background.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/background.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1b52e20bb5a211da40a.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _modules_events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/events.js */ "./src/modules/events.js");
/* harmony import */ var _modules_html_templates_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/html-templates.js */ "./src/modules/html-templates.js");
/* harmony import */ var _modules_localstorage_current_game_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/localstorage/current-game.js */ "./src/modules/localstorage/current-game.js");
/* harmony import */ var _modules_recent_scores_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/recent_scores.js */ "./src/modules/recent_scores.js");
/* harmony import */ var _modules_load_scores_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/load_scores.js */ "./src/modules/load_scores.js");
/* harmony import */ var _modules_submit_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/submit.js */ "./src/modules/submit.js");








const submitBtn = document.querySelector('#submit-score');
const refreshBtn = document.querySelector('#refresh-button');
const scoresContainer = document.querySelector('.scores-list');

(0,_modules_events_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

(0,_modules_html_templates_js__WEBPACK_IMPORTED_MODULE_2__.myGamesTemplate)();

if (_modules_localstorage_current_game_js__WEBPACK_IMPORTED_MODULE_3__["default"].fetchCurrentGame().gameId) {
  (0,_modules_load_scores_js__WEBPACK_IMPORTED_MODULE_5__["default"])(scoresContainer, _modules_recent_scores_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
} else {
  (0,_modules_html_templates_js__WEBPACK_IMPORTED_MODULE_2__.enterGamePopup)();
}

window.addEventListener('load', () => {
  if (localStorage.getItem('games') === null) {
    (0,_modules_html_templates_js__WEBPACK_IMPORTED_MODULE_2__.enterGamePopup)();
  }
});

submitBtn.addEventListener('click', () => {
  (0,_modules_submit_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
});

refreshBtn.addEventListener('click', () => {
  scoresContainer.innerHTML = '';
  (0,_modules_load_scores_js__WEBPACK_IMPORTED_MODULE_5__["default"])(scoresContainer, _modules_recent_scores_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUss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Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnFCO0FBQ29CO0FBQ3FDO0FBQ2I7QUFDWDtBQUNKO0FBQ1Q7O0FBRXpDO0FBQ0E7QUFDQTs7QUFFQSw4REFBTTs7QUFFTiwyRUFBZTs7QUFFZixJQUFJLDhGQUE0QjtBQUNoQyxFQUFFLG1FQUFVLGtCQUFrQixpRUFBWTtBQUMxQyxFQUFFO0FBQ0YsRUFBRSwwRUFBYztBQUNoQjs7QUFFQTtBQUNBO0FBQ0EsSUFBSSwwRUFBYztBQUNsQjtBQUNBLENBQUM7O0FBRUQ7QUFDQSxFQUFFLDhEQUFNO0FBQ1IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSxtRUFBVSxrQkFBa0IsaUVBQVk7QUFDMUMsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvYXBpLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvY3JlYXRlX2dhbWUuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlcy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlcy9odG1sLXRlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL2xvYWRfc2NvcmVzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvbG9jYWxzdG9yYWdlL2N1cnJlbnQtZ2FtZS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL2xvY2Fsc3RvcmFnZS9nYW1lcy1kYXRhLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvcmVjZW50X3Njb3Jlcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL3N1Ym1pdC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL3VwbG9hZF9zY29yZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcclxcbiAgICBsaW5lYXItZ3JhZGllbnQocmdiYSgxOTIsIDUyLCAxMDQsIDAuMzcpLCByZ2JhKDE4MywgNzcsIDExNSwgMC41KSksXFxyXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbm5hdiBoMSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYWluLXRpdGxlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnSm9ja2V5IE9uZScsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAyLjdyZW07XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICB0ZXh0LXNoYWRvdzogMC40cmVtIDAuMnJlbSAwLjRyZW0gd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5ob21lIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm15LWdhbWVzLWxpbmsge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBmb250LWZhbWlseTogJ0pvY2tleSBPbmUnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogOHJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDdyZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnQtZ2FtZSB7XFxyXFxuICBmb250LXNpemU6IDIuM3JlbTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzcmVtO1xcclxcbiAgY29sb3I6IGN5YW47XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubXktZ2FtZXMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDI0LCAxOCwgMC41KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigwLjVyZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4uZW50ZXItZ2FtZS1wb3B1cCB7XFxyXFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAzcmVtIDFyZW07XFxyXFxufVxcclxcblxcclxcbmxlZ2VuZCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuZmllbGRzZXQgZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNnYW1lLWlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjNyZW07XFxyXFxuICBib3JkZXI6IHJnYmEoMjYsIDI0LCAxOCwgMC41KSBzb2xpZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1nYW1lIHtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LWdhbWU6YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDdlbTtcXHJcXG4gIGdyaWQtZ2FwOiA4cmVtO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgZm9udC1zaXplOiAzLjVyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuI3JlY2VudC1zY29yZXMtdGl0bGUsXFxyXFxuI2FkZC1zY29yZS10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2VudC1zY29yZXMtaGVhZGluZyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlYWRlcmJvYXJkLWJ1dHRvbnMge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjZyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU3ZWI4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGVhZGVyYm9hcmQtYnV0dG9uczpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg2LCAyMzMsIDEyMywgMC43MjYpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVhZGVyYm9hcmQtYnV0dG9uczphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVmcmVzaC1idXR0b24ge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVzLWxpc3Qge1xcclxcbiAgd2lkdGg6IDgzJTtcXHJcXG4gIGhlaWdodDogNjN2aDtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtjeWFuO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVzLWxpc3QgbGkge1xcclxcbiAgcGFkZGluZzogMC41ZW0gMC4yZW07XFxyXFxuICBib3JkZXItbGVmdDogMC4zcmVtIHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuOHJlbTtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5zY29yZXMtbGlzdCBsaTpudGgtY2hpbGQob2RkKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3Jlcy1saXN0IGxpOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgbWFyZ2luLXRvcDogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI25hbWUtaW5wdXQsXFxyXFxuI3Njb3JlLWlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcGFkZGluZzogMC4zZW07XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgcmdiKDE5LCAxMzQsIDEyOSk7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmZvY3VzIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAwLjhyZW0gY3lhbjtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1zY29yZSB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtbWVudS1jb250YWluZXIge1xcclxcbiAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNzZWxlY3QtZ2FtZSB7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC43cmVtO1xcclxcbiAgY29sb3I6ICNmZjg3NDk7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLW1lbnUge1xcclxcbiAgd2lkdGg6IDE3cmVtO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTdlYjg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lcy1saXN0LXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubXktZ2FtZXMtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5uZXctZ2FtZS1mb3JtIHtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBtYXJnaW46IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2lucHV0LW5ldy1nYW1lIHtcXHJcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1uZXctZ2FtZSB7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1uZXctZ2FtZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU3ZWI4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LW5ldy1nYW1lOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxyXFxufVxcclxcblxcclxcbi5nYW1lcy1saXN0LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICB3aWR0aDogNDUlO1xcclxcbiAgaGVpZ2h0OiA1NXZoO1xcclxcbiAgYm9yZGVyLXRvcDogc29saWQgcmVkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuM3JlbSk7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1saXN0LWl0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIG91dGxpbmU6IHJnYigxOSwgMTM0LCAxMjkpIGluc2V0O1xcclxcbiAgcGFkZGluZzogMC44cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGI4YjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtbGlzdC1pdGVtIHAge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtZ2FtZSB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCBibGFjaztcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGhlaWdodDogNHJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCOzsyQ0FFcUM7RUFDckMsMkJBQTJCO0VBQzNCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixX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QUFzQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcclxcbiAgICBsaW5lYXItZ3JhZGllbnQocmdiYSgxOTIsIDUyLCAxMDQsIDAuMzcpLCByZ2JhKDE4MywgNzcsIDExNSwgMC41KSksXFxyXFxuICAgIHVybCguL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5qcGcpO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW47XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgaDEge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi10aXRsZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0pvY2tleSBPbmUnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMi43cmVtO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgdGV4dC1zaGFkb3c6IDAuNHJlbSAwLjJyZW0gMC40cmVtIHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5teS1nYW1lcy1saW5rIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgZm9udC1mYW1pbHk6ICdKb2NrZXkgT25lJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDhyZW07XFxyXFxuICBtYXJnaW4tdG9wOiA3cmVtO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50LWdhbWUge1xcclxcbiAgZm9udC1zaXplOiAyLjNyZW07XFxyXFxuICBtYXJnaW4tbGVmdDogM3JlbTtcXHJcXG4gIGNvbG9yOiBjeWFuO1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm15LWdhbWVzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwcy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAyNCwgMTgsIDAuNSk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC41cmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmVudGVyLWdhbWUtcG9wdXAge1xcclxcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDFyZW0gM3JlbSAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5sZWdlbmQge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbmZpZWxkc2V0IGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jZ2FtZS1pbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMC4zcmVtO1xcclxcbiAgYm9yZGVyOiByZ2JhKDI2LCAyNCwgMTgsIDAuNSkgc29saWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQtZ2FtZSB7XFxyXFxuICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1nYW1lOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA3ZW07XFxyXFxuICBncmlkLWdhcDogOHJlbTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbiNyZWNlbnQtc2NvcmVzLXRpdGxlLFxcclxcbiNhZGQtc2NvcmUtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5yZWNlbnQtc2NvcmVzLWhlYWRpbmcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxufVxcclxcblxcclxcbi5sZWFkZXJib2FyZC1idXR0b25zIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1N2ViODtcXHJcXG59XFxyXFxuXFxyXFxuLmxlYWRlcmJvYXJkLWJ1dHRvbnM6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4NiwgMjMzLCAxMjMsIDAuNzI2KTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlYWRlcmJvYXJkLWJ1dHRvbnM6YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXHJcXG59XFxyXFxuXFxyXFxuI3JlZnJlc2gtYnV0dG9uIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3Jlcy1saXN0IHtcXHJcXG4gIHdpZHRoOiA4MyU7XFxyXFxuICBoZWlnaHQ6IDYzdmg7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3Jlcy1saXN0IGxpIHtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDAuMmVtO1xcclxcbiAgYm9yZGVyLWxlZnQ6IDAuM3JlbSBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjhyZW07XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVzLWxpc3QgbGk6bnRoLWNoaWxkKG9kZCkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5zY29yZXMtbGlzdCBsaTpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDRyZW07XFxyXFxufVxcclxcblxcclxcbiNuYW1lLWlucHV0LFxcclxcbiNzY29yZS1pbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBhZGRpbmc6IDAuM2VtO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIHJnYigxOSwgMTM0LCAxMjkpO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpmb2N1cyB7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMC44cmVtIGN5YW47XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQtc2NvcmUge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLW1lbnUtY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VsZWN0LWdhbWUge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcXHJcXG4gIGNvbG9yOiAjZmY4NzQ5O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1tZW51IHtcXHJcXG4gIHdpZHRoOiAxN3JlbTtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU3ZWI4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZXMtbGlzdC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm15LWdhbWVzLXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWdhbWUtZm9ybSB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgbWFyZ2luOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNpbnB1dC1uZXctZ2FtZSB7XFxyXFxuICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQtbmV3LWdhbWUge1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQtbmV3LWdhbWU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1N2ViODtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1uZXctZ2FtZTphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZXMtbGlzdC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgd2lkdGg6IDQ1JTtcXHJcXG4gIGhlaWdodDogNTV2aDtcXHJcXG4gIGJvcmRlci10b3A6IHNvbGlkIHJlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigwLjNyZW0pO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtbGlzdC1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBvdXRsaW5lOiByZ2IoMTksIDEzNCwgMTI5KSBpbnNldDtcXHJcXG4gIHBhZGRpbmc6IDAuOHJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDhiOGI7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWxpc3QtaXRlbSBwIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWdhbWUge1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgYmxhY2s7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBoZWlnaHQ6IDRyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY3VycmVudEdhbWUgZnJvbSAnLi9sb2NhbHN0b3JhZ2UvY3VycmVudC1nYW1lLmpzJztcblxuY29uc3QgYXBpUGF0aEluZm8gPSAoKSA9PiB7XG4gIGNvbnN0IGFwaSA9IHtcbiAgICBiYXNlVXJsOiAnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvJyxcbiAgICBnYW1lczogJ2dhbWVzLycsXG4gICAgaWQ6IGAke2N1cnJlbnRHYW1lLmZldGNoQ3VycmVudEdhbWUoKS5nYW1lSWR9L2AsXG4gICAgc2NvcmVzOiAnc2NvcmVzLycsXG4gIH07XG4gIHJldHVybiBhcGk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcGlQYXRoSW5mbzsiLCJpbXBvcnQgYXBpUGF0aEluZm8gZnJvbSAnLi9hcGkuanMnO1xuXG5jb25zdCBjcmVhdGVHYW1lID0gYXN5bmMgKGdhbWVOYW1lKSA9PiB7XG4gIGNvbnN0IHsgYmFzZVVybCwgZ2FtZXMgfSA9IGFwaVBhdGhJbmZvKCk7XG4gIGNvbnN0IHBhdGggPSBgJHtiYXNlVXJsfSR7Z2FtZXN9YDtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwYXRoLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoXG4gICAgICB7XG4gICAgICAgIG5hbWU6IGdhbWVOYW1lLFxuICAgICAgfSxcbiAgICApLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGdhbWVJZCA9IHJlc3VsdHMucmVzdWx0LnNwbGl0KCcgJylbM107XG4gIHJldHVybiB7IGdhbWVOYW1lLCBnYW1lSWQgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdhbWU7IiwiaW1wb3J0IGdhbWVzRGF0YSBmcm9tICcuL2xvY2Fsc3RvcmFnZS9nYW1lcy1kYXRhLmpzJztcbmltcG9ydCBjdXJyZW50R2FtZSBmcm9tICcuL2xvY2Fsc3RvcmFnZS9jdXJyZW50LWdhbWUuanMnO1xuaW1wb3J0IHJlY2VudFNjb3JlcyBmcm9tICcuL3JlY2VudF9zY29yZXMuanMnO1xuaW1wb3J0IGxvYWRTY29yZXMgZnJvbSAnLi9sb2FkX3Njb3Jlcy5qcyc7XG5cbmNvbnN0IGV2ZW50cyA9ICgpID0+IHtcbiAgY29uc3Qgc2NvcmVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3Jlcy1saXN0Jyk7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xuICBjb25zdCBteUdhbWVzTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teS1nYW1lcy1saW5rJyk7XG4gIGNvbnN0IG15R2FtZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXktZ2FtZXMtY29udGFpbmVyJyk7XG4gIGNvbnN0IG1haW5UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXRpdGxlJyk7XG4gIGNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZC1jb250YWluZXInKTtcbiAgY29uc3QgZGlzcGxheWVkR2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWdhbWUnKTtcblxuICBteUdhbWVzTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtYWluVGl0bGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBncmlkQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZGlzcGxheWVkR2FtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGhvbWUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbXlHYW1lc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIG15R2FtZXNMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xuXG4gIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbWFpblRpdGxlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGdyaWRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgICBkaXNwbGF5ZWRHYW1lLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGhvbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBteUdhbWVzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbXlHYW1lc0xpbmsuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH0pO1xuXG4gIGlmIChnYW1lc0RhdGEuZmV0Y2hHYW1lcygpLmxlbmd0aCA+IDApIHtcbiAgICBnYW1lc0RhdGEuZmV0Y2hHYW1lcygpLmZvckVhY2goKGdhbWUpID0+IHtcbiAgICAgIGlmIChnYW1lLmdhbWVJZCA9PT0gY3VycmVudEdhbWUuZmV0Y2hDdXJyZW50R2FtZSgpLmdhbWVJZCkge1xuICAgICAgICBkaXNwbGF5ZWRHYW1lLmlubmVySFRNTCA9IGdhbWUuZ2FtZU5hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5ZWRHYW1lLmlubmVySFRNTCA9ICcnO1xuICAgIHNjb3Jlc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIGlmIChnYW1lc0RhdGEuZmV0Y2hHYW1lcygpLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGdhbWUgPSBnYW1lc0RhdGEuZmV0Y2hHYW1lcygpWzBdO1xuICAgIGN1cnJlbnRHYW1lLnNldEN1cnJlbnRHYW1lKGdhbWUuZ2FtZUlkKTtcbiAgICBkaXNwbGF5ZWRHYW1lLmlubmVySFRNTCA9IGdhbWUuZ2FtZU5hbWU7XG4gICAgbG9hZFNjb3JlcyhzY29yZXNDb250YWluZXIsIHJlY2VudFNjb3Jlcyk7XG4gIH1cblxuICBpZiAoZ2FtZXNEYXRhLmZldGNoR2FtZXMoKS5sZW5ndGggPT09IDApIHtcbiAgICBjdXJyZW50R2FtZS5zZXRDdXJyZW50R2FtZShudWxsKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzOyIsImltcG9ydCBnYW1lc0RhdGEgZnJvbSAnLi9sb2NhbHN0b3JhZ2UvZ2FtZXMtZGF0YS5qcyc7XG5pbXBvcnQgY3VycmVudEdhbWUgZnJvbSAnLi9sb2NhbHN0b3JhZ2UvY3VycmVudC1nYW1lLmpzJztcbmltcG9ydCBjcmVhdGVHYW1lIGZyb20gJy4vY3JlYXRlX2dhbWUuanMnO1xuaW1wb3J0IHJlY2VudFNjb3JlcyBmcm9tICcuL3JlY2VudF9zY29yZXMuanMnO1xuaW1wb3J0IGxvYWRTY29yZXMgZnJvbSAnLi9sb2FkX3Njb3Jlcy5qcyc7XG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vZXZlbnRzLmpzJztcblxuY29uc3QgbXlHYW1lc1RlbXBsYXRlID0gKCkgPT4ge1xuICBjb25zdCBteUdhbWVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15LWdhbWVzLWNvbnRhaW5lcicpO1xuICBteUdhbWVzQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiZ2FtZS1tZW51LWNvbnRhaW5lclwiPlxuICAgICAgPGgxIGlkPVwic2VsZWN0LWdhbWVcIj5DdXJyZW50IEdhbWU6PC9oMT5cbiAgICAgIDxzZWxlY3QgY2xhc3M9XCJnYW1lLW1lbnVcIj48L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibXktZ2FtZXMtc2VjdGlvblwiPlxuICAgICAgPGZvcm0gY2xhc3M9XCJuZXctZ2FtZS1mb3JtXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQWRkIGEgbmV3IGdhbWUuLi5cIiBpZD1cImlucHV0LW5ldy1nYW1lXCIgdmFsdWU9XCJcIi8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwic3VibWl0LW5ldy1nYW1lXCI+QWRkIEdhbWU8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgYDtcbiAgY29uc3QgZ2FtZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1tZW51Jyk7XG4gIGdhbWVzRGF0YS5mZXRjaEdhbWVzKCkuZm9yRWFjaCgoZ2FtZSkgPT4ge1xuICAgIGNvbnN0IGdhbWVPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBnYW1lT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2dhbWUtb3B0aW9uJyk7XG4gICAgZ2FtZU9wdGlvbi5pZCA9IGdhbWUuZ2FtZUlkO1xuICAgIGdhbWVPcHRpb24uaW5uZXJIVE1MID0gZ2FtZS5nYW1lTmFtZTtcbiAgICBpZiAoZ2FtZS5nYW1lSWQgPT09IGN1cnJlbnRHYW1lLmZldGNoQ3VycmVudEdhbWUoKS5nYW1lSWQpIHtcbiAgICAgIGdhbWVPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBnYW1lTWVudS5hcHBlbmRDaGlsZChnYW1lT3B0aW9uKTtcbiAgfSk7XG5cbiAgZ2FtZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGNvbnN0IHNjb3Jlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZXMtbGlzdCcpO1xuICAgIGNvbnN0IHNlbGVjdGVkR2FtZSA9IGdhbWVNZW51Lm9wdGlvbnNbZ2FtZU1lbnUuc2VsZWN0ZWRJbmRleF07XG4gICAgY3VycmVudEdhbWUuc2V0Q3VycmVudEdhbWUoc2VsZWN0ZWRHYW1lLmlkKTtcbiAgICBzY29yZXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgbG9hZFNjb3JlcyhzY29yZXNDb250YWluZXIsIHJlY2VudFNjb3Jlcyk7XG4gICAgZXZlbnRzKCk7XG4gIH0pO1xuXG4gIGNvbnN0IG15R2FtZXNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15LWdhbWVzLXNlY3Rpb24nKTtcbiAgY29uc3QgZ2FtZXNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgZ2FtZXNMaXN0LmNsYXNzTGlzdC5hZGQoJ2dhbWVzLWxpc3QtY29udGFpbmVyJyk7XG4gIGdhbWVzRGF0YS5mZXRjaEdhbWVzKCkuZm9yRWFjaCgoZ2FtZSkgPT4ge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdnYW1lLWxpc3QtaXRlbScpO1xuICAgIGxpc3RJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgIDxwPiR7Z2FtZS5nYW1lTmFtZX08L3A+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImRlbGV0ZS1nYW1lXCIgaWQ9XCIke2dhbWUuZ2FtZUlkfVwiPmRlbGV0ZTwvYnV0dG9uPlxuICAgIGA7XG4gICAgZ2FtZXNMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgfSk7XG4gIG15R2FtZXNTZWN0aW9uLmFwcGVuZENoaWxkKGdhbWVzTGlzdCk7XG4gIG15R2FtZXNTZWN0aW9uLmlubmVySFRNTCArPSBgXG4gICAgPGgxIGNsYXNzPVwiZ2FtZXMtbGlzdC10aXRsZVwiPkdhbWVzPC9oMT5cbiAgYDtcblxuICBjb25zdCBuZXdHYW1lRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctZ2FtZS1mb3JtJyk7XG4gIGNvbnN0IGlucHV0TmV3R2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dC1uZXctZ2FtZScpO1xuICBuZXdHYW1lRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBuZXdHYW1lID0gaW5wdXROZXdHYW1lLnZhbHVlLnRyaW0oKTtcbiAgICBjb25zdCB7IGdhbWVOYW1lLCBnYW1lSWQgfSA9IGF3YWl0IGNyZWF0ZUdhbWUobmV3R2FtZSk7XG4gICAgZ2FtZXNEYXRhLnVwZGF0ZUdhbWVzKHsgZ2FtZU5hbWUsIGdhbWVJZCB9KTtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnZ2FtZS1saXN0LWl0ZW0nKTtcbiAgICBsaXN0SXRlbS5pbm5lckhUTUwgPSBgXG4gICAgICA8cD4ke2dhbWVOYW1lfTwvcD5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZGVsZXRlLWdhbWVcIiBpZD1cIiR7Z2FtZUlkfVwiPmRlbGV0ZTwvYnV0dG9uPlxuICAgIGA7XG4gICAgbXlHYW1lc1RlbXBsYXRlKCk7XG4gICAgZXZlbnRzKCk7XG4gICAgbmV3R2FtZUZvcm0ucmVzZXQoKTtcbiAgfSk7XG5cbiAgY29uc3QgZGVsZXRlR2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtZ2FtZScpO1xuICBkZWxldGVHYW1lLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGdhbWVzID0gZ2FtZXNEYXRhLmZldGNoR2FtZXMoKTtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ0dhbWVzID0gZ2FtZXMuZmlsdGVyKChnYW1lKSA9PiBnYW1lLmdhbWVJZCAhPT0gYnRuLmlkKTtcbiAgICAgIGdhbWVzRGF0YS5zZXRHYW1lcyhyZW1haW5pbmdHYW1lcyk7XG4gICAgICBldmVudHMoKTtcbiAgICAgIG15R2FtZXNUZW1wbGF0ZSgpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGVudGVyR2FtZVBvcHVwID0gKCkgPT4ge1xuICBjb25zdCBwb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMtY29udGFpbmVyJyk7XG4gIHBvcHVwQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8Zm9ybSBjbGFzcz1cImVudGVyLWdhbWUtcG9wdXBcIj5cbiAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgPGxlZ2VuZD5XZWxjb21lIHRvIExlYWRlcmJvYXJkPC9sZWdlbmQ+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZ2FtZSBuYW1lXCIgaWQ9XCJnYW1lLWlucHV0XCIgdmFsdWU9XCJcIiAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwic3VibWl0LWdhbWVcIj5PSzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgPC9mb3JtPlxuICBgO1xuICBwb3B1cENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgY29uc3QgZ2FtZUlucHV0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbnRlci1nYW1lLXBvcHVwJyk7XG4gIGdhbWVJbnB1dEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZ2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lLWlucHV0Jyk7XG4gICAgY29uc3QgeyBnYW1lTmFtZSwgZ2FtZUlkIH0gPSBhd2FpdCBjcmVhdGVHYW1lKGdhbWUudmFsdWUpO1xuICAgIGdhbWVzRGF0YS51cGRhdGVHYW1lcyh7IGdhbWVOYW1lLCBnYW1lSWQgfSk7XG4gICAgY3VycmVudEdhbWUuc2V0Q3VycmVudEdhbWUoZ2FtZUlkKTtcbiAgICBwb3B1cENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBteUdhbWVzVGVtcGxhdGUsIGVudGVyR2FtZVBvcHVwIH07IiwiY29uc3QgbG9hZFNjb3JlcyA9IGFzeW5jIChodG1sQ29udGFpbmVyLCBzY29yZXMpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHNjb3JlcygpO1xuICBkYXRhLmZvckVhY2goKHNjb3JlKSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gYCR7c2NvcmUudXNlcn06ICR7c2NvcmUuc2NvcmV9YDtcbiAgICBodG1sQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkU2NvcmVzOyIsImNsYXNzIGN1cnJlbnRHYW1lIHtcbiAgc3RhdGljIGZldGNoQ3VycmVudEdhbWUoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50LWdhbWUnKSA9PT0gbnVsbCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnQtZ2FtZScsIEpTT04uc3RyaW5naWZ5KHt9KSk7XG4gICAgfVxuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50LWdhbWUnKSk7XG4gIH1cblxuICBzdGF0aWMgc2V0Q3VycmVudEdhbWUoaWQpIHtcbiAgICBpZiAoaWQpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRHYW1lID0gdGhpcy5mZXRjaEN1cnJlbnRHYW1lKCk7XG4gICAgICBjdXJyZW50R2FtZS5nYW1lSWQgPSBpZDtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50LWdhbWUnLCBKU09OLnN0cmluZ2lmeShjdXJyZW50R2FtZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudC1nYW1lJywgSlNPTi5zdHJpbmdpZnkoe30pKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3VycmVudEdhbWU7IiwiY2xhc3MgZ2FtZXNEYXRhIHtcbiAgc3RhdGljIGZldGNoR2FtZXMoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lcycpID09PSBudWxsKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZXMnLCBKU09OLnN0cmluZ2lmeShbXSkpO1xuICAgIH1cbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZXMnKSk7XG4gIH1cblxuICBzdGF0aWMgc2V0R2FtZXMoZ2FtZXMpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZXMnLCBKU09OLnN0cmluZ2lmeShnYW1lcykpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZUdhbWVzKGdhbWUpIHtcbiAgICBjb25zdCBnYW1lcyA9IHRoaXMuZmV0Y2hHYW1lcygpO1xuICAgIGdhbWVzLnB1c2goZ2FtZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dhbWVzJywgSlNPTi5zdHJpbmdpZnkoZ2FtZXMpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnYW1lc0RhdGE7IiwiaW1wb3J0IGFwaVBhdGhJbmZvIGZyb20gJy4vYXBpLmpzJztcblxuY29uc3QgcmVjZW50U2NvcmVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB7XG4gICAgYmFzZVVybCwgZ2FtZXMsIGlkLCBzY29yZXMsXG4gIH0gPSBhcGlQYXRoSW5mbygpO1xuICBjb25zdCBwYXRoID0gYCR7YmFzZVVybH0ke2dhbWVzfSR7aWR9JHtzY29yZXN9YDtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKHBhdGgpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRhdGEuanNvbigpO1xuICBjb25zdCB7IHJlc3VsdCB9ID0gcmVzcG9uc2U7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWNlbnRTY29yZXM7IiwiaW1wb3J0IHVwbG9hZFNjb3JlIGZyb20gJy4vdXBsb2FkX3Njb3Jlcy5qcyc7XG5cbmNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUtaW5wdXQnKTtcbiAgY29uc3Qgc2NvcmVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY29yZS1pbnB1dCcpO1xuICBpZiAobmFtZUlucHV0LnZhbHVlICE9PSAnJyAmJiBzY29yZUlucHV0LnZhbHVlICE9PSAnJykge1xuICAgIHVwbG9hZFNjb3JlKG5hbWVJbnB1dC52YWx1ZSwgTnVtYmVyKHNjb3JlSW5wdXQudmFsdWUpKTtcbiAgICBuYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgICBzY29yZUlucHV0LnZhbHVlID0gJyc7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN1Ym1pdDtcbiIsImltcG9ydCBhcGlQYXRoSW5mbyBmcm9tICcuL2FwaS5qcyc7XG5cbmNvbnN0IHVwbG9hZFNjb3JlID0gYXN5bmMgKHVzZXIsIHNjb3JlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBiYXNlVXJsLCBnYW1lcywgaWQsIHNjb3JlcyxcbiAgfSA9IGFwaVBhdGhJbmZvKCk7XG4gIGNvbnN0IHBhdGggPSBgJHtiYXNlVXJsfSR7Z2FtZXN9JHtpZH0ke3Njb3Jlc31gO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHBhdGgsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB1c2VyLFxuICAgICAgc2NvcmUsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcbiAgYXdhaXQgcmVzcG9uc2UuanNvbigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBsb2FkU2NvcmU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vbW9kdWxlcy9ldmVudHMuanMnO1xuaW1wb3J0IHsgbXlHYW1lc1RlbXBsYXRlLCBlbnRlckdhbWVQb3B1cCB9IGZyb20gJy4vbW9kdWxlcy9odG1sLXRlbXBsYXRlcy5qcyc7XG5pbXBvcnQgY3VycmVudEdhbWUgZnJvbSAnLi9tb2R1bGVzL2xvY2Fsc3RvcmFnZS9jdXJyZW50LWdhbWUuanMnO1xuaW1wb3J0IHJlY2VudFNjb3JlcyBmcm9tICcuL21vZHVsZXMvcmVjZW50X3Njb3Jlcy5qcyc7XG5pbXBvcnQgbG9hZFNjb3JlcyBmcm9tICcuL21vZHVsZXMvbG9hZF9zY29yZXMuanMnO1xuaW1wb3J0IHN1Ym1pdCBmcm9tICcuL21vZHVsZXMvc3VibWl0LmpzJztcblxuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1zY29yZScpO1xuY29uc3QgcmVmcmVzaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWZyZXNoLWJ1dHRvbicpO1xuY29uc3Qgc2NvcmVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3Jlcy1saXN0Jyk7XG5cbmV2ZW50cygpO1xuXG5teUdhbWVzVGVtcGxhdGUoKTtcblxuaWYgKGN1cnJlbnRHYW1lLmZldGNoQ3VycmVudEdhbWUoKS5nYW1lSWQpIHtcbiAgbG9hZFNjb3JlcyhzY29yZXNDb250YWluZXIsIHJlY2VudFNjb3Jlcyk7XG59IGVsc2Uge1xuICBlbnRlckdhbWVQb3B1cCgpO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lcycpID09PSBudWxsKSB7XG4gICAgZW50ZXJHYW1lUG9wdXAoKTtcbiAgfVxufSk7XG5cbnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgc3VibWl0KCk7XG59KTtcblxucmVmcmVzaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgc2NvcmVzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBsb2FkU2NvcmVzKHNjb3Jlc0NvbnRhaW5lciwgcmVjZW50U2NvcmVzKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==