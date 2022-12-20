import { toggleButton } from "./elements";
import { toggleSub } from "./function";
import { cartButton } from "./elements";
import { offCanvasCloseBtn } from "./elements";
import { toggleCart } from "./function";
import { ifClickCanvas } from "./function";
import { closeCanvas } from "./function";
import { menuButtons } from "./elements";
import { selectTheButton } from "./function";
import { scrollTheTitle } from "./function";
import { guideElements } from "./elements";
import { intersectedElements } from "./elements";
import { introSectionElements } from "./elements";
import { obs } from "./class";
import { guideObserver } from "./class";
import { simpleObserver } from "./class";
import { Cart } from "./class";
import { basketContent } from "./elements";
import { orderSubmitButton } from "./elements";
import { badges } from "./elements";

const myBasket = new Cart();
const updateBasketLenth = function () {
  badges.innerHTML = myBasket.basketLength;
};

toggleButton.addEventListener("click", toggleSub);
cartButton.addEventListener("click", toggleCart);
document.addEventListener("click", ifClickCanvas);
offCanvasCloseBtn.addEventListener("click", closeCanvas);

menuButtons.forEach((item) => item.addEventListener("click", selectTheButton));

scrollTheTitle();

guideElements.forEach((item) => guideObserver.observe(item));
intersectedElements.forEach((item) => obs.observe(item));
introSectionElements.forEach((item) => simpleObserver.observe(item));

let test = myBasket.basketLength;

updateBasketLenth();
myBasket.render();

orderSubmitButton.forEach((item) =>
  item.addEventListener("click", function () {
    let orderName =
      item.parentElement.parentElement.parentElement.firstElementChild
        .firstElementChild.firstElementChild.innerHTML;
    let orderimage =
      item.parentElement.parentElement.parentElement.parentElement
        .firstElementChild.firstElementChild.firstElementChild.src;
    let orderNumber = item.previousElementSibling.value;
    let orderPrice =
      item.parentElement.parentElement.parentElement.firstElementChild
        .lastElementChild.innerHTML;

    orderPrice = orderPrice.split("تومان")[0];
    orderimage = orderimage.split("/images")[1];

    myBasket.storeToSingle(
      orderName,
      orderimage,
      Number(orderNumber),
      Number(orderPrice)
    );
    updateBasketLenth();
    myBasket.render();
  })
);
