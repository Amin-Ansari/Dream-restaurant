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
// import { obs } from "./class";

toggleButton.addEventListener("click", toggleSub);
cartButton.addEventListener("click", toggleCart);
document.addEventListener("click", ifClickCanvas);
offCanvasCloseBtn.addEventListener("click", closeCanvas);

menuButtons.forEach((item) => item.addEventListener("click", selectTheButton));

scrollTheTitle();

let obs = new IntersectionObserver(function (entry) {
  for (let element of entry) {
    if (element.isIntersecting) {
      element.target.classList.replace("img-anim-up", "scale-up-img");
      element.target.classList.replace("h-anim-right", "move-to-right-title");
      element.target.classList.replace("p-anim-right", "move-to-right-text");
      element.target.classList.replace(
        "button-anim-right",
        "move-to-right-btn"
      );
    }
  }
});

let intersectedElements = document.querySelectorAll(".observer");

intersectedElements.forEach((item) => obs.observe(item));
