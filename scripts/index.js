import { toggleButton } from "./elements";
import { toggleSub } from "./function";
import { cartButton } from "./elements";
import { offCanvasCloseBtn } from "./elements";
import { toggleCart } from "./function";
import { ifClickCanvas } from "./function";
import { closeCanvas } from "./function";

toggleButton.addEventListener("click", toggleSub);
cartButton.addEventListener("click", toggleCart);
document.addEventListener("click", ifClickCanvas);
offCanvasCloseBtn.addEventListener("click", closeCanvas);
