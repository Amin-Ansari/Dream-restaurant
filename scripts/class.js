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
