import { toggleButton } from "./elements";
import { hiddenMenu } from "./elements";
import { cartButton } from "./elements";
import { offCavas } from "./elements";
import { outViewContainer } from "./elements";
import { menuButtons } from "./elements";
import { menuList } from "./elements";

function styleChange() {
  toggleButton.classList.toggle("theme-bg");
  const toggleChildren = toggleButton.children;
  for (let element of toggleChildren) {
    element.classList.toggle("toggled-bar");
  }
}
function subShow() {}
export function toggleSub() {
  styleChange();
  outViewContainer.classList.replace("out-of-view-container", "height-grow");
  hiddenMenu.classList.toggle("out-of-view");
}
export function toggleCart() {
  offCavas.classList.toggle("d-none");
}
export function ifClickCanvas(e) {
  if (e.target.classList.contains("off-canvas-container")) {
    offCavas.classList.add("d-none");
  }
}
export function closeCanvas() {
  offCavas.classList.add("d-none");
}
export function unsetAll() {
  menuButtons.forEach(function (item) {
    item.classList.remove("btn-theme-bg");
    item.classList.remove("text-white");
    if (!item.classList.contains("border")) {
      item.classList.add("border");
    }
  });
}
export function selectTheButton() {
  unsetAll();
  this.classList.add("btn-theme-bg");
  this.classList.add("text-white");
  this.classList.remove("border");
  for (let list of menuList) {
    if (`${this.id}-menu` == list.id) {
      list.classList.remove("d-none");
    } else {
      if (!list.classList.contains("d-none")) {
        list.classList.add("d-none");
      }
    }
  }
}
export function scrollTheTitle() {
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
