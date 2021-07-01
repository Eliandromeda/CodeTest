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

/***/ "./assets/data.json":
/*!**************************!*\
  !*** ./assets/data.json ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"data\":[{\"name\":\"Kanye West\",\"description\":\"Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.\",\"category\":\"entertainment\",\"picture\":\"kanye.png\",\"lastUpdated\":\"2020-03-10T23:08:57.892Z\",\"votes\":{\"positive\":23,\"negative\":36}},{\"name\":\"Mark Zuckerberg\",\"description\":\"Born in White Plains, New York, Zuckerberg attended Harvard University, where he launched the Facebook social networking service from his dormitory room on February 4, 2004.\",\"category\":\"business\",\"picture\":\"mark.png\",\"lastUpdated\":\"2021-02-14T23:10:19.134Z\",\"votes\":{\"positive\":418,\"negative\":324}},{\"name\":\"Cristina Fernández de Kirchner\",\"description\":\"Her first term of office started with a conflict with the agricultural sector, and her proposed taxation system was rejected.\",\"category\":\"politics\",\"picture\":\"cristina.png\",\"lastUpdated\":\"2020-12-10T23:41:07.120Z\",\"votes\":{\"positive\":45,\"negative\":97}},{\"name\":\"Malala Yousafzai\",\"description\":\"The daughter of educational activist Ziauddin, Yousafzai was born to a Pashtun family in Mingora, Khyber Pakhtunkhwa, Pakistan. Her family came to run a chain of schools in the region.\",\"category\":\"politics\",\"picture\":\"malala.png\",\"lastUpdated\":\"2020-12-10T23:41:07.120Z\",\"votes\":{\"positive\":18,\"negative\":3}},{\"name\":\"Elon Musk\",\"description\":\"In 2002, Musk founded SpaceX, an aerospace manufacturer and space transport services company, of which he is CEO, CTO, and lead designer.\",\"category\":\"business\",\"picture\":\"elon.png\",\"lastUpdated\":\"2020-12-20T23:43:38.041Z\",\"votes\":{\"positive\":1237,\"negative\":894}},{\"name\":\"Greta Thumberg\",\"description\":\"Thunberg\\'s activism started after convincing her parents to adopt several lifestyle choices to reduce their own carbon footprint.\",\"category\":\"environment\",\"picture\":\"greta.png\",\"lastUpdated\":\"2021-02-26T23:44:50.326Z\",\"votes\":{\"positive\":118,\"negative\":45}}]}');\n\n//# sourceURL=webpack:///./assets/data.json?");

/***/ }),

/***/ "./src/javascript/base/base-component.js":
/*!***********************************************!*\
  !*** ./src/javascript/base/base-component.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar BaseComponent = /*#__PURE__*/function () {\n  function BaseComponent(el) {\n    _classCallCheck(this, BaseComponent);\n\n    this.el = el;\n  }\n\n  _createClass(BaseComponent, [{\n    key: \"init\",\n    value: function init() {\n      this._elements();\n\n      this._events();\n    }\n  }, {\n    key: \"_elements\",\n    value: function _elements() {}\n  }, {\n    key: \"_events\",\n    value: function _events() {}\n  }]);\n\n  return BaseComponent;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseComponent);\n\n//# sourceURL=webpack:///./src/javascript/base/base-component.js?");

/***/ }),

/***/ "./src/javascript/base/init-component.js":
/*!***********************************************!*\
  !*** ./src/javascript/base/init-component.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar InitComponents = function InitComponents(jsSources) {\n  var components = getJsComponents('[js-component]');\n  components.forEach(function (el) {\n    var nameJsElement = el.getAttribute('js-component');\n    var Component = jsSources[nameJsElement];\n    var component = new Component(el);\n    component.init();\n  });\n};\n\nvar getJsComponents = function getJsComponents(selector) {\n  var jsComponents = document.querySelectorAll(selector);\n  return _toConsumableArray(jsComponents);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InitComponents);\n\n//# sourceURL=webpack:///./src/javascript/base/init-component.js?");

/***/ }),

