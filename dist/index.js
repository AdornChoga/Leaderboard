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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\r\n  font-size: 62.5%;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: sans-serif;\r\n  background-color: rgb(112, 189, 25);\r\n}\r\n\r\nheader {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  background-color: darkcyan;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  list-style: none;\r\n  justify-content: space-between;\r\n  padding-right: 2rem;\r\n}\r\n\r\nnav h1 {\r\n  margin: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.home {\r\n  display: none;\r\n}\r\n\r\nmain {\r\n  margin-top: 10rem;\r\n  padding-bottom: 8em;\r\n}\r\n\r\n.main-title {\r\n  font-size: 6rem;\r\n  margin-left: 3rem;\r\n}\r\n\r\n.my-games-container {\r\n  display: none;\r\n}\r\n\r\n.popups-container {\r\n  display: none;\r\n  position: fixed;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100vh;\r\n  background-color: rgba(26, 24, 18, 0.5);\r\n  backdrop-filter: blur(0.5rem);\r\n}\r\n\r\n.enter-game-popup {\r\n  margin-inline: auto;\r\n  background-color: white;\r\n  margin-top: 1rem;\r\n  width: 40%;\r\n}\r\n\r\nfieldset {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\nlegend {\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n#game-input {\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 80%;\r\n}\r\n\r\n#submit-game {\r\n  align-self: flex-end;\r\n}\r\n\r\n.grid-container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  padding-left: 7em;\r\n  grid-gap: 8rem;\r\n  width: 90%;\r\n}\r\n\r\nh2 {\r\n  font-size: 5rem;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.recent-scores-heading {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\n.leaderboard-buttons {\r\n  font-size: 2rem;\r\n  padding: 0.2em 0.8em;\r\n  box-shadow: 0.4rem 0.4rem 0.4rem black;\r\n  cursor: pointer;\r\n}\r\n\r\n.leaderboard-buttons:hover {\r\n  background-color: rgb(51, 164, 240);\r\n  color: white;\r\n}\r\n\r\n.leaderboard-buttons:active {\r\n  transform: scale(0.9);\r\n}\r\n\r\n#refresh-button {\r\n  align-self: center;\r\n}\r\n\r\n.scores-list {\r\n  font-size: 2rem;\r\n  padding: 0;\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 2px solid black;\r\n}\r\n\r\n.scores-list li {\r\n  padding: 0.5em 0.2em;\r\n}\r\n\r\n.scores-list li:nth-child(odd) {\r\n  background-color: white;\r\n}\r\n\r\n.scores-list li:nth-child(even) {\r\n  background-color: lightgrey;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 70%;\r\n  gap: 2rem;\r\n  margin-top: 4rem;\r\n}\r\n\r\n#name-input,\r\n#score-input {\r\n  display: block;\r\n  padding: 0.3em;\r\n  font-size: 2rem;\r\n  border-radius: 0.4rem;\r\n  outline: none;\r\n  border: 0.2rem solid rgb(19, 134, 129);\r\n}\r\n\r\ninput:focus {\r\n  color: rgb(236, 16, 16);\r\n}\r\n\r\n#submit-score {\r\n  align-self: flex-end;\r\n}\r\n\r\n.my-games-section {\r\n  display: flex;\r\n  flex-direction: column-reverse;\r\n  align-items: center;\r\n  border: solid red;\r\n  width: 80%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.new-game-form {\r\n  width: 30%;\r\n}\r\n\r\n.games-list-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  list-style-type: none;\r\n  padding: 1rem;\r\n  width: 40%;\r\n  height: 30rem;\r\n  border: solid white;\r\n  overflow-y: auto;\r\n}\r\n\r\n.game-list-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 1.5rem;\r\n  border: solid white;\r\n}\r\n\r\n.delete-game {\r\n  font-size: 1rem;\r\n  color: red;\r\n  cursor: pointer;\r\n}\r\n\r\nfooter {\r\n  position: fixed;\r\n  border: 0.2rem solid black;\r\n  bottom: 0;\r\n  height: 4rem;\r\n  width: 100%;\r\n  background-color: grey;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,UAAU;EACV,SAAS;EACT,uBAAuB;EACvB,mCAAmC;AACrC;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,eAAe;EACf,WAAW;EACX,MAAM;EACN,OAAO;EACP,aAAa;EACb,uCAAuC;EACvC,6BAA6B;AAC/B;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;EACjB,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,sCAAsC;EACtC,eAAe;AACjB;;AAEA;EACE,mCAAmC;EACnC,YAAY;AACd;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,UAAU;EACV,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,SAAS;EACT,gBAAgB;AAClB;;AAEA;;EAEE,cAAc;EACd,cAAc;EACd,eAAe;EACf,qBAAqB;EACrB,aAAa;EACb,sCAAsC;AACxC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,qBAAqB;EACrB,aAAa;EACb,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,0BAA0B;EAC1B,SAAS;EACT,YAAY;EACZ,WAAW;EACX,sBAAsB;AACxB","sourcesContent":["html {\r\n  font-size: 62.5%;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: sans-serif;\r\n  background-color: rgb(112, 189, 25);\r\n}\r\n\r\nheader {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  background-color: darkcyan;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  list-style: none;\r\n  justify-content: space-between;\r\n  padding-right: 2rem;\r\n}\r\n\r\nnav h1 {\r\n  margin: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.home {\r\n  display: none;\r\n}\r\n\r\nmain {\r\n  margin-top: 10rem;\r\n  padding-bottom: 8em;\r\n}\r\n\r\n.main-title {\r\n  font-size: 6rem;\r\n  margin-left: 3rem;\r\n}\r\n\r\n.my-games-container {\r\n  display: none;\r\n}\r\n\r\n.popups-container {\r\n  display: none;\r\n  position: fixed;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100vh;\r\n  background-color: rgba(26, 24, 18, 0.5);\r\n  backdrop-filter: blur(0.5rem);\r\n}\r\n\r\n.enter-game-popup {\r\n  margin-inline: auto;\r\n  background-color: white;\r\n  margin-top: 1rem;\r\n  width: 40%;\r\n}\r\n\r\nfieldset {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\nlegend {\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n#game-input {\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 80%;\r\n}\r\n\r\n#submit-game {\r\n  align-self: flex-end;\r\n}\r\n\r\n.grid-container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  padding-left: 7em;\r\n  grid-gap: 8rem;\r\n  width: 90%;\r\n}\r\n\r\nh2 {\r\n  font-size: 5rem;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.recent-scores-heading {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\n.leaderboard-buttons {\r\n  font-size: 2rem;\r\n  padding: 0.2em 0.8em;\r\n  box-shadow: 0.4rem 0.4rem 0.4rem black;\r\n  cursor: pointer;\r\n}\r\n\r\n.leaderboard-buttons:hover {\r\n  background-color: rgb(51, 164, 240);\r\n  color: white;\r\n}\r\n\r\n.leaderboard-buttons:active {\r\n  transform: scale(0.9);\r\n}\r\n\r\n#refresh-button {\r\n  align-self: center;\r\n}\r\n\r\n.scores-list {\r\n  font-size: 2rem;\r\n  padding: 0;\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 2px solid black;\r\n}\r\n\r\n.scores-list li {\r\n  padding: 0.5em 0.2em;\r\n}\r\n\r\n.scores-list li:nth-child(odd) {\r\n  background-color: white;\r\n}\r\n\r\n.scores-list li:nth-child(even) {\r\n  background-color: lightgrey;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 70%;\r\n  gap: 2rem;\r\n  margin-top: 4rem;\r\n}\r\n\r\n#name-input,\r\n#score-input {\r\n  display: block;\r\n  padding: 0.3em;\r\n  font-size: 2rem;\r\n  border-radius: 0.4rem;\r\n  outline: none;\r\n  border: 0.2rem solid rgb(19, 134, 129);\r\n}\r\n\r\ninput:focus {\r\n  color: rgb(236, 16, 16);\r\n}\r\n\r\n#submit-score {\r\n  align-self: flex-end;\r\n}\r\n\r\n.my-games-section {\r\n  display: flex;\r\n  flex-direction: column-reverse;\r\n  align-items: center;\r\n  border: solid red;\r\n  width: 80%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.new-game-form {\r\n  width: 30%;\r\n}\r\n\r\n.games-list-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  list-style-type: none;\r\n  padding: 1rem;\r\n  width: 40%;\r\n  height: 30rem;\r\n  border: solid white;\r\n  overflow-y: auto;\r\n}\r\n\r\n.game-list-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 1.5rem;\r\n  border: solid white;\r\n}\r\n\r\n.delete-game {\r\n  font-size: 1rem;\r\n  color: red;\r\n  cursor: pointer;\r\n}\r\n\r\nfooter {\r\n  position: fixed;\r\n  border: 0.2rem solid black;\r\n  bottom: 0;\r\n  height: 4rem;\r\n  width: 100%;\r\n  background-color: grey;\r\n}\r\n"],"sourceRoot":""}]);
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
    myGamesContainer.style.display = 'block';
  });

  home.addEventListener('click', () => {
    mainTitle.style.display = 'block';
    gridContainer.style.display = 'grid';
    displayedGame.style.display = 'block';
    home.style.display = 'none';
    myGamesContainer.style.display = 'none';
  });

  if (_localstorage_games_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchGames().length > 0) {
    _localstorage_games_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchGames().forEach((game) => {
      if (game.gameId === _localstorage_current_game_js__WEBPACK_IMPORTED_MODULE_1__["default"].fetchCurrentGame().gameId) {
        displayedGame.innerHTML = game.gameName;
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
    <select class="game-menu">
    </select>
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
        <legend>Enter Game</legend>
        <input type="text" placeholder="Enter Game" id="game-input" value="" />
        <button type="submit" id="submit-game">OK</button>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLElBQUksRUFBRSxtREFBVztBQUNqQixrQkFBa0IsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EseUNBQXlDO0FBQ3pDLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7VUNwQjFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDb0I7QUFDcUM7QUFDYjtBQUNYO0FBQ0o7QUFDVDs7QUFFekM7QUFDQTtBQUNBOztBQUVBLDhEQUFNOztBQUVOLDJFQUFlOztBQUVmLElBQUksOEZBQTRCO0FBQ2hDLEVBQUUsbUVBQVUsa0JBQWtCLGlFQUFZO0FBQzFDLEVBQUU7QUFDRixFQUFFLDBFQUFjO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDBFQUFjO0FBQ2xCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLEVBQUUsOERBQU07QUFDUixDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLG1FQUFVLGtCQUFrQixpRUFBWTtBQUMxQyxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL2FwaS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL2NyZWF0ZV9nYW1lLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvZXZlbnRzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvaHRtbC10ZW1wbGF0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlcy9sb2FkX3Njb3Jlcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL2xvY2Fsc3RvcmFnZS9jdXJyZW50LWdhbWUuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlcy9sb2NhbHN0b3JhZ2UvZ2FtZXMtZGF0YS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL3JlY2VudF9zY29yZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlcy9zdWJtaXQuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlcy91cGxvYWRfc2NvcmVzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyLCAxODksIDI1KTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtjeWFuO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgaDEge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcmVtO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDhlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiA2cmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5teS1nYW1lcy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwcy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAyNCwgMTgsIDAuNSk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC41cmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmVudGVyLWdhbWUtcG9wdXAge1xcclxcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxufVxcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5sZWdlbmQge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNnYW1lLWlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LWdhbWUge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA3ZW07XFxyXFxuICBncmlkLWdhcDogOHJlbTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjZW50LXNjb3Jlcy1oZWFkaW5nIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5sZWFkZXJib2FyZC1idXR0b25zIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuMmVtIDAuOGVtO1xcclxcbiAgYm94LXNoYWRvdzogMC40cmVtIDAuNHJlbSAwLjRyZW0gYmxhY2s7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sZWFkZXJib2FyZC1idXR0b25zOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgMTY0LCAyNDApO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVhZGVyYm9hcmQtYnV0dG9uczphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVmcmVzaC1idXR0b24ge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVzLWxpc3Qge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVzLWxpc3QgbGkge1xcclxcbiAgcGFkZGluZzogMC41ZW0gMC4yZW07XFxyXFxufVxcclxcblxcclxcbi5zY29yZXMtbGlzdCBsaTpudGgtY2hpbGQob2RkKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3Jlcy1saXN0IGxpOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgbWFyZ2luLXRvcDogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI25hbWUtaW5wdXQsXFxyXFxuI3Njb3JlLWlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcGFkZGluZzogMC4zZW07XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgcmdiKDE5LCAxMzQsIDEyOSk7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmZvY3VzIHtcXHJcXG4gIGNvbG9yOiByZ2IoMjM2LCAxNiwgMTYpO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LXNjb3JlIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ubXktZ2FtZXMtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogc29saWQgcmVkO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWdhbWUtZm9ybSB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZXMtbGlzdC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIGhlaWdodDogMzByZW07XFxyXFxuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtbGlzdC1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWdhbWUge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIGJsYWNrO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCxNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsc0NBQXNDO0VBQ3RDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxyXFxuICBmb250LXNpemU6IDYyLjUlO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMiwgMTg5LCAyNSk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGgxIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHJlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA4ZW07XFxyXFxufVxcclxcblxcclxcbi5tYWluLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubXktZ2FtZXMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cHMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMjQsIDE4LCAwLjUpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuNXJlbSk7XFxyXFxufVxcclxcblxcclxcbi5lbnRlci1nYW1lLXBvcHVwIHtcXHJcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbn1cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxubGVnZW5kIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jZ2FtZS1pbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1nYW1lIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIHBhZGRpbmctbGVmdDogN2VtO1xcclxcbiAgZ3JpZC1nYXA6IDhyZW07XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBmb250LXNpemU6IDVyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2VudC1zY29yZXMtaGVhZGluZyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVhZGVyYm9hcmQtYnV0dG9ucyB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAwLjJlbSAwLjhlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAuNHJlbSAwLjRyZW0gMC40cmVtIGJsYWNrO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVhZGVyYm9hcmQtYnV0dG9uczpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDE2NCwgMjQwKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlYWRlcmJvYXJkLWJ1dHRvbnM6YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXHJcXG59XFxyXFxuXFxyXFxuI3JlZnJlc2gtYnV0dG9uIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3Jlcy1saXN0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3Jlcy1saXN0IGxpIHtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDAuMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVzLWxpc3QgbGk6bnRoLWNoaWxkKG9kZCkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5zY29yZXMtbGlzdCBsaTpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDRyZW07XFxyXFxufVxcclxcblxcclxcbiNuYW1lLWlucHV0LFxcclxcbiNzY29yZS1pbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBhZGRpbmc6IDAuM2VtO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIHJnYigxOSwgMTM0LCAxMjkpO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpmb2N1cyB7XFxyXFxuICBjb2xvcjogcmdiKDIzNiwgMTYsIDE2KTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1zY29yZSB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLm15LWdhbWVzLXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IHNvbGlkIHJlZDtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1nYW1lLWZvcm0ge1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVzLWxpc3QtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBoZWlnaHQ6IDMwcmVtO1xcclxcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWxpc3QtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1nYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCBibGFjaztcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGhlaWdodDogNHJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY3VycmVudEdhbWUgZnJvbSAnLi9sb2NhbHN0b3JhZ2UvY3VycmVudC1nYW1lLmpzJztcblxuY29uc3QgYXBpUGF0aEluZm8gPSAoKSA9PiB7XG4gIGNvbnN0IGFwaSA9IHtcbiAgICBiYXNlVXJsOiAnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvJyxcbiAgICBnYW1lczogJ2dhbWVzLycsXG4gICAgaWQ6IGAke2N1cnJlbnRHYW1lLmZldGNoQ3VycmVudEdhbWUoKS5nYW1lSWR9L2AsXG4gICAgc2NvcmVzOiAnc2NvcmVzLycsXG4gIH07XG4gIHJldHVybiBhcGk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcGlQYXRoSW5mbzsiLCJpbXBvcnQgYXBpUGF0aEluZm8gZnJvbSAnLi9hcGkuanMnO1xuXG5jb25zdCBjcmVhdGVHYW1lID0gYXN5bmMgKGdhbWVOYW1lKSA9PiB7XG4gIGNvbnN0IHsgYmFzZVVybCwgZ2FtZXMgfSA9IGFwaVBhdGhJbmZvKCk7XG4gIGNvbnN0IHBhdGggPSBgJHtiYXNlVXJsfSR7Z2FtZXN9YDtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwYXRoLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoXG4gICAgICB7XG4gICAgICAgIG5hbWU6IGdhbWVOYW1lLFxuICAgICAgfSxcbiAgICApLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGdhbWVJZCA9IHJlc3VsdHMucmVzdWx0LnNwbGl0KCcgJylbM107XG4gIHJldHVybiB7IGdhbWVOYW1lLCBnYW1lSWQgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdhbWU7IiwiaW1wb3J0IGdhbWVzRGF0YSBmcm9tICcuL2xvY2Fsc3RvcmFnZS9nYW1lcy1kYXRhLmpzJztcbmltcG9ydCBjdXJyZW50R2FtZSBmcm9tICcuL2xvY2Fsc3RvcmFnZS9jdXJyZW50LWdhbWUuanMnO1xuaW1wb3J0IHJlY2VudFNjb3JlcyBmcm9tICcuL3JlY2VudF9zY29yZXMuanMnO1xuaW1wb3J0IGxvYWRTY29yZXMgZnJvbSAnLi9sb2FkX3Njb3Jlcy5qcyc7XG5cbmNvbnN0IGV2ZW50cyA9ICgpID0+IHtcbiAgY29uc3Qgc2NvcmVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3Jlcy1saXN0Jyk7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xuICBjb25zdCBteUdhbWVzTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teS1nYW1lcy1saW5rJyk7XG4gIGNvbnN0IG15R2FtZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXktZ2FtZXMtY29udGFpbmVyJyk7XG4gIGNvbnN0IG1haW5UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXRpdGxlJyk7XG4gIGNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZC1jb250YWluZXInKTtcbiAgY29uc3QgZGlzcGxheWVkR2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWdhbWUnKTtcblxuICBteUdhbWVzTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtYWluVGl0bGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBncmlkQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZGlzcGxheWVkR2FtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGhvbWUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbXlHYW1lc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfSk7XG5cbiAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtYWluVGl0bGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZ3JpZENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgIGRpc3BsYXllZEdhbWUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgaG9tZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG15R2FtZXNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSk7XG5cbiAgaWYgKGdhbWVzRGF0YS5mZXRjaEdhbWVzKCkubGVuZ3RoID4gMCkge1xuICAgIGdhbWVzRGF0YS5mZXRjaEdhbWVzKCkuZm9yRWFjaCgoZ2FtZSkgPT4ge1xuICAgICAgaWYgKGdhbWUuZ2FtZUlkID09PSBjdXJyZW50R2FtZS5mZXRjaEN1cnJlbnRHYW1lKCkuZ2FtZUlkKSB7XG4gICAgICAgIGRpc3BsYXllZEdhbWUuaW5uZXJIVE1MID0gZ2FtZS5nYW1lTmFtZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5ZWRHYW1lLmlubmVySFRNTCA9ICcnO1xuICAgIHNjb3Jlc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIGlmIChnYW1lc0RhdGEuZmV0Y2hHYW1lcygpLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGdhbWUgPSBnYW1lc0RhdGEuZmV0Y2hHYW1lcygpWzBdO1xuICAgIGN1cnJlbnRHYW1lLnNldEN1cnJlbnRHYW1lKGdhbWUuZ2FtZUlkKTtcbiAgICBkaXNwbGF5ZWRHYW1lLmlubmVySFRNTCA9IGdhbWUuZ2FtZU5hbWU7XG4gICAgbG9hZFNjb3JlcyhzY29yZXNDb250YWluZXIsIHJlY2VudFNjb3Jlcyk7XG4gIH1cblxuICBpZiAoZ2FtZXNEYXRhLmZldGNoR2FtZXMoKS5sZW5ndGggPT09IDApIHtcbiAgICBjdXJyZW50R2FtZS5zZXRDdXJyZW50R2FtZShudWxsKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzOyIsImltcG9ydCBnYW1lc0RhdGEgZnJvbSAnLi9sb2NhbHN0b3JhZ2UvZ2FtZXMtZGF0YS5qcyc7XG5pbXBvcnQgY3VycmVudEdhbWUgZnJvbSAnLi9sb2NhbHN0b3JhZ2UvY3VycmVudC1nYW1lLmpzJztcbmltcG9ydCBjcmVhdGVHYW1lIGZyb20gJy4vY3JlYXRlX2dhbWUuanMnO1xuaW1wb3J0IHJlY2VudFNjb3JlcyBmcm9tICcuL3JlY2VudF9zY29yZXMuanMnO1xuaW1wb3J0IGxvYWRTY29yZXMgZnJvbSAnLi9sb2FkX3Njb3Jlcy5qcyc7XG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vZXZlbnRzLmpzJztcblxuY29uc3QgbXlHYW1lc1RlbXBsYXRlID0gKCkgPT4ge1xuICBjb25zdCBteUdhbWVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15LWdhbWVzLWNvbnRhaW5lcicpO1xuICBteUdhbWVzQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8c2VsZWN0IGNsYXNzPVwiZ2FtZS1tZW51XCI+XG4gICAgPC9zZWxlY3Q+XG4gICAgPGRpdiBjbGFzcz1cIm15LWdhbWVzLXNlY3Rpb25cIj5cbiAgICAgIDxmb3JtIGNsYXNzPVwibmV3LWdhbWUtZm9ybVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFkZCBhIG5ldyBnYW1lLi4uXCIgaWQ9XCJpbnB1dC1uZXctZ2FtZVwiIHZhbHVlPVwiXCIvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cInN1Ym1pdC1uZXctZ2FtZVwiPkFkZCBHYW1lPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIGA7XG4gIGNvbnN0IGdhbWVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtbWVudScpO1xuICBnYW1lc0RhdGEuZmV0Y2hHYW1lcygpLmZvckVhY2goKGdhbWUpID0+IHtcbiAgICBjb25zdCBnYW1lT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgZ2FtZU9wdGlvbi5jbGFzc0xpc3QuYWRkKCdnYW1lLW9wdGlvbicpO1xuICAgIGdhbWVPcHRpb24uaWQgPSBnYW1lLmdhbWVJZDtcbiAgICBnYW1lT3B0aW9uLmlubmVySFRNTCA9IGdhbWUuZ2FtZU5hbWU7XG4gICAgaWYgKGdhbWUuZ2FtZUlkID09PSBjdXJyZW50R2FtZS5mZXRjaEN1cnJlbnRHYW1lKCkuZ2FtZUlkKSB7XG4gICAgICBnYW1lT3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZ2FtZU1lbnUuYXBwZW5kQ2hpbGQoZ2FtZU9wdGlvbik7XG4gIH0pO1xuXG4gIGdhbWVNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBjb25zdCBzY29yZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVzLWxpc3QnKTtcbiAgICBjb25zdCBzZWxlY3RlZEdhbWUgPSBnYW1lTWVudS5vcHRpb25zW2dhbWVNZW51LnNlbGVjdGVkSW5kZXhdO1xuICAgIGN1cnJlbnRHYW1lLnNldEN1cnJlbnRHYW1lKHNlbGVjdGVkR2FtZS5pZCk7XG4gICAgc2NvcmVzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGxvYWRTY29yZXMoc2NvcmVzQ29udGFpbmVyLCByZWNlbnRTY29yZXMpO1xuICAgIGV2ZW50cygpO1xuICB9KTtcblxuICBjb25zdCBteUdhbWVzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teS1nYW1lcy1zZWN0aW9uJyk7XG4gIGNvbnN0IGdhbWVzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGdhbWVzTGlzdC5jbGFzc0xpc3QuYWRkKCdnYW1lcy1saXN0LWNvbnRhaW5lcicpO1xuICBnYW1lc0RhdGEuZmV0Y2hHYW1lcygpLmZvckVhY2goKGdhbWUpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnZ2FtZS1saXN0LWl0ZW0nKTtcbiAgICBsaXN0SXRlbS5pbm5lckhUTUwgPSBgXG4gICAgICA8cD4ke2dhbWUuZ2FtZU5hbWV9PC9wPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJkZWxldGUtZ2FtZVwiIGlkPVwiJHtnYW1lLmdhbWVJZH1cIj5kZWxldGU8L2J1dHRvbj5cbiAgICBgO1xuICAgIGdhbWVzTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIH0pO1xuICBteUdhbWVzU2VjdGlvbi5hcHBlbmRDaGlsZChnYW1lc0xpc3QpO1xuXG4gIGNvbnN0IG5ld0dhbWVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1nYW1lLWZvcm0nKTtcbiAgY29uc3QgaW5wdXROZXdHYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LW5ldy1nYW1lJyk7XG4gIG5ld0dhbWVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5ld0dhbWUgPSBpbnB1dE5ld0dhbWUudmFsdWUudHJpbSgpO1xuICAgIGNvbnN0IHsgZ2FtZU5hbWUsIGdhbWVJZCB9ID0gYXdhaXQgY3JlYXRlR2FtZShuZXdHYW1lKTtcbiAgICBnYW1lc0RhdGEudXBkYXRlR2FtZXMoeyBnYW1lTmFtZSwgZ2FtZUlkIH0pO1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdnYW1lLWxpc3QtaXRlbScpO1xuICAgIGxpc3RJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgIDxwPiR7Z2FtZU5hbWV9PC9wPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJkZWxldGUtZ2FtZVwiIGlkPVwiJHtnYW1lSWR9XCI+ZGVsZXRlPC9idXR0b24+XG4gICAgYDtcbiAgICBteUdhbWVzVGVtcGxhdGUoKTtcbiAgICBldmVudHMoKTtcbiAgICBuZXdHYW1lRm9ybS5yZXNldCgpO1xuICB9KTtcblxuICBjb25zdCBkZWxldGVHYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS1nYW1lJyk7XG4gIGRlbGV0ZUdhbWUuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgZ2FtZXMgPSBnYW1lc0RhdGEuZmV0Y2hHYW1lcygpO1xuICAgICAgY29uc3QgcmVtYWluaW5nR2FtZXMgPSBnYW1lcy5maWx0ZXIoKGdhbWUpID0+IGdhbWUuZ2FtZUlkICE9PSBidG4uaWQpO1xuICAgICAgZ2FtZXNEYXRhLnNldEdhbWVzKHJlbWFpbmluZ0dhbWVzKTtcbiAgICAgIGV2ZW50cygpO1xuICAgICAgbXlHYW1lc1RlbXBsYXRlKCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgZW50ZXJHYW1lUG9wdXAgPSAoKSA9PiB7XG4gIGNvbnN0IHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcy1jb250YWluZXInKTtcbiAgcG9wdXBDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgIDxmb3JtIGNsYXNzPVwiZW50ZXItZ2FtZS1wb3B1cFwiPlxuICAgICAgPGZpZWxkc2V0PlxuICAgICAgICA8bGVnZW5kPkVudGVyIEdhbWU8L2xlZ2VuZD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBHYW1lXCIgaWQ9XCJnYW1lLWlucHV0XCIgdmFsdWU9XCJcIiAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cInN1Ym1pdC1nYW1lXCI+T0s8L2J1dHRvbj5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgPC9mb3JtPlxuICBgO1xuICBwb3B1cENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgY29uc3QgZ2FtZUlucHV0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbnRlci1nYW1lLXBvcHVwJyk7XG4gIGdhbWVJbnB1dEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZ2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lLWlucHV0Jyk7XG4gICAgY29uc3QgeyBnYW1lTmFtZSwgZ2FtZUlkIH0gPSBhd2FpdCBjcmVhdGVHYW1lKGdhbWUudmFsdWUpO1xuICAgIGdhbWVzRGF0YS51cGRhdGVHYW1lcyh7IGdhbWVOYW1lLCBnYW1lSWQgfSk7XG4gICAgY3VycmVudEdhbWUuc2V0Q3VycmVudEdhbWUoZ2FtZUlkKTtcbiAgICBwb3B1cENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBteUdhbWVzVGVtcGxhdGUsIGVudGVyR2FtZVBvcHVwIH07IiwiY29uc3QgbG9hZFNjb3JlcyA9IGFzeW5jIChodG1sQ29udGFpbmVyLCBzY29yZXMpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHNjb3JlcygpO1xuICBkYXRhLmZvckVhY2goKHNjb3JlKSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gYCR7c2NvcmUudXNlcn06ICR7c2NvcmUuc2NvcmV9YDtcbiAgICBodG1sQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkU2NvcmVzOyIsImNsYXNzIGN1cnJlbnRHYW1lIHtcbiAgc3RhdGljIGZldGNoQ3VycmVudEdhbWUoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50LWdhbWUnKSA9PT0gbnVsbCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnQtZ2FtZScsIEpTT04uc3RyaW5naWZ5KHt9KSk7XG4gICAgfVxuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50LWdhbWUnKSk7XG4gIH1cblxuICBzdGF0aWMgc2V0Q3VycmVudEdhbWUoaWQpIHtcbiAgICBpZiAoaWQpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRHYW1lID0gdGhpcy5mZXRjaEN1cnJlbnRHYW1lKCk7XG4gICAgICBjdXJyZW50R2FtZS5nYW1lSWQgPSBpZDtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50LWdhbWUnLCBKU09OLnN0cmluZ2lmeShjdXJyZW50R2FtZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudC1nYW1lJywgSlNPTi5zdHJpbmdpZnkoe30pKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3VycmVudEdhbWU7IiwiY2xhc3MgZ2FtZXNEYXRhIHtcbiAgc3RhdGljIGZldGNoR2FtZXMoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lcycpID09PSBudWxsKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZXMnLCBKU09OLnN0cmluZ2lmeShbXSkpO1xuICAgIH1cbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZXMnKSk7XG4gIH1cblxuICBzdGF0aWMgc2V0R2FtZXMoZ2FtZXMpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZXMnLCBKU09OLnN0cmluZ2lmeShnYW1lcykpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZUdhbWVzKGdhbWUpIHtcbiAgICBjb25zdCBnYW1lcyA9IHRoaXMuZmV0Y2hHYW1lcygpO1xuICAgIGdhbWVzLnB1c2goZ2FtZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dhbWVzJywgSlNPTi5zdHJpbmdpZnkoZ2FtZXMpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnYW1lc0RhdGE7IiwiaW1wb3J0IGFwaVBhdGhJbmZvIGZyb20gJy4vYXBpLmpzJztcblxuY29uc3QgcmVjZW50U2NvcmVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB7XG4gICAgYmFzZVVybCwgZ2FtZXMsIGlkLCBzY29yZXMsXG4gIH0gPSBhcGlQYXRoSW5mbygpO1xuICBjb25zdCBwYXRoID0gYCR7YmFzZVVybH0ke2dhbWVzfSR7aWR9JHtzY29yZXN9YDtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKHBhdGgpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRhdGEuanNvbigpO1xuICBjb25zdCB7IHJlc3VsdCB9ID0gcmVzcG9uc2U7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWNlbnRTY29yZXM7IiwiaW1wb3J0IHVwbG9hZFNjb3JlIGZyb20gJy4vdXBsb2FkX3Njb3Jlcy5qcyc7XG5cbmNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUtaW5wdXQnKTtcbiAgY29uc3Qgc2NvcmVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY29yZS1pbnB1dCcpO1xuICBpZiAobmFtZUlucHV0LnZhbHVlICE9PSAnJyAmJiBzY29yZUlucHV0LnZhbHVlICE9PSAnJykge1xuICAgIHVwbG9hZFNjb3JlKG5hbWVJbnB1dC52YWx1ZSwgTnVtYmVyKHNjb3JlSW5wdXQudmFsdWUpKTtcbiAgICBuYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgICBzY29yZUlucHV0LnZhbHVlID0gJyc7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN1Ym1pdDtcbiIsImltcG9ydCBhcGlQYXRoSW5mbyBmcm9tICcuL2FwaS5qcyc7XG5cbmNvbnN0IHVwbG9hZFNjb3JlID0gYXN5bmMgKHVzZXIsIHNjb3JlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBiYXNlVXJsLCBnYW1lcywgaWQsIHNjb3JlcyxcbiAgfSA9IGFwaVBhdGhJbmZvKCk7XG4gIGNvbnN0IHBhdGggPSBgJHtiYXNlVXJsfSR7Z2FtZXN9JHtpZH0ke3Njb3Jlc31gO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHBhdGgsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB1c2VyLFxuICAgICAgc2NvcmUsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcbiAgYXdhaXQgcmVzcG9uc2UuanNvbigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBsb2FkU2NvcmU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IGV2ZW50cyBmcm9tICcuL21vZHVsZXMvZXZlbnRzLmpzJztcbmltcG9ydCB7IG15R2FtZXNUZW1wbGF0ZSwgZW50ZXJHYW1lUG9wdXAgfSBmcm9tICcuL21vZHVsZXMvaHRtbC10ZW1wbGF0ZXMuanMnO1xuaW1wb3J0IGN1cnJlbnRHYW1lIGZyb20gJy4vbW9kdWxlcy9sb2NhbHN0b3JhZ2UvY3VycmVudC1nYW1lLmpzJztcbmltcG9ydCByZWNlbnRTY29yZXMgZnJvbSAnLi9tb2R1bGVzL3JlY2VudF9zY29yZXMuanMnO1xuaW1wb3J0IGxvYWRTY29yZXMgZnJvbSAnLi9tb2R1bGVzL2xvYWRfc2NvcmVzLmpzJztcbmltcG9ydCBzdWJtaXQgZnJvbSAnLi9tb2R1bGVzL3N1Ym1pdC5qcyc7XG5cbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtc2NvcmUnKTtcbmNvbnN0IHJlZnJlc2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVmcmVzaC1idXR0b24nKTtcbmNvbnN0IHNjb3Jlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZXMtbGlzdCcpO1xuXG5ldmVudHMoKTtcblxubXlHYW1lc1RlbXBsYXRlKCk7XG5cbmlmIChjdXJyZW50R2FtZS5mZXRjaEN1cnJlbnRHYW1lKCkuZ2FtZUlkKSB7XG4gIGxvYWRTY29yZXMoc2NvcmVzQ29udGFpbmVyLCByZWNlbnRTY29yZXMpO1xufSBlbHNlIHtcbiAgZW50ZXJHYW1lUG9wdXAoKTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZXMnKSA9PT0gbnVsbCkge1xuICAgIGVudGVyR2FtZVBvcHVwKCk7XG4gIH1cbn0pO1xuXG5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHN1Ym1pdCgpO1xufSk7XG5cbnJlZnJlc2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHNjb3Jlc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgbG9hZFNjb3JlcyhzY29yZXNDb250YWluZXIsIHJlY2VudFNjb3Jlcyk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=