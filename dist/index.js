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
  const currentGameId = _localstorage_current_game_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchCurrentGame().gameId;
  const api = {
    baseUrl: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/',
    games: 'games/',
    id: `${currentGameId}/`,
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
/* harmony export */   "submitInitialGame": () => (/* binding */ submitInitialGame),
/* harmony export */   "deleteGame": () => (/* binding */ deleteGame),
/* harmony export */   "addGame": () => (/* binding */ addGame),
/* harmony export */   "createGamesList": () => (/* binding */ createGamesList),
/* harmony export */   "createGamesMenu": () => (/* binding */ createGamesMenu),
/* harmony export */   "selectCurrentGame": () => (/* binding */ selectCurrentGame),
/* harmony export */   "navigation": () => (/* binding */ navigation),
/* harmony export */   "setHomeGame": () => (/* binding */ setHomeGame),
/* harmony export */   "addScore": () => (/* binding */ addScore)
/* harmony export */ });
/* harmony import */ var _localstorage_games_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage/games-data.js */ "./src/modules/localstorage/games-data.js");
/* harmony import */ var _localstorage_current_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage/current-game.js */ "./src/modules/localstorage/current-game.js");
/* harmony import */ var _create_game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create_game.js */ "./src/modules/create_game.js");
/* harmony import */ var _recent_scores_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recent_scores.js */ "./src/modules/recent_scores.js");
/* harmony import */ var _load_scores_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./load_scores.js */ "./src/modules/load_scores.js");
/* harmony import */ var _post_score_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post_score.js */ "./src/modules/post_score.js");







const submitInitialGame = (htmlElements, container) => {
  const { form, gameInput } = htmlElements;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (gameInput.value !== '') {
      const { gameName, gameId } = await (0,_create_game_js__WEBPACK_IMPORTED_MODULE_2__["default"])(gameInput.value);
      _localstorage_games_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateGames({ gameName, gameId });
      _localstorage_current_game_js__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentGame(gameId);
      container.style.display = 'none';
      window.location.reload();
    }
  });
};

const addScore = () => {
  const addScoreForm = document.querySelector('.add-score-form');
  const refreshBtn = document.querySelector('#refresh-button');
  const scoresContainer = document.querySelector('.scores-list');

  addScoreForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('#name-input');
    const scoreInput = document.querySelector('#score-input');
    if (nameInput.value !== '' && scoreInput.value !== '') {
      (0,_post_score_js__WEBPACK_IMPORTED_MODULE_5__["default"])(nameInput.value, Number(scoreInput.value));
      nameInput.value = '';
      scoreInput.value = '';
    }
  });

  refreshBtn.addEventListener('click', () => {
    if (_localstorage_current_game_js__WEBPACK_IMPORTED_MODULE_1__["default"].fetchCurrentGame().gameId) {
      scoresContainer.innerHTML = '';
      (0,_load_scores_js__WEBPACK_IMPORTED_MODULE_4__["default"])(scoresContainer, _recent_scores_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
    }
  });
};

const createGamesMenu = (games, current, container) => {
  games.forEach((game) => {
    const gameOption = document.createElement('option');
    gameOption.classList.add('game-option');
    gameOption.id = game.gameId;
    gameOption.innerHTML = game.gameName;
    if (game.gameId === current.gameId) {
      gameOption.selected = true;
    }
    container.appendChild(gameOption);
  });
};

const createGamesList = (games, container) => {
  games.forEach((game) => {
    const listItem = document.createElement('li');
    listItem.classList.add('game-list-item');
    listItem.innerHTML = `
      <p>${game.gameName}</p>
      <button type="button" class="delete-game" id="${game.gameId}">delete</button>
    `;
    container.appendChild(listItem);
  });
};

const setHomeGame = () => {
  const displayedGame = document.querySelector('.current-game');
  const scoresContainer = document.querySelector('.scores-list');

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
    (0,_load_scores_js__WEBPACK_IMPORTED_MODULE_4__["default"])(scoresContainer, _recent_scores_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
  }

  if (_localstorage_games_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchGames().length === 0) {
    _localstorage_current_game_js__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentGame(null);
  }
};

const addGame = (htmlElements, rerender) => {
  const [form, gameInput] = htmlElements;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newGame = gameInput.value.trim();
    const { gameName, gameId } = await (0,_create_game_js__WEBPACK_IMPORTED_MODULE_2__["default"])(newGame);
    _localstorage_games_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateGames({ gameName, gameId });
    rerender();
    setHomeGame();
    form.reset();
  });
};

const selectCurrentGame = (menu) => {
  menu.addEventListener('change', () => {
    const scoresContainer = document.querySelector('.scores-list');
    const selectedGame = menu.options[menu.selectedIndex];
    _localstorage_current_game_js__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentGame(selectedGame.id);
    scoresContainer.innerHTML = '';
    (0,_load_scores_js__WEBPACK_IMPORTED_MODULE_4__["default"])(scoresContainer, _recent_scores_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
    setHomeGame();
  });
};

const deleteGame = (deleteBtns, rerender) => {
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const games = _localstorage_games_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchGames();
      const remainingGames = games.filter((game) => game.gameId !== btn.id);
      _localstorage_games_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].setGames(remainingGames);
      setHomeGame();
      rerender();
    });
  });
};

