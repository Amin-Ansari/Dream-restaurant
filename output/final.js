(() => {
  "use strict";
  const e = document.querySelector(".toggle-button"),
    t = document.querySelector(".out-of-view"),
    n = document.querySelector(".out-of-view-container"),
    s = document.querySelector("#order-cart-button"),
    i = document.querySelector(".off-canvas-container"),
    l = document.querySelector(".close-style"),
    r = document.querySelectorAll(".menu-list"),
    o = document.querySelectorAll(".menu-btn"),
    a =
      (document.querySelectorAll(".title-menu"),
      document.querySelectorAll(".content-item,.dot-item")),
    c = document.querySelectorAll(".observer"),
    m = document.querySelectorAll(".intro-observe"),
    d = document.querySelector(".off-canvas-content"),
    g = document.querySelectorAll('input[value="اضافه کردن سفارش"]'),
    u = document.querySelector(".badge");
  function h() {
    o.forEach(function (e) {
      e.classList.remove("btn-theme-bg"),
        e.classList.remove("text-white"),
        e.classList.contains("border") || e.classList.add("border");
    }),
      this.classList.add("btn-theme-bg"),
      this.classList.add("text-white"),
      this.classList.remove("border");
    for (let e of r)
      `${this.id}-menu` == e.id
        ? e.classList.remove("d-none")
        : e.classList.contains("d-none") || e.classList.add("d-none");
  }
  const f = new IntersectionObserver(function (e) {
      for (let t of e)
        t.isIntersecting &&
          (t.target.classList.replace("img-anim-up", "scale-up-img"),
          t.target.classList.replace("h-anim-right", "move-to-right-title"),
          t.target.classList.replace("p-anim-right", "move-to-right-text"),
          t.target.classList.replace("button-anim-right", "move-to-right-btn"),
          t.target.classList.replace("h-anim-left", "move-to-left-title"),
          t.target.classList.replace("p-anim-left", "move-to-left-text"),
          t.target.classList.replace("button-anim-left", "move-to-left-btn"));
    }),
    b = new IntersectionObserver(function (e) {
      for (let t = 1; t <= e.length; t++)
        e[t - 1].isIntersecting &&
          e[t - 1].target.classList.add(`how-to-item-${t}`);
    }),
    v = new IntersectionObserver(function (e) {
      for (let t of e)
        t.isIntersecting &&
          (t.target.classList.contains("intro-show") ||
            t.target.classList.add("intro-show"));
    });
  let L = Symbol(),
    p = new WeakMap(),
    E = Symbol();
  const A = new (class {
      constructor() {
        (this[L] = []),
          p.set(this, {
            name: void 0,
            image: void 0,
            number: void 0,
            price: void 0,
          }),
          (this[E] = function () {
            for (let e of this[L])
              d.firstElementChild.insertAdjacentHTML(
                "beforeend",
                `\n        <li class="card-item d-flex justify-content-between mt-3 mb-3">\n<div class="order-info d-flex align-items-center">\n  <img src="${e.image}" alt="Image of the order" class="order-image-style">\n<div class="info-context d-block">\n<h5 class="m-0 p-0">${e.name}</h5>\n<p class="m-0 p-0">${e.price}تومان </p>\n<p class="m-0 p-0">${e.number} عدد</p>\n</div>\n</div>\n<div class="delete-container d-flex align-items-center">\n  <button class="btn order-delete">حذف</button>\n</div>\n</li>`
              );
          });
      }
      storeToLocal() {
        let e = JSON.parse(localStorage.getItem("basketItem"));
        if (e.length <= 0)
          this[L].push(p.get(this)),
            localStorage.setItem("basketItem", JSON.stringify(this[L]));
        else {
          this[L] = e;
          for (let e = 0; e < this[L].length; e++) {
            if (this[L][e].name == p.get(this).name) {
              (this[L][e].number += Number(p.get(this).number)),
                localStorage.setItem("basketItem", JSON.stringify(this[L]));
              break;
            }
            e == this[L].length - 1 &&
              (this[L].push(p.get(this)),
              localStorage.setItem("basketItem", JSON.stringify(this[L])));
          }
        }
      }
      storeToSingle(e, t, n, s) {
        (p.get(this).name = e),
          (p.get(this).image = t),
          (p.get(this).number = n),
          (p.get(this).price = s),
          this.storeToLocal();
      }
      render() {
        this.basketLength > 0
          ? ((d.innerHTML = ""),
            d.classList.remove("justify-content-center"),
            d.classList.remove("align-items-center"),
            (d.innerHTML =
              '\n<ul class="card-list"></ul>\n<div class="total-contianer d-flex justify-content-between flex-wrap">\n<h3 class="total-sum-title m-0">قیمت کل:</h3>\n<div class="d-flex align-items-center">\n<p class="d-inline-block total-price m-0 ms-2"></p>\nتومان\n</div>\n</div>\n<div class="p-1 mt-3 pay-btn">\n<button type="button" class="btn w-100 theme-bg text-white">تسویه حساب</button>\n</div>\n'),
            this[E](),
            this.calculateTotal())
          : ((d.innerHTML = ""),
            d.classList.add("justify-content-center"),
            d.classList.add("align-items-center"),
            (d.innerHTML =
              '\n      <p class="empty-p mb-4">سبد خرید شما خالی میباشد</p>\n      <button class="btn btn-start-style text-white mb-1">\n        سفارش اضافه کنید\n      </button>\n      <img\n        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAA1CAYAAADbNhwDAAAFjElEQVR4Xu2aTXLbNhSAAUptmp17gioniD1jd7qUknZqJ4tGN5BO0OgEiU5g5wRxTmB70didNpG668SeKXOCsCcod5k0FtH3wB+BIEiAIiFXCTjjhYfAA/Dh/VOUuMcKAWpFqhNKHFhLSuDAOrCWCFgS6zTWgbVEwJJYp7EOrCUClsQ6jV0X2L2L2SEjpEcXZHr5cOBbWveTF5vT2L1fZtukw/5anpoeXe4PJp88BQsHzIHdffnqMfXoYXEdB7gu+7zGXryegYB+uRAH2BRwBrboBkpF+GRBx87/ViPOwO7+OntCGXuaDmeEnnrR4gXzOj8RwkayGBpFwzcPvj81vcHPbdxSYy9ev4PD9zKwbDG4Ovhhjv/H2kx+lgCHHUZ3/jwYBJ8bNJPzcrCyG0BtvdofDGUBRcD0GLKGsclCpmO2T2Zb3a+ut3F8l3SDTb04DlZ2AzozFwD3LvfvDUyhVY1DoF/cJk/AKh6JlhPP2bygGWts3g34AGunDVimMhKLOSkCXUoosyLTNdYxbvf8tz6lnUNQzCmNNYX9k/nWiE2uHtw/Sv+Pc1vvG1uFQrI++vct3eF1lqSbb/M9VqxgbY9hjRD2Oaayf4WAdEf0a6DNCH3LlsbIbqjq8Lb20AR44sIQ6iiFitlSqrFYxvbgr+AGcm5iQXfazF812gp9Coq9ijDZNNdo+eKbQGk6twwqjwrcxybpFIuit6IbiP3v7PkyzWo3C0h8ElZ74hOyiE2vP3jH/nAAUPPBFd7lXFVTOKvO59nLbfKcxsGWyPvStg33zl+NCKUAlz8hBLavV92MPE/Vm1D5UcF/kf+DO5ChqrIWLVg5uBHGxpcH94/bgCsC47delj8LVnPTYIsZDD3++J5MUutKuWjBclO8mJ2kKt+m1prmz9L687Zy57rKkbguTAvTDMb/+J4OZKgo1wjsd+ez3oIyTIn4wyh9evXjYFp3YwVXIPUnVIFJEeBuBGzitqCAyaBWlvRGYBFIPoiRVvoEsptRgS2mY+utwoSKEHPU9AkZWwzTXopKwYzBJhDStAxlBdA+HDZNv9I8OTaFvP9WrFkY09RqquYXgxQfzQsAXWfPGCxKlF1CzGLZBVvlkFIAy/JoKUfMRK8rj02CFH5N6YuaagIVx9cCixNUuWeT3FJ2B5hu/fuhM4eGTFrNiPfVarqnUgTB9EfwXiyzjTQ1lVkbLE789uXvj5jnYXQUHx/U99kqqZjkv1EmVly8dSg+TS7QxJqSc6GW9qTxc7CUcZ0W5kpgcVE5B81vhB4xdn1W5dzF8YVcWU0hgNRmR5XamECrGpNYIUb8fnEcPYI8dVp33ZXB4gYMGygBJPU+OB0fzPxvxvJdLOycgafGAxU0NKetDX25CmyF2eNwXlrLJb7pJTYCy+HGPUi53jddH3oB9BR+ILIFG0mbLaq5ARQFd0yF6sbxaH8rGsGnfvjcVDB7DtU0SJWt1RgsCi6L4LoDJu+x0aLtxcIYHwqT025EXtTxdeIeYiXoph9Hy9b0IdOZmLoxq2BT4SUpiiHfWsPm2FKk0eIPxjqBKpfml/0l6TEa9Q3dTaGrVmtH0uBWNFbegGBqoB1VPwBRbj3g7oGCOQqf4w0OCfOyR9RGH3x8KPQ6VKLmUOxMmhY7omArYOWd88KCRH1CvbsQqDBI9RLzRzcQwsEDHtyuyZl4uLgg4R8YRwZgsyHYAcN/ACauk66lEhFCijhZJUXU7WctYHWb0L0v+V2DblrV+1bNXrXQRoAVN550mVZxMShmDinUmfh1osntVM3dOLDiYbBSijqdu9Ah3wazRxcjR/r4uxmL3pLI89v0oboL2WiwusPd5HsH1hJ9B9aBtUTAklinsQ6sJQKWxDqNdWAtEbAk1mmsA2uJgCWx/wEWfdtE72B26wAAAABJRU5ErkJggg=="\n        alt="Attention arrow"\n        class="d-block mb-5"\n      />'));
      }
      remove(e) {
        if (JSON.parse(localStorage.getItem("basketItem")))
          for (let t = 0; t < this[L].length; t++)
            this[L][t].name == e &&
              (this[L].splice(t, 1),
              localStorage.setItem("basketItem", JSON.stringify(this[L])));
      }
      calculateTotal() {
        let e = JSON.parse(localStorage.getItem("basketItem")),
          t = 0;
        if (e.length) {
          for (let n of e) t += n.number * Number(n.price);
          document.querySelector(".total-price").innerHTML = t;
        }
      }
      get basketLength() {
        let e = JSON.parse(localStorage.getItem("basketItem"));
        if (e) {
          this[L] = e;
          let t = 0;
          for (let e of this[L]) t += Number(e.number);
          return t;
        }
        return 0;
      }
    })(),
    S = function () {
      u.innerHTML = A.basketLength;
    };
  e.addEventListener("click", function () {
    !(function () {
      e.classList.toggle("theme-bg");
      const t = e.children;
      for (let e of t) e.classList.toggle("toggled-bar");
    })(),
      n.classList.replace("out-of-view-container", "height-grow"),
      t.classList.toggle("out-of-view");
  }),
    s.addEventListener("click", function () {
      i.classList.toggle("d-none");
    }),
    document.addEventListener("click", function (e) {
      e.target.classList.contains("off-canvas-container") &&
        i.classList.add("d-none");
    }),
    l.addEventListener("click", function () {
      i.classList.add("d-none");
    }),
    o.forEach((e) => e.addEventListener("click", h)),
    (function () {
      let e = document.querySelectorAll(".title-menu");
      if (window.innerWidth >= 576)
        for (let t of e)
          t.firstElementChild.innerHTML.length >= 18
            ? t.firstElementChild.classList.add("scroll-animation")
            : t.firstElementChild.classList.remove("scroll-animation");
    })(),
    a.forEach((e) => b.observe(e)),
    c.forEach((e) => f.observe(e)),
    m.forEach((e) => v.observe(e)),
    A.basketLength,
    S(),
    A.render(),
    g.forEach((e) =>
      e.addEventListener("click", function () {
        let t =
            e.parentElement.parentElement.parentElement.firstElementChild
              .firstElementChild.firstElementChild.innerHTML,
          n =
            e.parentElement.parentElement.parentElement.parentElement
              .firstElementChild.firstElementChild.firstElementChild,
          s = e.previousElementSibling.value,
          i =
            e.parentElement.parentElement.parentElement.firstElementChild
              .lastElementChild.innerHTML;
        (i = i.split("تومان")[0]),
          A.storeToSingle(t, n.src, Number(s), Number(i)),
          S(),
          A.render();
      })
    ),
    document.addEventListener("click", function (e) {
      if (e.target.classList.contains("order-delete")) {
        let t =
          e.target.parentElement.previousElementSibling.firstElementChild
            .nextElementSibling.firstElementChild.innerHTML;
        A.remove(t), S(), A.render();
      }
    });
})();
