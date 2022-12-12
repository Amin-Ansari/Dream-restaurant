import { toggleButton } from "./elements";
import { toggleSub } from "./function";
import { cartButton } from "./elements";
import { offCanvasCloseBtn } from "./elements";
import { toggleCart } from "./function";
import { ifClickCanvas } from "./function";
import { closeCanvas } from "./function";
import { menuButtons } from "./elements";
import { selectTheButton } from "./function";
import { itemTitle } from "./elements";

toggleButton.addEventListener("click", toggleSub);
cartButton.addEventListener("click", toggleCart);
document.addEventListener("click", ifClickCanvas);
offCanvasCloseBtn.addEventListener("click", closeCanvas);

menuButtons.forEach((item) => item.addEventListener("click", selectTheButton));

for (let element of itemTitle) {
  element.scrollLeft = 800;
}
