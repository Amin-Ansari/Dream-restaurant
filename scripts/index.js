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
import { obs } from "./class";
import { guideObserver } from "./class";

toggleButton.addEventListener("click", toggleSub);
cartButton.addEventListener("click", toggleCart);
document.addEventListener("click", ifClickCanvas);
offCanvasCloseBtn.addEventListener("click", closeCanvas);

menuButtons.forEach((item) => item.addEventListener("click", selectTheButton));

scrollTheTitle();

guideElements.forEach((item) => guideObserver.observe(item));

intersectedElements.forEach((item) => obs.observe(item));