const navigation = () => {
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
};



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
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.js */ "./src/modules/events.js");




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
  _events_js__WEBPACK_IMPORTED_MODULE_2__.createGamesMenu(_localstorage_games_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchGames(), _localstorage_current_game_js__WEBPACK_IMPORTED_MODULE_1__["default"].fetchCurrentGame(), gameMenu);
  _events_js__WEBPACK_IMPORTED_MODULE_2__.selectCurrentGame(gameMenu);

  const myGamesSection = document.querySelector('.my-games-section');
  const gamesList = document.createElement('ul');
  gamesList.classList.add('games-list-container');
  _events_js__WEBPACK_IMPORTED_MODULE_2__.createGamesList(_localstorage_games_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchGames(), gamesList);
  myGamesSection.appendChild(gamesList);

  myGamesSection.innerHTML += `
    <h1 class="games-list-title">Games</h1>
  `;

  const newGameForm = document.querySelector('.new-game-form');
  const inputNewGame = document.querySelector('#input-new-game');
  _events_js__WEBPACK_IMPORTED_MODULE_2__.addGame([newGameForm, inputNewGame], myGamesTemplate);

  const deleteButtons = document.querySelectorAll('.delete-game');
  _events_js__WEBPACK_IMPORTED_MODULE_2__.deleteGame(deleteButtons, myGamesTemplate);
};