/***/ "./src/javascript/card.js":
/*!********************************!*\
  !*** ./src/javascript/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/base-component */ \"./src/javascript/base/base-component.js\");\n/* harmony import */ var _assets_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/data.json */ \"./assets/data.json\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ \"./src/javascript/localStorage.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar IMAGES_ROUTE = '../../assets/img/';\nvar SELECTORS = {\n  'MAIN_DIV_CARD': '.opinion-card',\n  'CARD_CONTENT': '.opinion-card__content',\n  'CARD_DESCRIPTION': '.opinion-card__description',\n  'BUTTON_VOTE_UP': 'icon-button__vote-up',\n  'BUTTON_VOTE_DOWN': 'icon-button__vote-down',\n  'GAUGE_THUMPS_UP': '.opinion-card__gauge__thumbs-up',\n  'GAUGE_THUMPS_DOWN': '.opinion-card__gauge__thumbs-down',\n  'BUTTON_VOTE': '.opinion-card__votes__vote',\n  'EYEBROW': '.opinion-card__eyebrow',\n  'THUMBS_POSITIVE': '.positive',\n  'THUMBS_NEGATIVE': '.negative',\n  'DROP_DOWN': '.drop-down_list'\n};\nvar CLASSES = {\n  'BUTTON_THUMB_ACTIVE': 'icon-button__vote--active',\n  'BUTTON_VOTE_ACTIVE': 'opinion-card__votes__vote--active',\n  'LIST': 'opinion-card-list',\n  'GRID': 'opinion-card-grid'\n};\nvar STYLE_OPTION = {\n  'GRID': 'grid',\n  'LIST': 'list'\n};\n\nvar Card = /*#__PURE__*/function (_BaseComponent) {\n  _inherits(Card, _BaseComponent);\n\n  var _super = _createSuper(Card);\n\n  function Card(el) {\n    var _this;\n\n    _classCallCheck(this, Card);\n\n    _this = _super.call(this, el);\n    _this.voteAgain = false;\n    return _this;\n  }\n\n  _createClass(Card, [{\n    key: \"init\",\n    value: function init() {\n      _get(_getPrototypeOf(Card.prototype), \"init\", this).call(this);\n\n      this.addVotesToLocalStorage();\n      this.dataVotes = (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.getLocalStorage)('votes');\n      this.renderInformation();\n    }\n  }, {\n    key: \"_elements\",\n    value: function _elements() {\n      this.mainDivCard = document.querySelector(SELECTORS.MAIN_DIV_CARD);\n      this.cardContent = this.el.querySelector(SELECTORS.CARD_CONTENT);\n      this.dropDownList = document.querySelector(SELECTORS.DROP_DOWN);\n    }\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      var _this2 = this;\n\n      this.dropDownList.addEventListener('change', function (_ref) {\n        var target = _ref.target;\n        return _this2.changeOptionStyle(target);\n      });\n    } // Renders the initial data for the cards.\n\n  }, {\n    key: \"renderInformation\",\n    value: function renderInformation() {\n      var _this3 = this;\n\n      _assets_data_json__WEBPACK_IMPORTED_MODULE_1__.data.forEach(function (card, index) {\n        var cardNode = _this3.cardContent.cloneNode(true);\n\n        cardNode.style.display = 'block';\n        cardNode.querySelector(\"\".concat(SELECTORS.CARD_DESCRIPTION, \" h3\")).innerText = card.name;\n        cardNode.querySelector(\"\".concat(SELECTORS.CARD_DESCRIPTION, \" p\")).innerText = card.description;\n        cardNode.style.backgroundImage = \"url(\".concat(IMAGES_ROUTE).concat(card.picture, \")\");\n        cardNode.querySelector(SELECTORS.EYEBROW).innerText = card.category;\n\n        _this3.handleGaugeVotes(cardNode, _this3.calculatePercentage(_this3.dataVotes[index]));\n\n        _this3.getMaxTypeVotes(cardNode, _this3.dataVotes[index]);\n\n        _this3.mainDivCard.append(cardNode);\n      });\n      this.eventListenerButtons();\n    }\n  }, {\n    key: \"handleGaugeVotes\",\n    value:\n    /**\n     * Handles the render information for the gauge bar positive and negative votes.\n     * @param {HTML} card current element cloned to render the card.\n     * @param {array} votesAverage get the percentages for positive and negative votes.\n     */\n    function handleGaugeVotes(card, votesAverage) {\n      this.thumbsUpContent = card.querySelector(\"\".concat(SELECTORS.GAUGE_THUMPS_UP));\n      this.thumbsUpText = card.querySelector(\"\".concat(SELECTORS.GAUGE_THUMPS_UP, \" label\"));\n      this.thumbsDownContent = card.querySelector(\"\".concat(SELECTORS.GAUGE_THUMPS_DOWN));\n      this.thumbsDownText = card.querySelector(\"\".concat(SELECTORS.GAUGE_THUMPS_DOWN, \" label\"));\n      var voteTextPositive = \"\".concat(votesAverage[0].positive, \"%\");\n      var voteTextNegative = \"\".concat(votesAverage[1].negative, \"%\");\n      this.thumbsUpContent.style.width = voteTextPositive;\n      this.thumbsUpText.innerText = voteTextPositive;\n      this.thumbsDownContent.style.width = voteTextNegative;\n      this.thumbsDownText.innerText = voteTextNegative;\n    }\n    /**\n     * Validates the max number of votes for a type and active an icon.\n     * @param {HTML} card current element cloned to render the card.\n     * @param {array} votes list of values of the current votes for an author.\n     */\n\n  }, {\n    key: \"getMaxTypeVotes\",\n    value: function getMaxTypeVotes(card, votes) {\n      var description = card.querySelector(\"\".concat(SELECTORS.CARD_DESCRIPTION, \" div\"));\n      var positive = description.querySelector(SELECTORS.THUMBS_POSITIVE);\n      var negative = description.querySelector(SELECTORS.THUMBS_NEGATIVE);\n\n      if (votes.positive > votes.negative) {\n        positive.style.display = 'block';\n        negative.style.display = 'none';\n      } else {\n        negative.style.display = 'block';\n        positive.style.display = 'none';\n      }\n    }\n    /**\n     * Calculates the percentage of votes for every type (positive, negative)\n     * @param {Array} votes values from a card related to an author.\n     */\n\n  }, {\n    key: \"calculatePercentage\",\n    value: function calculatePercentage(votes) {\n      if (!votes) {\n        return;\n      }\n\n      var totalVotes = votes.positive + votes.negative;\n      var percentages = Object.keys(votes).map(function (key) {\n        var voteType = {};\n        voteType[key] = (votes[key] / totalVotes * 100).toFixed(2);\n        return voteType;\n      });\n      return percentages;\n    }\n    /**\n     * Creates the event listener for the different elements actions.\n     */\n\n  }, {\n    key: \"eventListenerButtons\",\n    value: function eventListenerButtons() {\n      var _this4 = this;\n\n      this.buttonsVoteUp = this.el.querySelectorAll(\".\".concat(SELECTORS.BUTTON_VOTE_UP));\n      this.buttonsVoteDown = this.el.querySelectorAll(\".\".concat(SELECTORS.BUTTON_VOTE_DOWN));\n      this.buttonsVoteNow = this.el.querySelectorAll(SELECTORS.BUTTON_VOTE);\n      this.buttonsVoteUp.forEach(function (e) {\n        e.addEventListener('click', function (_ref2) {\n          var target = _ref2.target;\n          return _this4.setActiveButton(target);\n        });\n      });\n      this.buttonsVoteDown.forEach(function (e) {\n        e.addEventListener('click', function (_ref3) {\n          var target = _ref3.target;\n          return _this4.setActiveButton(target);\n        });\n      });\n      this.buttonsVoteNow.forEach(function (e) {\n        e.addEventListener('click', function (_ref4) {\n          var target = _ref4.target;\n\n          _this4.setVoteNow(target, Array.from(_this4.buttonsVoteNow).indexOf(target) - 1);\n        });\n      });\n    }\n    /**\n    * Sets the action from a type of button active (thumbs up, or down).\n    * @param {HTML} buttonVote button element type thumbs up or down.\n    */\n\n  }, {\n    key: \"setActiveButton\",\n    value: function setActiveButton(buttonVote) {\n      var buttonActive = this.el.querySelector(\".\".concat(CLASSES.BUTTON_THUMB_ACTIVE));\n\n      if (buttonActive) {\n        buttonActive.classList.remove(CLASSES.BUTTON_THUMB_ACTIVE);\n      }\n\n      buttonVote.classList.add(CLASSES.BUTTON_THUMB_ACTIVE);\n      this.handleVoteButton(buttonVote);\n    }\n    /**\n     * Handles the behavior between the button thumbs up and down when active one or not.\n     * @param {HTML} buttonVote button type thumbs up.\n     */\n\n  }, {\n    key: \"handleVoteButton\",\n    value: function handleVoteButton(buttonVote) {\n      var btnVoteActive = this.el.querySelector(\".\".concat(CLASSES.BUTTON_VOTE_ACTIVE));\n\n      if (btnVoteActive) {\n        btnVoteActive.classList.remove(CLASSES.BUTTON_VOTE_ACTIVE);\n      }\n\n      var currentBtnVote = buttonVote.parentElement.parentElement.querySelector(SELECTORS.BUTTON_VOTE);\n\n      if (currentBtnVote) {\n        currentBtnVote.classList.add(CLASSES.BUTTON_VOTE_ACTIVE);\n      }\n    }\n    /**\n     * Saves the votes array for every card to local storage.\n     */\n\n  }, {\n    key: \"addVotesToLocalStorage\",\n    value: function addVotesToLocalStorage() {\n      if (!(0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.getLocalStorage)('votes')) {\n        var votesArray = _assets_data_json__WEBPACK_IMPORTED_MODULE_1__.data.map(function (el) {\n          return el.votes;\n        });\n        localStorage.setItem('votes', (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.parseLocalStorage)(votesArray));\n      }\n    }\n    /**\n     * Sets and update the stage of the elements ones the user vote for one option.\n     * * @param {HTML} currentButtonNow specific element button now.\n     * * @param {number} indexElement index for the current element selected.\n     */\n\n  }, {\n    key: \"setVoteNow\",\n    value: function setVoteNow(currentButtonNow, indexElement) {\n      if (this.voteAgain) {\n        this.setInitialState(currentButtonNow, indexElement);\n      }\n\n      var iconThumbsActive = this.el.querySelector(\".\".concat(CLASSES.BUTTON_THUMB_ACTIVE));\n      if (!iconThumbsActive) return;\n      var votePositive = iconThumbsActive.classList.contains(SELECTORS.BUTTON_VOTE_UP);\n      var voteNegative = iconThumbsActive.classList.contains(SELECTORS.BUTTON_VOTE_DOWN);\n      var currentCard = iconThumbsActive.parentElement.parentElement;\n\n      if (votePositive) {\n        this.updateDataVote('positive', indexElement, currentCard);\n      }\n\n      if (voteNegative) {\n        this.updateDataVote('negative', indexElement, currentCard);\n      }\n\n      this.setVoteState(currentButtonNow);\n    }\n    /**\n    * Updates the data for the votes for and specific card.\n    * * @param {string} valueVote specific element button now.\n    * * @param {number} indexElement index for the current element selected.\n    * * @param {HTML} card current element card.\n    */\n\n  }, {\n    key: \"updateDataVote\",\n    value: function updateDataVote(valueVote, indexElement, card) {\n      this.dataVotes = (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.getLocalStorage)('votes');\n      this.dataVotes[indexElement][valueVote] += 1;\n      localStorage.setItem('votes', (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.parseLocalStorage)(this.dataVotes));\n      this.handleGaugeVotes(card, this.calculatePercentage(this.dataVotes[indexElement]));\n    }\n    /**\n    * Update the state of the vote now button ones it is clicked.\n     * * @param {HTML} buttonVote current button element.\n    */\n\n  }, {\n    key: \"setVoteState\",\n    value: function setVoteState(buttonVote) {\n      var eyeBrow = buttonVote.parentElement.parentElement.querySelector(SELECTORS.EYEBROW);\n      buttonVote.innerText = \"Vote Again\";\n      eyeBrow.innerText = 'Thank you for your vote!';\n      this.voteAgain = true;\n    }\n    /**\n     * Updates to the initial state ones vote again state is clicked.\n     * * @param {HTML} buttonVote current button element.\n     * * @param {index} indexElement index of the button clicked.\n    */\n\n  }, {\n    key: \"setInitialState\",\n    value: function setInitialState(buttonVote, indexElement) {\n      var eyeBrow = buttonVote.parentElement.parentElement.querySelector(SELECTORS.EYEBROW);\n      var iconThumbs = buttonVote.parentElement.parentElement.querySelector(\".\".concat(CLASSES.BUTTON_THUMB_ACTIVE));\n\n      if (iconThumbs) {\n        iconThumbs.classList.remove(CLASSES.BUTTON_THUMB_ACTIVE);\n      }\n\n      buttonVote.innerText = \"Vote Now\";\n      buttonVote.classList.remove(CLASSES.BUTTON_VOTE_ACTIVE);\n      eyeBrow.innerText = _assets_data_json__WEBPACK_IMPORTED_MODULE_1__.data[indexElement]['category'];\n      this.voteAgain = false;\n    }\n    /**\n     * Changes the style presentation of the cards.\n     * * @param {HTML} element dropDownList selected to change style of the card.\n     * * @param {index} indexElement index of the button clicked.\n    */\n\n  }, {\n    key: \"changeOptionStyle\",\n    value: function changeOptionStyle(element) {\n      var selected = element.selectedOptions[0].value;\n\n      switch (selected) {\n        case STYLE_OPTION.LIST:\n          this.mainDivCard.classList.add(CLASSES.LIST);\n          this.mainDivCard.classList.remove(CLASSES.GRID);\n          break;\n\n        case STYLE_OPTION.GRID:\n          this.mainDivCard.classList.add(CLASSES.GRID);\n          this.mainDivCard.classList.remove(CLASSES.LIST);\n          break;\n      }\n    }\n  }]);\n\n  return Card;\n}(_base_base_component__WEBPACK_IMPORTED_MODULE_0__.default);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\n\n//# sourceURL=webpack:///./src/javascript/card.js?");

