(()=>{"use strict";const t=document.querySelector(".toggle-button"),e=document.querySelector(".out-of-view"),s=document.querySelector(".out-of-view-container"),o=document.querySelector("#order-cart-button"),n=document.querySelector(".off-canvas-container"),i=document.querySelector(".close-style"),c=document.querySelectorAll(".menu-list"),r=document.querySelectorAll(".menu-btn"),l=(document.querySelectorAll(".title-menu"),document.querySelectorAll(".content-item,.dot-item")),a=document.querySelectorAll(".observer"),d=document.querySelectorAll(".intro-observe");function u(){r.forEach((function(t){t.classList.remove("btn-theme-bg"),t.classList.remove("text-white"),t.classList.contains("border")||t.classList.add("border")})),this.classList.add("btn-theme-bg"),this.classList.add("text-white"),this.classList.remove("border");for(let t of c)`${this.id}-menu`==t.id?t.classList.remove("d-none"):t.classList.contains("d-none")||t.classList.add("d-none")}const m=new IntersectionObserver((function(t){for(let e of t)e.isIntersecting&&(e.target.classList.replace("img-anim-up","scale-up-img"),e.target.classList.replace("h-anim-right","move-to-right-title"),e.target.classList.replace("p-anim-right","move-to-right-text"),e.target.classList.replace("button-anim-right","move-to-right-btn"),e.target.classList.replace("h-anim-left","move-to-left-title"),e.target.classList.replace("p-anim-left","move-to-left-text"),e.target.classList.replace("button-anim-left","move-to-left-btn"))})),f=new IntersectionObserver((function(t){for(let e=1;e<=t.length;e++)t[e-1].isIntersecting&&t[e-1].target.classList.add(`how-to-item-${e}`)})),g=new IntersectionObserver((function(t){for(let e of t)e.isIntersecting&&(e.target.classList.contains("intro-show")||e.target.classList.add("intro-show"))}));t.addEventListener("click",(function(){!function(){t.classList.toggle("theme-bg");const e=t.children;for(let t of e)t.classList.toggle("toggled-bar")}(),s.classList.replace("out-of-view-container","height-grow"),e.classList.toggle("out-of-view")})),o.addEventListener("click",(function(){n.classList.toggle("d-none")})),document.addEventListener("click",(function(t){t.target.classList.contains("off-canvas-container")&&n.classList.add("d-none")})),i.addEventListener("click",(function(){n.classList.add("d-none")})),r.forEach((t=>t.addEventListener("click",u))),function(){let t=document.querySelectorAll(".title-menu");if(window.innerWidth>=576)for(let e of t)e.firstElementChild.innerHTML.length>=18?e.firstElementChild.classList.add("scroll-animation"):e.firstElementChild.classList.remove("scroll-animation")}(),l.forEach((t=>f.observe(t))),a.forEach((t=>m.observe(t))),d.forEach((t=>g.observe(t)))})();