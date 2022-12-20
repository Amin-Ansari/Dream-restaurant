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
export class Cart {
  constructor() {
    (this[storedItem] = []),
      singleItem.set(this, {
        name: undefined,
        image: undefined,
        number: undefined,
        price: undefined,
      });
  }
  storeToLocal() {
    let theLocal = JSON.parse(localStorage.getItem("basketItem"));
    if (!theLocal) {
      this[storedItem].push(singleItem.get(this));
      localStorage.setItem("basketItem", JSON.stringify(this[storedItem]));
    } else {
      this[storedItem] = theLocal;
      for (let i = 0; i < this[storedItem].length; i++) {
        console.log("i");
        console.log(this[storedItem].length);
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

  get basketLength() {
    return this[storedItem].length;
  }
}
