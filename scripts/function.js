import { toggleButton } from "./elements";
import { hiddenMenu } from "./elements";
import { cartButton } from "./elements";
import { offCavas } from "./elements";

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
