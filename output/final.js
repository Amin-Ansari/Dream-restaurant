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

/***/ "./scripts/class.js":
/*!**************************!*\
  !*** ./scripts/class.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cart\": () => (/* binding */ Cart),\n/* harmony export */   \"guideObserver\": () => (/* binding */ guideObserver),\n/* harmony export */   \"obs\": () => (/* binding */ obs),\n/* harmony export */   \"simpleObserver\": () => (/* binding */ simpleObserver)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./scripts/elements.js\");\n\r\nconst obs = new IntersectionObserver(function (entry) {\r\n  for (let element of entry) {\r\n    if (element.isIntersecting) {\r\n      element.target.classList.replace(\"img-anim-up\", \"scale-up-img\");\r\n      element.target.classList.replace(\"h-anim-right\", \"move-to-right-title\");\r\n      element.target.classList.replace(\"p-anim-right\", \"move-to-right-text\");\r\n      element.target.classList.replace(\r\n        \"button-anim-right\",\r\n        \"move-to-right-btn\"\r\n      );\r\n\r\n      element.target.classList.replace(\"h-anim-left\", \"move-to-left-title\");\r\n      element.target.classList.replace(\"p-anim-left\", \"move-to-left-text\");\r\n      element.target.classList.replace(\"button-anim-left\", \"move-to-left-btn\");\r\n    }\r\n  }\r\n});\r\nconst guideObserver = new IntersectionObserver(function (entries) {\r\n  for (let i = 1; i <= entries.length; i++) {\r\n    if (entries[i - 1].isIntersecting) {\r\n      entries[i - 1].target.classList.add(`how-to-item-${i}`);\r\n    }\r\n  }\r\n});\r\n\r\nconst simpleObserver = new IntersectionObserver(function (entries) {\r\n  for (let element of entries) {\r\n    if (element.isIntersecting) {\r\n      if (!element.target.classList.contains(`intro-show`)) {\r\n        element.target.classList.add(`intro-show`);\r\n      }\r\n    }\r\n  }\r\n});\r\n\r\nlet storedItem = Symbol();\r\nlet singleItem = new WeakMap();\r\nlet orderInfo = Symbol();\r\nconst theCardAddingElements = `\r\n<ul class=\"card-list\"></ul>\r\n<div class=\"total-contianer d-flex justify-content-between flex-wrap\">\r\n<h3 class=\"total-sum-title m-0\">قیمت کل:</h3>\r\n<div class=\"d-flex align-items-center\">\r\n<p class=\"d-inline-block total-price m-0 ms-2\"></p>\r\nتومان\r\n</div>\r\n</div>\r\n<div class=\"p-1 mt-3 pay-btn\">\r\n<button type=\"button\" class=\"btn w-100 theme-bg text-white\">تسویه حساب</button>\r\n</div>\r\n`;\r\nclass Cart {\r\n  constructor() {\r\n    (this[storedItem] = []),\r\n      singleItem.set(this, {\r\n        name: undefined,\r\n        image: undefined,\r\n        number: undefined,\r\n        price: undefined,\r\n      });\r\n    this[orderInfo] = function () {\r\n      for (let element of this[storedItem]) {\r\n        _elements__WEBPACK_IMPORTED_MODULE_0__.basketContent.firstElementChild.insertAdjacentHTML(\r\n          \"beforeend\",\r\n          `\r\n        <li class=\"card-item d-flex justify-content-between mt-3 mb-3\">\r\n<div class=\"order-info d-flex align-items-center\">\r\n  <img src=\"${element.image}\" alt=\"Image of the order\" class=\"order-image-style\">\r\n<div class=\"info-context d-block\">\r\n<h5 class=\"m-0 p-0\">${element.name}</h5>\r\n<p class=\"m-0 p-0\">${element.price}تومان </p>\r\n<p class=\"m-0 p-0\">${element.number} عدد</p>\r\n</div>\r\n</div>\r\n<div class=\"delete-container d-flex align-items-center\">\r\n  <button class=\"btn order-delete\">حذف</button>\r\n</div>\r\n</li>`\r\n        );\r\n      }\r\n    };\r\n  }\r\n  storeToLocal() {\r\n    let theLocal = JSON.parse(localStorage.getItem(\"basketItem\"));\r\n    this[storedItem] = theLocal;\r\n    if (!theLocal) {\r\n      this[storedItem].push(singleItem.get(this));\r\n      localStorage.setItem(\"basketItem\", JSON.stringify(this[storedItem]));\r\n    } else {\r\n      for (let i = 0; i < this[storedItem].length; i++) {\r\n        if (this[storedItem][i].name == singleItem.get(this).name) {\r\n          this[storedItem][i].number += Number(singleItem.get(this).number);\r\n          localStorage.setItem(\"basketItem\", JSON.stringify(this[storedItem]));\r\n          break;\r\n        }\r\n        if (i == this[storedItem].length - 1) {\r\n          this[storedItem].push(singleItem.get(this));\r\n          localStorage.setItem(\"basketItem\", JSON.stringify(this[storedItem]));\r\n          break;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  storeToSingle(itemName, itemImage, itemNumber, itemPrice) {\r\n    singleItem.get(this).name = itemName;\r\n    singleItem.get(this).image = itemImage;\r\n    singleItem.get(this).number = itemNumber;\r\n    singleItem.get(this).price = itemPrice;\r\n    this.storeToLocal();\r\n  }\r\n  render() {\r\n    if (this.basketLength > 0) {\r\n      _elements__WEBPACK_IMPORTED_MODULE_0__.basketContent.innerHTML = \"\";\r\n      _elements__WEBPACK_IMPORTED_MODULE_0__.basketContent.classList.remove(\"justify-content-center\");\r\n      _elements__WEBPACK_IMPORTED_MODULE_0__.basketContent.classList.remove(\"align-items-center\");\r\n      _elements__WEBPACK_IMPORTED_MODULE_0__.basketContent.innerHTML = theCardAddingElements;\r\n      this[orderInfo]();\r\n      this.calculateTotal();\r\n    } else {\r\n      _elements__WEBPACK_IMPORTED_MODULE_0__.basketContent.innerHTML = \"\";\r\n      _elements__WEBPACK_IMPORTED_MODULE_0__.basketContent.classList.add(\"justify-content-center\");\r\n      _elements__WEBPACK_IMPORTED_MODULE_0__.basketContent.classList.add(\"align-items-center\");\r\n      _elements__WEBPACK_IMPORTED_MODULE_0__.basketContent.innerHTML = `\r\n      <p class=\"empty-p mb-4\">سبد خرید شما خالی میباشد</p>\r\n      <button class=\"btn btn-start-style text-white mb-1\">\r\n        سفارش اضافه کنید\r\n      </button>\r\n      <img\r\n        src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAA1CAYAAADbNhwDAAAFjElEQVR4Xu2aTXLbNhSAAUptmp17gioniD1jd7qUknZqJ4tGN5BO0OgEiU5g5wRxTmB70didNpG668SeKXOCsCcod5k0FtH3wB+BIEiAIiFXCTjjhYfAA/Dh/VOUuMcKAWpFqhNKHFhLSuDAOrCWCFgS6zTWgbVEwJJYp7EOrCUClsQ6jV0X2L2L2SEjpEcXZHr5cOBbWveTF5vT2L1fZtukw/5anpoeXe4PJp88BQsHzIHdffnqMfXoYXEdB7gu+7zGXryegYB+uRAH2BRwBrboBkpF+GRBx87/ViPOwO7+OntCGXuaDmeEnnrR4gXzOj8RwkayGBpFwzcPvj81vcHPbdxSYy9ev4PD9zKwbDG4Ovhhjv/H2kx+lgCHHUZ3/jwYBJ8bNJPzcrCyG0BtvdofDGUBRcD0GLKGsclCpmO2T2Zb3a+ut3F8l3SDTb04DlZ2AzozFwD3LvfvDUyhVY1DoF/cJk/AKh6JlhPP2bygGWts3g34AGunDVimMhKLOSkCXUoosyLTNdYxbvf8tz6lnUNQzCmNNYX9k/nWiE2uHtw/Sv+Pc1vvG1uFQrI++vct3eF1lqSbb/M9VqxgbY9hjRD2Oaayf4WAdEf0a6DNCH3LlsbIbqjq8Lb20AR44sIQ6iiFitlSqrFYxvbgr+AGcm5iQXfazF812gp9Coq9ijDZNNdo+eKbQGk6twwqjwrcxybpFIuit6IbiP3v7PkyzWo3C0h8ElZ74hOyiE2vP3jH/nAAUPPBFd7lXFVTOKvO59nLbfKcxsGWyPvStg33zl+NCKUAlz8hBLavV92MPE/Vm1D5UcF/kf+DO5ChqrIWLVg5uBHGxpcH94/bgCsC47delj8LVnPTYIsZDD3++J5MUutKuWjBclO8mJ2kKt+m1prmz9L687Zy57rKkbguTAvTDMb/+J4OZKgo1wjsd+ez3oIyTIn4wyh9evXjYFp3YwVXIPUnVIFJEeBuBGzitqCAyaBWlvRGYBFIPoiRVvoEsptRgS2mY+utwoSKEHPU9AkZWwzTXopKwYzBJhDStAxlBdA+HDZNv9I8OTaFvP9WrFkY09RqquYXgxQfzQsAXWfPGCxKlF1CzGLZBVvlkFIAy/JoKUfMRK8rj02CFH5N6YuaagIVx9cCixNUuWeT3FJ2B5hu/fuhM4eGTFrNiPfVarqnUgTB9EfwXiyzjTQ1lVkbLE789uXvj5jnYXQUHx/U99kqqZjkv1EmVly8dSg+TS7QxJqSc6GW9qTxc7CUcZ0W5kpgcVE5B81vhB4xdn1W5dzF8YVcWU0hgNRmR5XamECrGpNYIUb8fnEcPYI8dVp33ZXB4gYMGygBJPU+OB0fzPxvxvJdLOycgafGAxU0NKetDX25CmyF2eNwXlrLJb7pJTYCy+HGPUi53jddH3oB9BR+ILIFG0mbLaq5ARQFd0yF6sbxaH8rGsGnfvjcVDB7DtU0SJWt1RgsCi6L4LoDJu+x0aLtxcIYHwqT025EXtTxdeIeYiXoph9Hy9b0IdOZmLoxq2BT4SUpiiHfWsPm2FKk0eIPxjqBKpfml/0l6TEa9Q3dTaGrVmtH0uBWNFbegGBqoB1VPwBRbj3g7oGCOQqf4w0OCfOyR9RGH3x8KPQ6VKLmUOxMmhY7omArYOWd88KCRH1CvbsQqDBI9RLzRzcQwsEDHtyuyZl4uLgg4R8YRwZgsyHYAcN/ACauk66lEhFCijhZJUXU7WctYHWb0L0v+V2DblrV+1bNXrXQRoAVN550mVZxMShmDinUmfh1osntVM3dOLDiYbBSijqdu9Ah3wazRxcjR/r4uxmL3pLI89v0oboL2WiwusPd5HsH1hJ9B9aBtUTAklinsQ6sJQKWxDqNdWAtEbAk1mmsA2uJgCWx/wEWfdtE72B26wAAAABJRU5ErkJggg==\"\r\n        alt=\"Attention arrow\"\r\n        class=\"d-block mb-5\"\r\n      />`;\r\n    }\r\n  }\r\n  remove(givenParameter) {\r\n    let theLocal = JSON.parse(localStorage.getItem(\"basketItem\"));\r\n    if (theLocal) {\r\n      for (let i = 0; i < this[storedItem].length; i++) {\r\n        if (this[storedItem][i].name == givenParameter) {\r\n          this[storedItem].splice(i, 1);\r\n          localStorage.setItem(\"basketItem\", JSON.stringify(this[storedItem]));\r\n        } else {\r\n        }\r\n      }\r\n    }\r\n  }\r\n  calculateTotal() {\r\n    let theLocal = JSON.parse(localStorage.getItem(\"basketItem\"));\r\n    let totalPrice = 0;\r\n    if (theLocal.length) {\r\n      for (let key of theLocal) {\r\n        totalPrice += key.number * Number(key.price);\r\n      }\r\n      const theTotalElement = (document.querySelector(\r\n        \".total-price\"\r\n      ).innerHTML = totalPrice);\r\n    }\r\n  }\r\n\r\n  get basketLength() {\r\n    let theLocal = JSON.parse(localStorage.getItem(\"basketItem\"));\r\n    if (theLocal) {\r\n      this[storedItem] = theLocal;\r\n      let totalLenght = 0;\r\n      for (let element of this[storedItem]) {\r\n        totalLenght += Number(element.number);\r\n      }\r\n      return totalLenght;\r\n    } else {\r\n      return 0;\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://my-webpack-project/./scripts/class.js?");

