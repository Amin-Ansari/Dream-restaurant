import { basketContent } from "./elements";
export const obs = new IntersectionObserver(function (entry) {
  for (let element of entry) {
    if (element.isIntersecting) {
      element.target.classList.replace("img-anim-up", "scale-up-img");
      element.target.classList.replace("h-anim-right", "move-to-right-title");
      element.target.classList.replace("p-anim-right", "move-to-right-text");
      element.target.classList.replace(
        "button-anim-right",
        "move-to-right-btn"
      );

      element.target.classList.replace("h-anim-left", "move-to-left-title");
      element.target.classList.replace("p-anim-left", "move-to-left-text");
      element.target.classList.replace("button-anim-left", "move-to-left-btn");
    }
  }
});
export const guideObserver = new IntersectionObserver(function (entries) {
  for (let i = 1; i <= entries.length; i++) {
    if (entries[i - 1].isIntersecting) {
      entries[i - 1].target.classList.add(`how-to-item-${i}`);
    }
  }
});

export const simpleObserver = new IntersectionObserver(function (entries) {
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
export class Cart {
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
        basketContent.firstElementChild.insertAdjacentHTML(
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
    if (theLocal.length <= 0) {
      this[storedItem].push(singleItem.get(this));
      localStorage.setItem("basketItem", JSON.stringify(this[storedItem]));
    } else {
      this[storedItem] = theLocal;
      for (let i = 0; i < this[storedItem].length; i++) {
        if (this[storedItem][i].name == singleItem.get(this).name) {
          this[storedItem][i].number += Number(singleItem.get(this).number);
          localStorage.setItem("basketItem", JSON.stringify(this[storedItem]));
          break;
        }
        if (i == this[storedItem].length - 1) {
          this[storedItem].push(singleItem.get(this));
          localStorage.setItem("basketItem", JSON.stringify(this[storedItem]));
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
      basketContent.innerHTML = "";
      basketContent.classList.remove("justify-content-center");
      basketContent.classList.remove("align-items-center");
      basketContent.innerHTML = theCardAddingElements;
      this[orderInfo]();
      this.calculateTotal();
    } else {
      basketContent.innerHTML = "";
      basketContent.classList.add("justify-content-center");
      basketContent.classList.add("align-items-center");
      basketContent.innerHTML = `
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
          localStorage.setItem("basketItem", JSON.stringify(this[storedItem]));
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
