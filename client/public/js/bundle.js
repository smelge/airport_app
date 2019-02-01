/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.js":
/*!***************************!*\
  !*** ./client/src/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Flights = __webpack_require__(/*! ./models/flight_model.js */ \"./client/src/models/flight_model.js\");\r\nconst ListView = __webpack_require__(/*! ./views/list_view */ \"./client/src/views/list_view.js\");\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n\r\n  const flightListElement = document.querySelector('ul#flight-list');\r\n  const flightListView = new ListView('flights', flightListElement);\r\n  flightListView.bindEvents();\r\n\r\n  const apiUrl = 'http://localhost:3000';\r\n\r\n  const flights = new Flights('flights', `${apiUrl}/flights`);\r\n  flights.bindEvents();\r\n  flights.getData();\r\n});\r\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/helpers/pubsub.js":
/*!**************************************!*\
  !*** ./client/src/helpers/pubsub.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nconst PubSub = {\r\n  publish: function (channel, payload) {\r\n    const event = new CustomEvent(channel, {\r\n      detail: payload\r\n    });\r\n    console.log(`Published: ${channel}`);\r\n    document.dispatchEvent(event);\r\n  },\r\n\r\n  subscribe: function (channel, callback) {\r\n    console.log(`Subscribed: ${channel}`);\r\n    document.addEventListener(channel, callback);\r\n  }\r\n};\r\n\r\nmodule.exports = PubSub;\r\n\n\n//# sourceURL=webpack:///./client/src/helpers/pubsub.js?");

/***/ }),

/***/ "./client/src/helpers/request_helper.js":
/*!**********************************************!*\
  !*** ./client/src/helpers/request_helper.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RequestHelper = function (url) {\r\n  this.url = url;\r\n};\r\n\r\nRequestHelper.prototype.get = function () {\r\n  return fetch(this.url)\r\n    .then((response) => response.json());\r\n};\r\n\r\nRequestHelper.prototype.post = function (payload) {\r\n  return fetch(this.url, {\r\n    method: 'POST',\r\n    body: JSON.stringify(payload),\r\n    headers: { 'Content-Type': 'application/json' }\r\n  })\r\n    .then(response => response.json());\r\n};\r\n\r\nmodule.exports = RequestHelper;\r\n\n\n//# sourceURL=webpack:///./client/src/helpers/request_helper.js?");

/***/ }),

/***/ "./client/src/models/flight_model.js":
/*!*******************************************!*\
  !*** ./client/src/models/flight_model.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./client/src/helpers/request_helper.js\");\r\nconst PubSub = __webpack_require__(/*! ../helpers/pubsub.js */ \"./client/src/helpers/pubsub.js\");\r\n\r\nconst Flights = function (category, url) {\r\n  this.category = category;\r\n  this.url = url;\r\n  this.request = new RequestHelper(this.url);\r\n};\r\n\r\nFlights.prototype.bindEvents = function () {\r\n  PubSub.subscribe(`FormView:submit-${this.category}`, (evt) => {\r\n    this.postData(evt.detail);\r\n  });\r\n};\r\n\r\nFlights.prototype.getData = function () {\r\n  this.request.get()\r\n    .then((consumables) => {\r\n      PubSub.publish(`Flights:${this.category}-data-loaded`, consumables);\r\n    })\r\n    .catch(console.error);\r\n};\r\n\r\nFlights.prototype.postData = function (formData) {\r\n  this.request.post(formData)\r\n    .then((consumables) => {\r\n      PubSub.publish(`Flights:${this.category}-data-loaded`, consumables);\r\n    });\r\n};\r\n\r\nmodule.exports = Flights;\r\n\n\n//# sourceURL=webpack:///./client/src/models/flight_model.js?");

/***/ }),

/***/ "./client/src/views/list_view.js":
/*!***************************************!*\
  !*** ./client/src/views/list_view.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pubsub.js */ \"./client/src/helpers/pubsub.js\");\r\n\r\nconst ListView = function (category, listElement) {\r\n  this.category = category;\r\n  this.listElement = listElement;\r\n};\r\n\r\nListView.prototype.bindEvents = function () {\r\n  PubSub.subscribe(`Flights:${this.category}-data-loaded`, (evt) => {\r\n    this.render(evt.detail);\r\n  });\r\n};\r\n\r\nListView.prototype.render = function (consumableData) {\r\n  this.clearList();\r\n  consumableData.forEach((item, index) => {\r\n    const listItem = this.createListItem(item);\r\n    this.listElement.appendChild(listItem);\r\n  });\r\n};\r\n\r\nListView.prototype.clearList = function () {\r\n  this.listElement.innerHTML = '';\r\n};\r\n\r\nListView.prototype.createListItem = function (item) {\r\n  const listItem = document.createElement('li');\r\n  const textContent = `${item.FlightNo}, ${item.Airline}`;\r\n  listItem.textContent = textContent;\r\n  return listItem;\r\n};\r\n\r\nmodule.exports = ListView;\r\n\n\n//# sourceURL=webpack:///./client/src/views/list_view.js?");

/***/ })

/******/ });