/***/ }),

/***/ "./scripts/elements.js":
/*!*****************************!*\
  !*** ./scripts/elements.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"badges\": () => (/* binding */ badges),\n/* harmony export */   \"basketContent\": () => (/* binding */ basketContent),\n/* harmony export */   \"cartButton\": () => (/* binding */ cartButton),\n/* harmony export */   \"guideElements\": () => (/* binding */ guideElements),\n/* harmony export */   \"hiddenMenu\": () => (/* binding */ hiddenMenu),\n/* harmony export */   \"intersectedElements\": () => (/* binding */ intersectedElements),\n/* harmony export */   \"introSectionElements\": () => (/* binding */ introSectionElements),\n/* harmony export */   \"itemTitle\": () => (/* binding */ itemTitle),\n/* harmony export */   \"menuButtons\": () => (/* binding */ menuButtons),\n/* harmony export */   \"menuList\": () => (/* binding */ menuList),\n/* harmony export */   \"offCanvasCloseBtn\": () => (/* binding */ offCanvasCloseBtn),\n/* harmony export */   \"offCavas\": () => (/* binding */ offCavas),\n/* harmony export */   \"orderSubmitButton\": () => (/* binding */ orderSubmitButton),\n/* harmony export */   \"outViewContainer\": () => (/* binding */ outViewContainer),\n/* harmony export */   \"toggleButton\": () => (/* binding */ toggleButton)\n/* harmony export */ });\nconst toggleButton = document.querySelector(\".toggle-button\");\r\nconst hiddenMenu = document.querySelector(\".out-of-view\");\r\nconst outViewContainer = document.querySelector(\r\n  \".out-of-view-container\"\r\n);\r\nconst cartButton = document.querySelector(\"#order-cart-button\");\r\nconst offCavas = document.querySelector(\".off-canvas-container\");\r\nconst offCanvasCloseBtn = document.querySelector(\".close-style\");\r\nconst menuList = document.querySelectorAll(\".menu-list\");\r\nconst menuButtons = document.querySelectorAll(\".menu-btn\");\r\nconst itemTitle = document.querySelectorAll(\".title-menu\");\r\nconst guideElements = document.querySelectorAll(\r\n  \".content-item,.dot-item\"\r\n);\r\nconst intersectedElements = document.querySelectorAll(\".observer\");\r\nconst introSectionElements = document.querySelectorAll(\".intro-observe\");\r\nconst basketContent = document.querySelector(\".off-canvas-content\");\r\nconst orderSubmitButton = document.querySelectorAll(\r\n  'input[value=\"اضافه کردن سفارش\"]'\r\n);\r\nconst badges = document.querySelector(\".badge\");\r\n\n\n//# sourceURL=webpack://my-webpack-project/./scripts/elements.js?");

