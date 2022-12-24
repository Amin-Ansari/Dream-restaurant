/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./scripts/class.js":
      /*!**************************!*\
  !*** ./scripts/class.js ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Cart: () => /* binding */ Cart,
          /* harmony export */ guideObserver: () => /* binding */ guideObserver,
          /* harmony export */ obs: () => /* binding */ obs,
          /* harmony export */ simpleObserver: () =>
            /* binding */ simpleObserver,
          /* harmony export */
        });
        /* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./elements */ "./scripts/elements.js");

        const obs = new IntersectionObserver(function (entry) {
          for (let element of entry) {
            if (element.isIntersecting) {
              element.target.classList.replace("img-anim-up", "scale-up-img");
              element.target.classList.replace(
                "h-anim-right",
                "move-to-right-title"
              );
              element.target.classList.replace(
                "p-anim-right",
                "move-to-right-text"
              );
              element.target.classList.replace(
                "button-anim-right",
                "move-to-right-btn"
              );

              element.target.classList.replace(
                "h-anim-left",
                "move-to-left-title"
              );
              element.target.classList.replace(
                "p-anim-left",
                "move-to-left-text"
              );
              element.target.classList.replace(
                "button-anim-left",
                "move-to-left-btn"
              );
            }
          }
        });
        const guideObserver = new IntersectionObserver(function (entries) {
          for (let i = 1; i <= entries.length; i++) {
            if (entries[i - 1].isIntersecting) {
              entries[i - 1].target.classList.add(`how-to-item-${i}`);
            }
          }
        });

        const simpleObserver = new IntersectionObserver(function (entries) {
          for (let element of entries) {
            if (element.isIntersecting) {
              if (!element.target.classList.contains(`intro-show`)) {
                element.target.classList.add(`intro-show`);
              }
            }
          }
        });

        let storedItem = Symbol();
        let singleItem = new WeakMap();
        let orderInfo = Symbol();
        const theCardAddingElements = `
<ul class="card-list"></ul>
<div class="total-contianer d-flex justify-content-between flex-wrap">
<h3 class="total-sum-title m-0">قیمت کل:</h3>
<div class="d-flex align-items-center">
<p class="d-inline-block total-price m-0 ms-2"></p>
تومان
</div>
</div>
<div class="p-1 mt-3 pay-btn">
<button type="button" class="btn w-100 theme-bg text-white">تسویه حساب</button>
</div>
`;
        class Cart {
          constructor() {
            (this[storedItem] = []),
              singleItem.set(this, {
                name: undefined,
                image: undefined,
                number: undefined,
                price: undefined,
              });
            this[orderInfo] = function () {
              for (let element of this[storedItem]) {
                _elements__WEBPACK_IMPORTED_MODULE_0__.basketContent.firstElementChild.insertAdjacentHTML(
                  "beforeend",
                  `
        <li class="card-item d-flex justify-content-between mt-3 mb-3">
<div class="order-info d-flex align-items-center">
  <img src="${element.image}" alt="Image of the order" class="order-image-style">
<div class="info-context d-block">
<h5 class="m-0 p-0">${element.name}</h5>
<p class="m-0 p-0">${element.price}تومان </p>
<p class="m-0 p-0">${element.number} عدد</p>
</div>
</div>
<div class="delete-container d-flex align-items-center">
  <button class="btn order-delete">حذف</button>
</div>
</li>`
                );
              }
            };
          }
          storeToLocal() {
            let theLocal = JSON.parse(localStorage.getItem("basketItem"));
            this[storedItem] = theLocal;
            if (!theLocal) {
              this[storedItem] = [singleItem.get(this)];
              localStorage.setItem(
                "basketItem",
                JSON.stringify(this[storedItem])
              );
            } else {
              for (let i = 0; i < this[storedItem].length; i++) {
                if (this[storedItem][i].name == singleItem.get(this).name) {
                  this[storedItem][i].number += Number(
                    singleItem.get(this).number
                  );
                  localStorage.setItem(
                    "basketItem",
                    JSON.stringify(this[storedItem])
                  );
                  break;
                }
                if (i == this[storedItem].length - 1) {
                  this[storedItem].push(singleItem.get(this));
                  localStorage.setItem(
                    "basketItem",
                    JSON.stringify(this[storedItem])
                  );
                  break;
                }
              }
            }
          }
          storeToSingle(itemName, itemImage, itemNumber, itemPrice) {
            singleItem.get(this).name = itemName;
            singleItem.get(this).image = itemImage;
            singleItem.get(this).number = itemNumber;
            singleItem.get(this).price = itemPrice;
            this.storeToLocal();
          }
          render() {
            if (this.basketLength > 0) {
              _elements__WEBPACK_IMPORTED_MODULE_0__.basketContent.innerHTML =
                "";
              _elements__WEBPACK_IMPORTED_MODULE_0__.basketContent.classList.remove(
                "justify-content-center"
              );
              _elements__WEBPACK_IMPORTED_MODULE_0__.basketContent.classList.remove(
                "align-items-center"
              );
              _elements__WEBPACK_IMPORTED_MODULE_0__.basketContent.innerHTML =
                theCardAddingElements;
              this[orderInfo]();
              this.calculateTotal();
            } else {
              _elements__WEBPACK_IMPORTED_MODULE_0__.basketContent.innerHTML =
                "";
              _elements__WEBPACK_IMPORTED_MODULE_0__.basketContent.classList.add(
                "justify-content-center"
              );
              _elements__WEBPACK_IMPORTED_MODULE_0__.basketContent.classList.add(
                "align-items-center"
              );
              _elements__WEBPACK_IMPORTED_MODULE_0__.basketContent.innerHTML = `
      <p class="empty-p mb-4">سبد خرید شما خالی میباشد</p>
      <button class="btn btn-start-style text-white mb-1">
        سفارش اضافه کنید
      </button>
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAA1CAYAAADbNhwDAAAFjElEQVR4Xu2aTXLbNhSAAUptmp17gioniD1jd7qUknZqJ4tGN5BO0OgEiU5g5wRxTmB70didNpG668SeKXOCsCcod5k0FtH3wB+BIEiAIiFXCTjjhYfAA/Dh/VOUuMcKAWpFqhNKHFhLSuDAOrCWCFgS6zTWgbVEwJJYp7EOrCUClsQ6jV0X2L2L2SEjpEcXZHr5cOBbWveTF5vT2L1fZtukw/5anpoeXe4PJp88BQsHzIHdffnqMfXoYXEdB7gu+7zGXryegYB+uRAH2BRwBrboBkpF+GRBx87/ViPOwO7+OntCGXuaDmeEnnrR4gXzOj8RwkayGBpFwzcPvj81vcHPbdxSYy9ev4PD9zKwbDG4Ovhhjv/H2kx+lgCHHUZ3/jwYBJ8bNJPzcrCyG0BtvdofDGUBRcD0GLKGsclCpmO2T2Zb3a+ut3F8l3SDTb04DlZ2AzozFwD3LvfvDUyhVY1DoF/cJk/AKh6JlhPP2bygGWts3g34AGunDVimMhKLOSkCXUoosyLTNdYxbvf8tz6lnUNQzCmNNYX9k/nWiE2uHtw/Sv+Pc1vvG1uFQrI++vct3eF1lqSbb/M9VqxgbY9hjRD2Oaayf4WAdEf0a6DNCH3LlsbIbqjq8Lb20AR44sIQ6iiFitlSqrFYxvbgr+AGcm5iQXfazF812gp9Coq9ijDZNNdo+eKbQGk6twwqjwrcxybpFIuit6IbiP3v7PkyzWo3C0h8ElZ74hOyiE2vP3jH/nAAUPPBFd7lXFVTOKvO59nLbfKcxsGWyPvStg33zl+NCKUAlz8hBLavV92MPE/Vm1D5UcF/kf+DO5ChqrIWLVg5uBHGxpcH94/bgCsC47delj8LVnPTYIsZDD3++J5MUutKuWjBclO8mJ2kKt+m1prmz9L687Zy57rKkbguTAvTDMb/+J4OZKgo1wjsd+ez3oIyTIn4wyh9evXjYFp3YwVXIPUnVIFJEeBuBGzitqCAyaBWlvRGYBFIPoiRVvoEsptRgS2mY+utwoSKEHPU9AkZWwzTXopKwYzBJhDStAxlBdA+HDZNv9I8OTaFvP9WrFkY09RqquYXgxQfzQsAXWfPGCxKlF1CzGLZBVvlkFIAy/JoKUfMRK8rj02CFH5N6YuaagIVx9cCixNUuWeT3FJ2B5hu/fuhM4eGTFrNiPfVarqnUgTB9EfwXiyzjTQ1lVkbLE789uXvj5jnYXQUHx/U99kqqZjkv1EmVly8dSg+TS7QxJqSc6GW9qTxc7CUcZ0W5kpgcVE5B81vhB4xdn1W5dzF8YVcWU0hgNRmR5XamECrGpNYIUb8fnEcPYI8dVp33ZXB4gYMGygBJPU+OB0fzPxvxvJdLOycgafGAxU0NKetDX25CmyF2eNwXlrLJb7pJTYCy+HGPUi53jddH3oB9BR+ILIFG0mbLaq5ARQFd0yF6sbxaH8rGsGnfvjcVDB7DtU0SJWt1RgsCi6L4LoDJu+x0aLtxcIYHwqT025EXtTxdeIeYiXoph9Hy9b0IdOZmLoxq2BT4SUpiiHfWsPm2FKk0eIPxjqBKpfml/0l6TEa9Q3dTaGrVmtH0uBWNFbegGBqoB1VPwBRbj3g7oGCOQqf4w0OCfOyR9RGH3x8KPQ6VKLmUOxMmhY7omArYOWd88KCRH1CvbsQqDBI9RLzRzcQwsEDHtyuyZl4uLgg4R8YRwZgsyHYAcN/ACauk66lEhFCijhZJUXU7WctYHWb0L0v+V2DblrV+1bNXrXQRoAVN550mVZxMShmDinUmfh1osntVM3dOLDiYbBSijqdu9Ah3wazRxcjR/r4uxmL3pLI89v0oboL2WiwusPd5HsH1hJ9B9aBtUTAklinsQ6sJQKWxDqNdWAtEbAk1mmsA2uJgCWx/wEWfdtE72B26wAAAABJRU5ErkJggg=="
        alt="Attention arrow"
        class="d-block mb-5"
      />`;
            }
          }
          remove(givenParameter) {
            let theLocal = JSON.parse(localStorage.getItem("basketItem"));
            if (theLocal) {
              for (let i = 0; i < this[storedItem].length; i++) {
                if (this[storedItem][i].name == givenParameter) {
                  this[storedItem].splice(i, 1);
                  localStorage.setItem(
                    "basketItem",
                    JSON.stringify(this[storedItem])
                  );
                } else {
                }
              }
            }
          }
          calculateTotal() {
            let theLocal = JSON.parse(localStorage.getItem("basketItem"));
            let totalPrice = 0;
            if (theLocal.length) {
              for (let key of theLocal) {
                totalPrice += key.number * Number(key.price);
              }
              const theTotalElement = (document.querySelector(
                ".total-price"
              ).innerHTML = totalPrice);
            }
          }

          get basketLength() {
            let theLocal = JSON.parse(localStorage.getItem("basketItem"));
            if (theLocal) {
              this[storedItem] = theLocal;
              let totalLenght = 0;
              for (let element of this[storedItem]) {
                totalLenght += Number(element.number);
              }
              return totalLenght;
            } else {
              return 0;
            }
          }
        }

        /***/
      },

    /***/ "./scripts/elements.js":
      /*!*****************************!*\
  !*** ./scripts/elements.js ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ badges: () => /* binding */ badges,
          /* harmony export */ basketContent: () => /* binding */ basketContent,
          /* harmony export */ cartButton: () => /* binding */ cartButton,
          /* harmony export */ guideElements: () => /* binding */ guideElements,
          /* harmony export */ hiddenMenu: () => /* binding */ hiddenMenu,
          /* harmony export */ intersectedElements: () =>
            /* binding */ intersectedElements,
          /* harmony export */ introSectionElements: () =>
            /* binding */ introSectionElements,
          /* harmony export */ itemTitle: () => /* binding */ itemTitle,
          /* harmony export */ menuButtons: () => /* binding */ menuButtons,
          /* harmony export */ menuList: () => /* binding */ menuList,
          /* harmony export */ offCanvasCloseBtn: () =>
            /* binding */ offCanvasCloseBtn,
          /* harmony export */ offCavas: () => /* binding */ offCavas,
          /* harmony export */ orderSubmitButton: () =>
            /* binding */ orderSubmitButton,
          /* harmony export */ outViewContainer: () =>
            /* binding */ outViewContainer,
          /* harmony export */ toggleButton: () => /* binding */ toggleButton,
          /* harmony export */
        });
        const toggleButton = document.querySelector(".toggle-button");
        const hiddenMenu = document.querySelector(".out-of-view");
        const outViewContainer = document.querySelector(
          ".out-of-view-container"
        );
        const cartButton = document.querySelector("#order-cart-button");
        const offCavas = document.querySelector(".off-canvas-container");
        const offCanvasCloseBtn = document.querySelector(".close-style");
        const menuList = document.querySelectorAll(".menu-list");
        const menuButtons = document.querySelectorAll(".menu-btn");
        const itemTitle = document.querySelectorAll(".title-menu");
        const guideElements = document.querySelectorAll(
          ".content-item,.dot-item"
        );
        const intersectedElements = document.querySelectorAll(".observer");
        const introSectionElements =
          document.querySelectorAll(".intro-observe");
        const basketContent = document.querySelector(".off-canvas-content");
        const orderSubmitButton = document.querySelectorAll(
          'input[value="اضافه کردن سفارش"]'
        );
        const badges = document.querySelector(".badge");

        /***/
      },

    /***/ "./scripts/function.js":
      /*!*****************************!*\
  !*** ./scripts/function.js ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ closeCanvas: () => /* binding */ closeCanvas,
          /* harmony export */ ifClickCanvas: () => /* binding */ ifClickCanvas,
          /* harmony export */ scrollTheTitle: () =>
            /* binding */ scrollTheTitle,
          /* harmony export */ selectTheButton: () =>
            /* binding */ selectTheButton,
          /* harmony export */ toggleCart: () => /* binding */ toggleCart,
          /* harmony export */ toggleSub: () => /* binding */ toggleSub,
          /* harmony export */ unsetAll: () => /* binding */ unsetAll,
          /* harmony export */
        });
        /* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./elements */ "./scripts/elements.js");

        function styleChange() {
          _elements__WEBPACK_IMPORTED_MODULE_0__.toggleButton.classList.toggle(
            "theme-bg"
          );
          const toggleChildren =
            _elements__WEBPACK_IMPORTED_MODULE_0__.toggleButton.children;
          for (let element of toggleChildren) {
            element.classList.toggle("toggled-bar");
          }
        }
        function subShow() {}
        function toggleSub() {
          styleChange();
          _elements__WEBPACK_IMPORTED_MODULE_0__.outViewContainer.classList.replace(
            "out-of-view-container",
            "height-grow"
          );
          _elements__WEBPACK_IMPORTED_MODULE_0__.hiddenMenu.classList.toggle(
            "out-of-view"
          );
        }
        function toggleCart() {
          _elements__WEBPACK_IMPORTED_MODULE_0__.offCavas.classList.toggle(
            "d-none"
          );
        }
        function ifClickCanvas(e) {
          if (e.target.classList.contains("off-canvas-container")) {
            _elements__WEBPACK_IMPORTED_MODULE_0__.offCavas.classList.add(
              "d-none"
            );
          }
        }
        function closeCanvas() {
          _elements__WEBPACK_IMPORTED_MODULE_0__.offCavas.classList.add(
            "d-none"
          );
        }
        function unsetAll() {
          _elements__WEBPACK_IMPORTED_MODULE_0__.menuButtons.forEach(function (
            item
          ) {
            item.classList.remove("btn-theme-bg");
            item.classList.remove("text-white");
            if (!item.classList.contains("border")) {
              item.classList.add("border");
            }
          });
        }
        function selectTheButton() {
          unsetAll();
          this.classList.add("btn-theme-bg");
          this.classList.add("text-white");
          this.classList.remove("border");
          for (let list of _elements__WEBPACK_IMPORTED_MODULE_0__.menuList) {
            if (`${this.id}-menu` == list.id) {
              list.classList.remove("d-none");
            } else {
              if (!list.classList.contains("d-none")) {
                list.classList.add("d-none");
              }
            }
          }
        }
        function scrollTheTitle() {
          let itemTitle = document.querySelectorAll(".title-menu");
          if (window.innerWidth >= 576) {
            for (let element of itemTitle) {
              if (element.firstElementChild.innerHTML.length >= 18) {
                element.firstElementChild.classList.add("scroll-animation");
              } else {
                element.firstElementChild.classList.remove("scroll-animation");
              }
            }
          }
        }

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./elements */ "./scripts/elements.js");
    /* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(/*! ./function */ "./scripts/function.js");
    /* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(/*! ./class */ "./scripts/class.js");

    const myBasket = new _class__WEBPACK_IMPORTED_MODULE_2__.Cart();
    const updateBasketLenth = function () {
      _elements__WEBPACK_IMPORTED_MODULE_0__.badges.innerHTML =
        myBasket.basketLength;
    };

    _elements__WEBPACK_IMPORTED_MODULE_0__.toggleButton.addEventListener(
      "click",
      _function__WEBPACK_IMPORTED_MODULE_1__.toggleSub
    );
    _elements__WEBPACK_IMPORTED_MODULE_0__.cartButton.addEventListener(
      "click",
      _function__WEBPACK_IMPORTED_MODULE_1__.toggleCart
    );
    document.addEventListener(
      "click",
      _function__WEBPACK_IMPORTED_MODULE_1__.ifClickCanvas
    );
    _elements__WEBPACK_IMPORTED_MODULE_0__.offCanvasCloseBtn.addEventListener(
      "click",
      _function__WEBPACK_IMPORTED_MODULE_1__.closeCanvas
    );

    _elements__WEBPACK_IMPORTED_MODULE_0__.menuButtons.forEach((item) =>
      item.addEventListener(
        "click",
        _function__WEBPACK_IMPORTED_MODULE_1__.selectTheButton
      )
    );

    (0, _function__WEBPACK_IMPORTED_MODULE_1__.scrollTheTitle)();

    _elements__WEBPACK_IMPORTED_MODULE_0__.guideElements.forEach((item) =>
      _class__WEBPACK_IMPORTED_MODULE_2__.guideObserver.observe(item)
    );
    _elements__WEBPACK_IMPORTED_MODULE_0__.intersectedElements.forEach((item) =>
      _class__WEBPACK_IMPORTED_MODULE_2__.obs.observe(item)
    );
    _elements__WEBPACK_IMPORTED_MODULE_0__.introSectionElements.forEach(
      (item) => _class__WEBPACK_IMPORTED_MODULE_2__.simpleObserver.observe(item)
    );

    let test = myBasket.basketLength;

    updateBasketLenth();
    myBasket.render();

    _elements__WEBPACK_IMPORTED_MODULE_0__.orderSubmitButton.forEach((item) =>
      item.addEventListener("click", function () {
        let orderName =
          item.parentElement.parentElement.parentElement.firstElementChild
            .firstElementChild.firstElementChild.innerHTML;
        let orderimage =
          item.parentElement.parentElement.parentElement.parentElement
            .firstElementChild.firstElementChild.firstElementChild;
        let orderNumber = item.previousElementSibling.value;
        let orderPrice =
          item.parentElement.parentElement.parentElement.firstElementChild
            .lastElementChild.innerHTML;

        orderPrice = orderPrice.split("تومان")[0];

        myBasket.storeToSingle(
          orderName,
          orderimage.src,
          Number(orderNumber),
          Number(orderPrice)
        );
        updateBasketLenth();
        myBasket.render();
      })
    );

    document.addEventListener("click", function (e) {
      if (e.target.classList.contains("order-delete")) {
        let orderName =
          e.target.parentElement.previousElementSibling.firstElementChild
            .nextElementSibling.firstElementChild.innerHTML;
        myBasket.remove(orderName);
        updateBasketLenth();
        myBasket.render();
      }
    });
  })();

  /******/
})();