/***/ }),

/***/ "./src/javascript/localStorage.js":
/*!****************************************!*\
  !*** ./src/javascript/localStorage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parseLocalStorage\": () => (/* binding */ parseLocalStorage),\n/* harmony export */   \"getLocalStorage\": () => (/* binding */ getLocalStorage)\n/* harmony export */ });\n/**\n* parse the array received, so it can be set to an item in the localStorage.\n* * @param {Array} array data to set to the localStorage.\n*/\nvar parseLocalStorage = function parseLocalStorage(array) {\n  return JSON.stringify(array);\n};\n/**\n * Gets the localStorage value with and specific item name.\n * * @param {string} nameItem name of the item.\n*/\n\nvar getLocalStorage = function getLocalStorage(nameItem) {\n  return JSON.parse(localStorage.getItem(nameItem));\n};\n\n//# sourceURL=webpack:///./src/javascript/localStorage.js?");

/***/ }),

/***/ "./src/javascript/sources.js":
/*!***********************************!*\
  !*** ./src/javascript/sources.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _base_init_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/init-component */ \"./src/javascript/base/init-component.js\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ \"./src/javascript/card.js\");\n/* harmony import */ var _sass_card_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/card.scss */ \"./src/sass/card.scss\");\n/* harmony import */ var _sass_drop_down_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sass/drop-down.scss */ \"./src/sass/drop-down.scss\");\n//js\n\n //scss\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_base_init_component__WEBPACK_IMPORTED_MODULE_0__.default)({\n  'card-component': _card__WEBPACK_IMPORTED_MODULE_1__.default\n}));\n\n//# sourceURL=webpack:///./src/javascript/sources.js?");

/***/ }),

/***/ "./src/sass/card.scss":
/*!****************************!*\
  !*** ./src/sass/card.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/sass/card.scss?");

/***/ }),

/***/ "./src/sass/drop-down.scss":
/*!*********************************!*\
  !*** ./src/sass/drop-down.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/sass/drop-down.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/javascript/sources.js");
/******/ 	
/******/ })()
;