/***/ }),

/***/ "./scripts/function.js":
/*!*****************************!*\
  !*** ./scripts/function.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeCanvas\": () => (/* binding */ closeCanvas),\n/* harmony export */   \"ifClickCanvas\": () => (/* binding */ ifClickCanvas),\n/* harmony export */   \"scrollTheTitle\": () => (/* binding */ scrollTheTitle),\n/* harmony export */   \"selectTheButton\": () => (/* binding */ selectTheButton),\n/* harmony export */   \"toggleCart\": () => (/* binding */ toggleCart),\n/* harmony export */   \"toggleSub\": () => (/* binding */ toggleSub),\n/* harmony export */   \"unsetAll\": () => (/* binding */ unsetAll)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./scripts/elements.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction styleChange() {\r\n  _elements__WEBPACK_IMPORTED_MODULE_0__.toggleButton.classList.toggle(\"theme-bg\");\r\n  const toggleChildren = _elements__WEBPACK_IMPORTED_MODULE_0__.toggleButton.children;\r\n  for (let element of toggleChildren) {\r\n    element.classList.toggle(\"toggled-bar\");\r\n  }\r\n}\r\nfunction subShow() {}\r\nfunction toggleSub() {\r\n  styleChange();\r\n  _elements__WEBPACK_IMPORTED_MODULE_0__.outViewContainer.classList.replace(\"out-of-view-container\", \"height-grow\");\r\n  _elements__WEBPACK_IMPORTED_MODULE_0__.hiddenMenu.classList.toggle(\"out-of-view\");\r\n}\r\nfunction toggleCart() {\r\n  _elements__WEBPACK_IMPORTED_MODULE_0__.offCavas.classList.toggle(\"d-none\");\r\n}\r\nfunction ifClickCanvas(e) {\r\n  if (e.target.classList.contains(\"off-canvas-container\")) {\r\n    _elements__WEBPACK_IMPORTED_MODULE_0__.offCavas.classList.add(\"d-none\");\r\n  }\r\n}\r\nfunction closeCanvas() {\r\n  _elements__WEBPACK_IMPORTED_MODULE_0__.offCavas.classList.add(\"d-none\");\r\n}\r\nfunction unsetAll() {\r\n  _elements__WEBPACK_IMPORTED_MODULE_0__.menuButtons.forEach(function (item) {\r\n    item.classList.remove(\"btn-theme-bg\");\r\n    item.classList.remove(\"text-white\");\r\n    if (!item.classList.contains(\"border\")) {\r\n      item.classList.add(\"border\");\r\n    }\r\n  });\r\n}\r\nfunction selectTheButton() {\r\n  unsetAll();\r\n  this.classList.add(\"btn-theme-bg\");\r\n  this.classList.add(\"text-white\");\r\n  this.classList.remove(\"border\");\r\n  for (let list of _elements__WEBPACK_IMPORTED_MODULE_0__.menuList) {\r\n    if (`${this.id}-menu` == list.id) {\r\n      list.classList.remove(\"d-none\");\r\n    } else {\r\n      if (!list.classList.contains(\"d-none\")) {\r\n        list.classList.add(\"d-none\");\r\n      }\r\n    }\r\n  }\r\n}\r\nfunction scrollTheTitle() {\r\n  let itemTitle = document.querySelectorAll(\".title-menu\");\r\n  if (window.innerWidth >= 576) {\r\n    for (let element of itemTitle) {\r\n      if (element.firstElementChild.innerHTML.length >= 18) {\r\n        element.firstElementChild.classList.add(\"scroll-animation\");\r\n      } else {\r\n        element.firstElementChild.classList.remove(\"scroll-animation\");\r\n      }\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://my-webpack-project/./scripts/function.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./scripts/elements.js\");\n/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function */ \"./scripts/function.js\");\n/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class */ \"./scripts/class.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst myBasket = new _class__WEBPACK_IMPORTED_MODULE_2__.Cart();\r\nconst updateBasketLenth = function () {\r\n  _elements__WEBPACK_IMPORTED_MODULE_0__.badges.innerHTML = myBasket.basketLength;\r\n};\r\n\r\n_elements__WEBPACK_IMPORTED_MODULE_0__.toggleButton.addEventListener(\"click\", _function__WEBPACK_IMPORTED_MODULE_1__.toggleSub);\r\n_elements__WEBPACK_IMPORTED_MODULE_0__.cartButton.addEventListener(\"click\", _function__WEBPACK_IMPORTED_MODULE_1__.toggleCart);\r\ndocument.addEventListener(\"click\", _function__WEBPACK_IMPORTED_MODULE_1__.ifClickCanvas);\r\n_elements__WEBPACK_IMPORTED_MODULE_0__.offCanvasCloseBtn.addEventListener(\"click\", _function__WEBPACK_IMPORTED_MODULE_1__.closeCanvas);\r\n\r\n_elements__WEBPACK_IMPORTED_MODULE_0__.menuButtons.forEach((item) => item.addEventListener(\"click\", _function__WEBPACK_IMPORTED_MODULE_1__.selectTheButton));\r\n\r\n(0,_function__WEBPACK_IMPORTED_MODULE_1__.scrollTheTitle)();\r\n\r\n_elements__WEBPACK_IMPORTED_MODULE_0__.guideElements.forEach((item) => _class__WEBPACK_IMPORTED_MODULE_2__.guideObserver.observe(item));\r\n_elements__WEBPACK_IMPORTED_MODULE_0__.intersectedElements.forEach((item) => _class__WEBPACK_IMPORTED_MODULE_2__.obs.observe(item));\r\n_elements__WEBPACK_IMPORTED_MODULE_0__.introSectionElements.forEach((item) => _class__WEBPACK_IMPORTED_MODULE_2__.simpleObserver.observe(item));\r\n\r\nlet test = myBasket.basketLength;\r\n\r\nupdateBasketLenth();\r\nmyBasket.render();\r\n\r\n_elements__WEBPACK_IMPORTED_MODULE_0__.orderSubmitButton.forEach((item) =>\r\n  item.addEventListener(\"click\", function () {\r\n    let orderName =\r\n      item.parentElement.parentElement.parentElement.firstElementChild\r\n        .firstElementChild.firstElementChild.innerHTML;\r\n    let orderimage =\r\n      item.parentElement.parentElement.parentElement.parentElement\r\n        .firstElementChild.firstElementChild.firstElementChild;\r\n    let orderNumber = item.previousElementSibling.value;\r\n    let orderPrice =\r\n      item.parentElement.parentElement.parentElement.firstElementChild\r\n        .lastElementChild.innerHTML;\r\n\r\n    orderPrice = orderPrice.split(\"تومان\")[0];\r\n\r\n    myBasket.storeToSingle(\r\n      orderName,\r\n      orderimage.src,\r\n      Number(orderNumber),\r\n      Number(orderPrice)\r\n    );\r\n    updateBasketLenth();\r\n    myBasket.render();\r\n  })\r\n);\r\n\r\ndocument.addEventListener(\"click\", function (e) {\r\n  if (e.target.classList.contains(\"order-delete\")) {\r\n    let orderName =\r\n      e.target.parentElement.previousElementSibling.firstElementChild\r\n        .nextElementSibling.firstElementChild.innerHTML;\r\n    myBasket.remove(orderName);\r\n    updateBasketLenth();\r\n    myBasket.render();\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://my-webpack-project/./scripts/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;