const enterGamePopup = (container) => {
  container.innerHTML = `
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
  container.style.display = 'block';
  const gameInputForm = document.querySelector('.enter-game-popup');
  const game = document.querySelector('#game-input');
  const elements = { form: gameInputForm, gameInput: game };
  _events_js__WEBPACK_IMPORTED_MODULE_2__.submitInitialGame(elements, container);
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

/***/ "./src/modules/post_score.js":
/*!***********************************!*\
  !*** ./src/modules/post_score.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");


const postScore = async (user, score) => {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postScore);

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







const popupContainer = document.querySelector('.popups-container');

(0,_modules_events_js__WEBPACK_IMPORTED_MODULE_1__.navigation)();

(0,_modules_events_js__WEBPACK_IMPORTED_MODULE_1__.setHomeGame)();

(0,_modules_events_js__WEBPACK_IMPORTED_MODULE_1__.addScore)();

(0,_modules_html_templates_js__WEBPACK_IMPORTED_MODULE_2__.myGamesTemplate)();

if (_modules_localstorage_current_game_js__WEBPACK_IMPORTED_MODULE_3__["default"].fetchCurrentGame().gameId) {
  const scoresContainer = document.querySelector('.scores-list');
  (0,_modules_load_scores_js__WEBPACK_IMPORTED_MODULE_5__["default"])(scoresContainer, _modules_recent_scores_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
} else {
  (0,_modules_html_templates_js__WEBPACK_IMPORTED_MODULE_2__.enterGamePopup)(popupContainer);
}

window.addEventListener('load', () => {
  if (localStorage.getItem('games') === null) {
    (0,_modules_html_templates_js__WEBPACK_IMPORTED_MODULE_2__.enterGamePopup)(popupContainer);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUss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OztVQ2IzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnFCO0FBQ21EO0FBQ007QUFDYjtBQUNYO0FBQ0o7O0FBRWxEOztBQUVBLDhEQUFVOztBQUVWLCtEQUFXOztBQUVYLDREQUFROztBQUVSLDJFQUFlOztBQUVmLElBQUksOEZBQTRCO0FBQ2hDO0FBQ0EsRUFBRSxtRUFBVSxrQkFBa0IsaUVBQVk7QUFDMUMsRUFBRTtBQUNGLEVBQUUsMEVBQWM7QUFDaEI7O0FBRUE7QUFDQTtBQUNBLElBQUksMEVBQWM7QUFDbEI7QUFDQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlcy9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlcy9jcmVhdGVfZ2FtZS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL2h0bWwtdGVtcGxhdGVzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvbG9hZF9zY29yZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlcy9sb2NhbHN0b3JhZ2UvY3VycmVudC1nYW1lLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvbG9jYWxzdG9yYWdlL2dhbWVzLWRhdGEuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlcy9wb3N0X3Njb3JlLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvcmVjZW50X3Njb3Jlcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6XFxyXFxuICAgIGxpbmVhci1ncmFkaWVudChyZ2JhKDE5MiwgNTIsIDEwNCwgMC4zNyksIHJnYmEoMTgzLCA3NywgMTE1LCAwLjUpKSxcXHJcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtjeWFuO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGgxIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tdGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6ICdKb2NrZXkgT25lJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDIuN3JlbTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIHRleHQtc2hhZG93OiAwLjRyZW0gMC4ycmVtIDAuNHJlbSB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubXktZ2FtZXMtbGluayB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnSm9ja2V5IE9uZScsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgcGFkZGluZy1sZWZ0OiA4cmVtO1xcclxcbiAgbWFyZ2luLXRvcDogN3JlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC1nYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDNyZW07XFxyXFxuICBjb2xvcjogY3lhbjtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5teS1nYW1lcy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cHMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMjQsIDE4LCAwLjUpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuNXJlbSk7XFxyXFxufVxcclxcblxcclxcbi5lbnRlci1nYW1lLXBvcHVwIHtcXHJcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgcGFkZGluZzogMXJlbSAxcmVtIDNyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxubGVnZW5kIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5maWVsZHNldCBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2dhbWUtaW5wdXQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDAuM3JlbTtcXHJcXG4gIGJvcmRlcjogcmdiYSgyNiwgMjQsIDE4LCAwLjUpIHNvbGlkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LWdhbWUge1xcclxcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQtZ2FtZTphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIHBhZGRpbmctbGVmdDogN2VtO1xcclxcbiAgZ3JpZC1nYXA6IDhyZW07XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBmb250LXNpemU6IDMuNXJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVjZW50LXNjb3Jlcy10aXRsZSxcXHJcXG4jYWRkLXNjb3JlLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjZW50LXNjb3Jlcy1oZWFkaW5nIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB3aWR0aDogODUlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVhZGVyYm9hcmQtYnV0dG9ucyB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTdlYjg7XFxyXFxufVxcclxcblxcclxcbi5sZWFkZXJib2FyZC1idXR0b25zOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODYsIDIzMywgMTIzLCAwLjcyNik7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5sZWFkZXJib2FyZC1idXR0b25zOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxyXFxufVxcclxcblxcclxcbiNyZWZyZXNoLWJ1dHRvbiB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zY29yZXMtbGlzdCB7XFxyXFxuICB3aWR0aDogODMlO1xcclxcbiAgaGVpZ2h0OiA2M3ZoO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW47XFxyXFxufVxcclxcblxcclxcbi5zY29yZXMtbGlzdCBsaSB7XFxyXFxuICBwYWRkaW5nOiAwLjVlbSAwLjJlbTtcXHJcXG4gIGJvcmRlci1sZWZ0OiAwLjNyZW0gc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC44cmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3Jlcy1saXN0IGxpOm50aC1jaGlsZChvZGQpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVzLWxpc3QgbGk6bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBtYXJnaW4tdG9wOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbmFtZS1pbnB1dCxcXHJcXG4jc2NvcmUtaW5wdXQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAwLjNlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCByZ2IoMTksIDEzNCwgMTI5KTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMge1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDAuOHJlbSBjeWFuO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LXNjb3JlIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1tZW51LWNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlbGVjdC1nYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XFxyXFxuICBjb2xvcjogI2ZmODc0OTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtbWVudSB7XFxyXFxuICB3aWR0aDogMTdyZW07XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1N2ViODtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVzLWxpc3QtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5teS1nYW1lcy1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1nYW1lLWZvcm0ge1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIG1hcmdpbjogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5wdXQtbmV3LWdhbWUge1xcclxcbiAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LW5ldy1nYW1lIHtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LW5ldy1nYW1lOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTdlYjg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQtbmV3LWdhbWU6YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVzLWxpc3QtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIHdpZHRoOiA0NSU7XFxyXFxuICBoZWlnaHQ6IDU1dmg7XFxyXFxuICBib3JkZXItdG9wOiBzb2xpZCByZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC4zcmVtKTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWxpc3QtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgb3V0bGluZTogcmdiKDE5LCAxMzQsIDEyOSkgaW5zZXQ7XFxyXFxuICBwYWRkaW5nOiAwLjhyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4YjhiO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1saXN0LWl0ZW0gcCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1nYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIGJsYWNrO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkI7OzJDQUVxQztF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O0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsU0FBUztFQUNULFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6XFxyXFxuICAgIGxpbmVhci1ncmFkaWVudChyZ2JhKDE5MiwgNTIsIDEwNCwgMC4zNyksIHJnYmEoMTgzLCA3NywgMTE1LCAwLjUpKSxcXHJcXG4gICAgdXJsKC4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZyk7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbm5hdiBoMSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYWluLXRpdGxlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnSm9ja2V5IE9uZScsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAyLjdyZW07XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICB0ZXh0LXNoYWRvdzogMC40cmVtIDAuMnJlbSAwLjRyZW0gd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5ob21lIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm15LWdhbWVzLWxpbmsge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBmb250LWZhbWlseTogJ0pvY2tleSBPbmUnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogOHJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDdyZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnQtZ2FtZSB7XFxyXFxuICBmb250LXNpemU6IDIuM3JlbTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzcmVtO1xcclxcbiAgY29sb3I6IGN5YW47XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubXktZ2FtZXMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDI0LCAxOCwgMC41KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigwLjVyZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4uZW50ZXItZ2FtZS1wb3B1cCB7XFxyXFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAzcmVtIDFyZW07XFxyXFxufVxcclxcblxcclxcbmxlZ2VuZCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuZmllbGRzZXQgZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNnYW1lLWlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjNyZW07XFxyXFxuICBib3JkZXI6IHJnYmEoMjYsIDI0LCAxOCwgMC41KSBzb2xpZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1nYW1lIHtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LWdhbWU6YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDdlbTtcXHJcXG4gIGdyaWQtZ2FwOiA4cmVtO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgZm9udC1zaXplOiAzLjVyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuI3JlY2VudC1zY29yZXMtdGl0bGUsXFxyXFxuI2FkZC1zY29yZS10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2VudC1zY29yZXMtaGVhZGluZyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlYWRlcmJvYXJkLWJ1dHRvbnMge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjZyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU3ZWI4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGVhZGVyYm9hcmQtYnV0dG9uczpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg2LCAyMzMsIDEyMywgMC43MjYpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVhZGVyYm9hcmQtYnV0dG9uczphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVmcmVzaC1idXR0b24ge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVzLWxpc3Qge1xcclxcbiAgd2lkdGg6IDgzJTtcXHJcXG4gIGhlaWdodDogNjN2aDtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtjeWFuO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVzLWxpc3QgbGkge1xcclxcbiAgcGFkZGluZzogMC41ZW0gMC4yZW07XFxyXFxuICBib3JkZXItbGVmdDogMC4zcmVtIHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuOHJlbTtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5zY29yZXMtbGlzdCBsaTpudGgtY2hpbGQob2RkKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3Jlcy1saXN0IGxpOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgbWFyZ2luLXRvcDogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI25hbWUtaW5wdXQsXFxyXFxuI3Njb3JlLWlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcGFkZGluZzogMC4zZW07XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgcmdiKDE5LCAxMzQsIDEyOSk7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmZvY3VzIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAwLjhyZW0gY3lhbjtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1zY29yZSB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtbWVudS1jb250YWluZXIge1xcclxcbiAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNzZWxlY3QtZ2FtZSB7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC43cmVtO1xcclxcbiAgY29sb3I6ICNmZjg3NDk7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLW1lbnUge1xcclxcbiAgd2lkdGg6IDE3cmVtO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTdlYjg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lcy1saXN0LXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubXktZ2FtZXMtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5uZXctZ2FtZS1mb3JtIHtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBtYXJnaW46IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2lucHV0LW5ldy1nYW1lIHtcXHJcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1uZXctZ2FtZSB7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1uZXctZ2FtZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU3ZWI4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LW5ldy1nYW1lOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxyXFxufVxcclxcblxcclxcbi5nYW1lcy1saXN0LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICB3aWR0aDogNDUlO1xcclxcbiAgaGVpZ2h0OiA1NXZoO1xcclxcbiAgYm9yZGVyLXRvcDogc29saWQgcmVkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuM3JlbSk7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1saXN0LWl0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIG91dGxpbmU6IHJnYigxOSwgMTM0LCAxMjkpIGluc2V0O1xcclxcbiAgcGFkZGluZzogMC44cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGI4YjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtbGlzdC1pdGVtIHAge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtZ2FtZSB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCBibGFjaztcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGhlaWdodDogNHJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjdXJyZW50R2FtZSBmcm9tICcuL2xvY2Fsc3RvcmFnZS9jdXJyZW50LWdhbWUuanMnO1xuXG5jb25zdCBhcGlQYXRoSW5mbyA9ICgpID0+IHtcbiAgY29uc3QgY3VycmVudEdhbWVJZCA9IGN1cnJlbnRHYW1lLmZldGNoQ3VycmVudEdhbWUoKS5nYW1lSWQ7XG4gIGNvbnN0IGFwaSA9IHtcbiAgICBiYXNlVXJsOiAnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvJyxcbiAgICBnYW1lczogJ2dhbWVzLycsXG4gICAgaWQ6IGAke2N1cnJlbnRHYW1lSWR9L2AsXG4gICAgc2NvcmVzOiAnc2NvcmVzLycsXG4gIH07XG4gIHJldHVybiBhcGk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcGlQYXRoSW5mbzsiLCJpbXBvcnQgYXBpUGF0aEluZm8gZnJvbSAnLi9hcGkuanMnO1xuXG5jb25zdCBjcmVhdGVHYW1lID0gYXN5bmMgKGdhbWVOYW1lKSA9PiB7XG4gIGNvbnN0IHsgYmFzZVVybCwgZ2FtZXMgfSA9IGFwaVBhdGhJbmZvKCk7XG4gIGNvbnN0IHBhdGggPSBgJHtiYXNlVXJsfSR7Z2FtZXN9YDtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwYXRoLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoXG4gICAgICB7XG4gICAgICAgIG5hbWU6IGdhbWVOYW1lLFxuICAgICAgfSxcbiAgICApLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGdhbWVJZCA9IHJlc3VsdHMucmVzdWx0LnNwbGl0KCcgJylbM107XG4gIHJldHVybiB7IGdhbWVOYW1lLCBnYW1lSWQgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdhbWU7IiwiaW1wb3J0IGdhbWVzRGF0YSBmcm9tICcuL2xvY2Fsc3RvcmFnZS9nYW1lcy1kYXRhLmpzJztcbmltcG9ydCBjdXJyZW50R2FtZSBmcm9tICcuL2xvY2Fsc3RvcmFnZS9jdXJyZW50LWdhbWUuanMnO1xuaW1wb3J0IGNyZWF0ZUdhbWUgZnJvbSAnLi9jcmVhdGVfZ2FtZS5qcyc7XG5pbXBvcnQgcmVjZW50U2NvcmVzIGZyb20gJy4vcmVjZW50X3Njb3Jlcy5qcyc7XG5pbXBvcnQgbG9hZFNjb3JlcyBmcm9tICcuL2xvYWRfc2NvcmVzLmpzJztcbmltcG9ydCBwb3N0U2NvcmUgZnJvbSAnLi9wb3N0X3Njb3JlLmpzJztcblxuY29uc3Qgc3VibWl0SW5pdGlhbEdhbWUgPSAoaHRtbEVsZW1lbnRzLCBjb250YWluZXIpID0+IHtcbiAgY29uc3QgeyBmb3JtLCBnYW1lSW5wdXQgfSA9IGh0bWxFbGVtZW50cztcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZ2FtZUlucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgY29uc3QgeyBnYW1lTmFtZSwgZ2FtZUlkIH0gPSBhd2FpdCBjcmVhdGVHYW1lKGdhbWVJbnB1dC52YWx1ZSk7XG4gICAgICBnYW1lc0RhdGEudXBkYXRlR2FtZXMoeyBnYW1lTmFtZSwgZ2FtZUlkIH0pO1xuICAgICAgY3VycmVudEdhbWUuc2V0Q3VycmVudEdhbWUoZ2FtZUlkKTtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBhZGRTY29yZSA9ICgpID0+IHtcbiAgY29uc3QgYWRkU2NvcmVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1zY29yZS1mb3JtJyk7XG4gIGNvbnN0IHJlZnJlc2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVmcmVzaC1idXR0b24nKTtcbiAgY29uc3Qgc2NvcmVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3Jlcy1saXN0Jyk7XG5cbiAgYWRkU2NvcmVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lLWlucHV0Jyk7XG4gICAgY29uc3Qgc2NvcmVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY29yZS1pbnB1dCcpO1xuICAgIGlmIChuYW1lSW5wdXQudmFsdWUgIT09ICcnICYmIHNjb3JlSW5wdXQudmFsdWUgIT09ICcnKSB7XG4gICAgICBwb3N0U2NvcmUobmFtZUlucHV0LnZhbHVlLCBOdW1iZXIoc2NvcmVJbnB1dC52YWx1ZSkpO1xuICAgICAgbmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICBzY29yZUlucHV0LnZhbHVlID0gJyc7XG4gICAgfVxuICB9KTtcblxuICByZWZyZXNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChjdXJyZW50R2FtZS5mZXRjaEN1cnJlbnRHYW1lKCkuZ2FtZUlkKSB7XG4gICAgICBzY29yZXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICBsb2FkU2NvcmVzKHNjb3Jlc0NvbnRhaW5lciwgcmVjZW50U2NvcmVzKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlR2FtZXNNZW51ID0gKGdhbWVzLCBjdXJyZW50LCBjb250YWluZXIpID0+IHtcbiAgZ2FtZXMuZm9yRWFjaCgoZ2FtZSkgPT4ge1xuICAgIGNvbnN0IGdhbWVPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBnYW1lT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2dhbWUtb3B0aW9uJyk7XG4gICAgZ2FtZU9wdGlvbi5pZCA9IGdhbWUuZ2FtZUlkO1xuICAgIGdhbWVPcHRpb24uaW5uZXJIVE1MID0gZ2FtZS5nYW1lTmFtZTtcbiAgICBpZiAoZ2FtZS5nYW1lSWQgPT09IGN1cnJlbnQuZ2FtZUlkKSB7XG4gICAgICBnYW1lT3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVPcHRpb24pO1xuICB9KTtcbn07XG5cbmNvbnN0IGNyZWF0ZUdhbWVzTGlzdCA9IChnYW1lcywgY29udGFpbmVyKSA9PiB7XG4gIGdhbWVzLmZvckVhY2goKGdhbWUpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnZ2FtZS1saXN0LWl0ZW0nKTtcbiAgICBsaXN0SXRlbS5pbm5lckhUTUwgPSBgXG4gICAgICA8cD4ke2dhbWUuZ2FtZU5hbWV9PC9wPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJkZWxldGUtZ2FtZVwiIGlkPVwiJHtnYW1lLmdhbWVJZH1cIj5kZWxldGU8L2J1dHRvbj5cbiAgICBgO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIH0pO1xufTtcblxuY29uc3Qgc2V0SG9tZUdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXllZEdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1nYW1lJyk7XG4gIGNvbnN0IHNjb3Jlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZXMtbGlzdCcpO1xuXG4gIGlmIChnYW1lc0RhdGEuZmV0Y2hHYW1lcygpLmxlbmd0aCA+IDApIHtcbiAgICBnYW1lc0RhdGEuZmV0Y2hHYW1lcygpLmZvckVhY2goKGdhbWUpID0+IHtcbiAgICAgIGlmIChnYW1lLmdhbWVJZCA9PT0gY3VycmVudEdhbWUuZmV0Y2hDdXJyZW50R2FtZSgpLmdhbWVJZCkge1xuICAgICAgICBkaXNwbGF5ZWRHYW1lLmlubmVySFRNTCA9IGdhbWUuZ2FtZU5hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5ZWRHYW1lLmlubmVySFRNTCA9ICcnO1xuICAgIHNjb3Jlc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIGlmIChnYW1lc0RhdGEuZmV0Y2hHYW1lcygpLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGdhbWUgPSBnYW1lc0RhdGEuZmV0Y2hHYW1lcygpWzBdO1xuICAgIGN1cnJlbnRHYW1lLnNldEN1cnJlbnRHYW1lKGdhbWUuZ2FtZUlkKTtcbiAgICBkaXNwbGF5ZWRHYW1lLmlubmVySFRNTCA9IGdhbWUuZ2FtZU5hbWU7XG4gICAgbG9hZFNjb3JlcyhzY29yZXNDb250YWluZXIsIHJlY2VudFNjb3Jlcyk7XG4gIH1cblxuICBpZiAoZ2FtZXNEYXRhLmZldGNoR2FtZXMoKS5sZW5ndGggPT09IDApIHtcbiAgICBjdXJyZW50R2FtZS5zZXRDdXJyZW50R2FtZShudWxsKTtcbiAgfVxufTtcblxuY29uc3QgYWRkR2FtZSA9IChodG1sRWxlbWVudHMsIHJlcmVuZGVyKSA9PiB7XG4gIGNvbnN0IFtmb3JtLCBnYW1lSW5wdXRdID0gaHRtbEVsZW1lbnRzO1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5ld0dhbWUgPSBnYW1lSW5wdXQudmFsdWUudHJpbSgpO1xuICAgIGNvbnN0IHsgZ2FtZU5hbWUsIGdhbWVJZCB9ID0gYXdhaXQgY3JlYXRlR2FtZShuZXdHYW1lKTtcbiAgICBnYW1lc0RhdGEudXBkYXRlR2FtZXMoeyBnYW1lTmFtZSwgZ2FtZUlkIH0pO1xuICAgIHJlcmVuZGVyKCk7XG4gICAgc2V0SG9tZUdhbWUoKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gIH0pO1xufTtcblxuY29uc3Qgc2VsZWN0Q3VycmVudEdhbWUgPSAobWVudSkgPT4ge1xuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBjb25zdCBzY29yZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVzLWxpc3QnKTtcbiAgICBjb25zdCBzZWxlY3RlZEdhbWUgPSBtZW51Lm9wdGlvbnNbbWVudS5zZWxlY3RlZEluZGV4XTtcbiAgICBjdXJyZW50R2FtZS5zZXRDdXJyZW50R2FtZShzZWxlY3RlZEdhbWUuaWQpO1xuICAgIHNjb3Jlc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBsb2FkU2NvcmVzKHNjb3Jlc0NvbnRhaW5lciwgcmVjZW50U2NvcmVzKTtcbiAgICBzZXRIb21lR2FtZSgpO1xuICB9KTtcbn07XG5cbmNvbnN0IGRlbGV0ZUdhbWUgPSAoZGVsZXRlQnRucywgcmVyZW5kZXIpID0+IHtcbiAgZGVsZXRlQnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBnYW1lcyA9IGdhbWVzRGF0YS5mZXRjaEdhbWVzKCk7XG4gICAgICBjb25zdCByZW1haW5pbmdHYW1lcyA9IGdhbWVzLmZpbHRlcigoZ2FtZSkgPT4gZ2FtZS5nYW1lSWQgIT09IGJ0bi5pZCk7XG4gICAgICBnYW1lc0RhdGEuc2V0R2FtZXMocmVtYWluaW5nR2FtZXMpO1xuICAgICAgc2V0SG9tZUdhbWUoKTtcbiAgICAgIHJlcmVuZGVyKCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgbmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XG4gIGNvbnN0IG15R2FtZXNMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15LWdhbWVzLWxpbmsnKTtcbiAgY29uc3QgbXlHYW1lc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teS1nYW1lcy1jb250YWluZXInKTtcbiAgY29uc3QgbWFpblRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tdGl0bGUnKTtcbiAgY29uc3QgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkLWNvbnRhaW5lcicpO1xuICBjb25zdCBkaXNwbGF5ZWRHYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtZ2FtZScpO1xuXG4gIG15R2FtZXNMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1haW5UaXRsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGdyaWRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkaXNwbGF5ZWRHYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgaG9tZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBteUdhbWVzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgbXlHYW1lc0xpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSk7XG5cbiAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtYWluVGl0bGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZ3JpZENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgIGRpc3BsYXllZEdhbWUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgaG9tZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG15R2FtZXNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBteUdhbWVzTGluay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICBzdWJtaXRJbml0aWFsR2FtZSxcbiAgZGVsZXRlR2FtZSwgYWRkR2FtZSwgY3JlYXRlR2FtZXNMaXN0LFxuICBjcmVhdGVHYW1lc01lbnUsIHNlbGVjdEN1cnJlbnRHYW1lLCBuYXZpZ2F0aW9uLFxuICBzZXRIb21lR2FtZSwgYWRkU2NvcmUsXG59OyIsImltcG9ydCBnYW1lc0RhdGEgZnJvbSAnLi9sb2NhbHN0b3JhZ2UvZ2FtZXMtZGF0YS5qcyc7XG5pbXBvcnQgY3VycmVudEdhbWUgZnJvbSAnLi9sb2NhbHN0b3JhZ2UvY3VycmVudC1nYW1lLmpzJztcbmltcG9ydCAqIGFzIGV2ZW50cyBmcm9tICcuL2V2ZW50cy5qcyc7XG5cbmNvbnN0IG15R2FtZXNUZW1wbGF0ZSA9ICgpID0+IHtcbiAgY29uc3QgbXlHYW1lc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teS1nYW1lcy1jb250YWluZXInKTtcbiAgbXlHYW1lc0NvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImdhbWUtbWVudS1jb250YWluZXJcIj5cbiAgICAgIDxoMSBpZD1cInNlbGVjdC1nYW1lXCI+Q3VycmVudCBHYW1lOjwvaDE+XG4gICAgICA8c2VsZWN0IGNsYXNzPVwiZ2FtZS1tZW51XCI+PC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm15LWdhbWVzLXNlY3Rpb25cIj5cbiAgICAgIDxmb3JtIGNsYXNzPVwibmV3LWdhbWUtZm9ybVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFkZCBhIG5ldyBnYW1lLi4uXCIgaWQ9XCJpbnB1dC1uZXctZ2FtZVwiIHZhbHVlPVwiXCIvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cInN1Ym1pdC1uZXctZ2FtZVwiPkFkZCBHYW1lPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIGA7XG4gIGNvbnN0IGdhbWVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtbWVudScpO1xuICBldmVudHMuY3JlYXRlR2FtZXNNZW51KGdhbWVzRGF0YS5mZXRjaEdhbWVzKCksIGN1cnJlbnRHYW1lLmZldGNoQ3VycmVudEdhbWUoKSwgZ2FtZU1lbnUpO1xuICBldmVudHMuc2VsZWN0Q3VycmVudEdhbWUoZ2FtZU1lbnUpO1xuXG4gIGNvbnN0IG15R2FtZXNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15LWdhbWVzLXNlY3Rpb24nKTtcbiAgY29uc3QgZ2FtZXNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgZ2FtZXNMaXN0LmNsYXNzTGlzdC5hZGQoJ2dhbWVzLWxpc3QtY29udGFpbmVyJyk7XG4gIGV2ZW50cy5jcmVhdGVHYW1lc0xpc3QoZ2FtZXNEYXRhLmZldGNoR2FtZXMoKSwgZ2FtZXNMaXN0KTtcbiAgbXlHYW1lc1NlY3Rpb24uYXBwZW5kQ2hpbGQoZ2FtZXNMaXN0KTtcblxuICBteUdhbWVzU2VjdGlvbi5pbm5lckhUTUwgKz0gYFxuICAgIDxoMSBjbGFzcz1cImdhbWVzLWxpc3QtdGl0bGVcIj5HYW1lczwvaDE+XG4gIGA7XG5cbiAgY29uc3QgbmV3R2FtZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWdhbWUtZm9ybScpO1xuICBjb25zdCBpbnB1dE5ld0dhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQtbmV3LWdhbWUnKTtcbiAgZXZlbnRzLmFkZEdhbWUoW25ld0dhbWVGb3JtLCBpbnB1dE5ld0dhbWVdLCBteUdhbWVzVGVtcGxhdGUpO1xuXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLWdhbWUnKTtcbiAgZXZlbnRzLmRlbGV0ZUdhbWUoZGVsZXRlQnV0dG9ucywgbXlHYW1lc1RlbXBsYXRlKTtcbn07XG5cbmNvbnN0IGVudGVyR2FtZVBvcHVwID0gKGNvbnRhaW5lcikgPT4ge1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgIDxmb3JtIGNsYXNzPVwiZW50ZXItZ2FtZS1wb3B1cFwiPlxuICAgICAgPGZpZWxkc2V0PlxuICAgICAgICA8bGVnZW5kPldlbGNvbWUgdG8gTGVhZGVyYm9hcmQ8L2xlZ2VuZD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBnYW1lIG5hbWVcIiBpZD1cImdhbWUtaW5wdXRcIiB2YWx1ZT1cIlwiIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJzdWJtaXQtZ2FtZVwiPk9LPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L2Zvcm0+XG4gIGA7XG4gIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgY29uc3QgZ2FtZUlucHV0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbnRlci1nYW1lLXBvcHVwJyk7XG4gIGNvbnN0IGdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZS1pbnB1dCcpO1xuICBjb25zdCBlbGVtZW50cyA9IHsgZm9ybTogZ2FtZUlucHV0Rm9ybSwgZ2FtZUlucHV0OiBnYW1lIH07XG4gIGV2ZW50cy5zdWJtaXRJbml0aWFsR2FtZShlbGVtZW50cywgY29udGFpbmVyKTtcbn07XG5cbmV4cG9ydCB7IG15R2FtZXNUZW1wbGF0ZSwgZW50ZXJHYW1lUG9wdXAgfTsiLCJjb25zdCBsb2FkU2NvcmVzID0gYXN5bmMgKGh0bWxDb250YWluZXIsIHNjb3JlcykgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgc2NvcmVzKCk7XG4gIGRhdGEuZm9yRWFjaCgoc2NvcmUpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBgJHtzY29yZS51c2VyfTogJHtzY29yZS5zY29yZX1gO1xuICAgIGh0bWxDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRTY29yZXM7IiwiY2xhc3MgY3VycmVudEdhbWUge1xuICBzdGF0aWMgZmV0Y2hDdXJyZW50R2FtZSgpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnQtZ2FtZScpID09PSBudWxsKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudC1nYW1lJywgSlNPTi5zdHJpbmdpZnkoe30pKTtcbiAgICB9XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnQtZ2FtZScpKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRDdXJyZW50R2FtZShpZCkge1xuICAgIGlmIChpZCkge1xuICAgICAgY29uc3QgY3VycmVudEdhbWUgPSB0aGlzLmZldGNoQ3VycmVudEdhbWUoKTtcbiAgICAgIGN1cnJlbnRHYW1lLmdhbWVJZCA9IGlkO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnQtZ2FtZScsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRHYW1lKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50LWdhbWUnLCBKU09OLnN0cmluZ2lmeSh7fSkpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjdXJyZW50R2FtZTsiLCJjbGFzcyBnYW1lc0RhdGEge1xuICBzdGF0aWMgZmV0Y2hHYW1lcygpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVzJykgPT09IG51bGwpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lcycsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG4gICAgfVxuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lcycpKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRHYW1lcyhnYW1lcykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lcycsIEpTT04uc3RyaW5naWZ5KGdhbWVzKSk7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlR2FtZXMoZ2FtZSkge1xuICAgIGNvbnN0IGdhbWVzID0gdGhpcy5mZXRjaEdhbWVzKCk7XG4gICAgZ2FtZXMucHVzaChnYW1lKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZXMnLCBKU09OLnN0cmluZ2lmeShnYW1lcykpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVzRGF0YTsiLCJpbXBvcnQgYXBpUGF0aEluZm8gZnJvbSAnLi9hcGkuanMnO1xuXG5jb25zdCBwb3N0U2NvcmUgPSBhc3luYyAodXNlciwgc2NvcmUpID0+IHtcbiAgY29uc3Qge1xuICAgIGJhc2VVcmwsIGdhbWVzLCBpZCwgc2NvcmVzLFxuICB9ID0gYXBpUGF0aEluZm8oKTtcbiAgY29uc3QgcGF0aCA9IGAke2Jhc2VVcmx9JHtnYW1lc30ke2lkfSR7c2NvcmVzfWA7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocGF0aCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHVzZXIsXG4gICAgICBzY29yZSxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gIH0pO1xuICBhd2FpdCByZXNwb25zZS5qc29uKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3N0U2NvcmU7IiwiaW1wb3J0IGFwaVBhdGhJbmZvIGZyb20gJy4vYXBpLmpzJztcblxuY29uc3QgcmVjZW50U2NvcmVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB7XG4gICAgYmFzZVVybCwgZ2FtZXMsIGlkLCBzY29yZXMsXG4gIH0gPSBhcGlQYXRoSW5mbygpO1xuICBjb25zdCBwYXRoID0gYCR7YmFzZVVybH0ke2dhbWVzfSR7aWR9JHtzY29yZXN9YDtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKHBhdGgpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRhdGEuanNvbigpO1xuICBjb25zdCB7IHJlc3VsdCB9ID0gcmVzcG9uc2U7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWNlbnRTY29yZXM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgeyBuYXZpZ2F0aW9uLCBzZXRIb21lR2FtZSwgYWRkU2NvcmUgfSBmcm9tICcuL21vZHVsZXMvZXZlbnRzLmpzJztcbmltcG9ydCB7IG15R2FtZXNUZW1wbGF0ZSwgZW50ZXJHYW1lUG9wdXAgfSBmcm9tICcuL21vZHVsZXMvaHRtbC10ZW1wbGF0ZXMuanMnO1xuaW1wb3J0IGN1cnJlbnRHYW1lIGZyb20gJy4vbW9kdWxlcy9sb2NhbHN0b3JhZ2UvY3VycmVudC1nYW1lLmpzJztcbmltcG9ydCByZWNlbnRTY29yZXMgZnJvbSAnLi9tb2R1bGVzL3JlY2VudF9zY29yZXMuanMnO1xuaW1wb3J0IGxvYWRTY29yZXMgZnJvbSAnLi9tb2R1bGVzL2xvYWRfc2NvcmVzLmpzJztcblxuY29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzLWNvbnRhaW5lcicpO1xuXG5uYXZpZ2F0aW9uKCk7XG5cbnNldEhvbWVHYW1lKCk7XG5cbmFkZFNjb3JlKCk7XG5cbm15R2FtZXNUZW1wbGF0ZSgpO1xuXG5pZiAoY3VycmVudEdhbWUuZmV0Y2hDdXJyZW50R2FtZSgpLmdhbWVJZCkge1xuICBjb25zdCBzY29yZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVzLWxpc3QnKTtcbiAgbG9hZFNjb3JlcyhzY29yZXNDb250YWluZXIsIHJlY2VudFNjb3Jlcyk7XG59IGVsc2Uge1xuICBlbnRlckdhbWVQb3B1cChwb3B1cENvbnRhaW5lcik7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVzJykgPT09IG51bGwpIHtcbiAgICBlbnRlckdhbWVQb3B1cChwb3B1cENvbnRhaW5lcik7XG4gIH1cbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==