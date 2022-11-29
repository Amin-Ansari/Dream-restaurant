import { toggleButton } from "./elements";
import { hiddenMenu } from "./elements";

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
