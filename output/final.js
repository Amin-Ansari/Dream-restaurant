(()=>{"use strict";const t=document.querySelector(".toggle-button"),e=document.querySelector(".out-of-view"),s=document.querySelector(".out-of-view-container"),i=document.querySelector("#order-cart-button"),o=document.querySelector(".off-canvas-container"),n=document.querySelector(".close-style"),r=document.querySelectorAll(".menu-list"),c=document.querySelectorAll(".menu-btn"),l=(document.querySelectorAll(".title-menu"),document.querySelectorAll(".content-item,.dot-item")),a=document.querySelectorAll(".observer"),m=document.querySelectorAll(".intro-observe");function d(){c.forEach((function(t){t.classList.remove("btn-theme-bg"),t.classList.remove("text-white"),t.classList.contains("border")||t.classList.add("border")})),this.classList.add("btn-theme-bg"),this.classList.add("text-white"),this.classList.remove("border");for(let t of r)`${this.id}-menu`==t.id?t.classList.remove("d-none"):t.classList.contains("d-none")||t.classList.add("d-none")}const g=new IntersectionObserver((function(t){for(let e of t)e.isIntersecting&&(e.target.classList.replace("img-anim-up","scale-up-img"),e.target.classList.replace("h-anim-right","move-to-right-title"),e.target.classList.replace("p-anim-right","move-to-right-text"),e.target.classList.replace("button-anim-right","move-to-right-btn"),e.target.classList.replace("h-anim-left","move-to-left-title"),e.target.classList.replace("p-anim-left","move-to-left-text"),e.target.classList.replace("button-anim-left","move-to-left-btn"))})),u=new IntersectionObserver((function(t){for(let e=1;e<=t.length;e++)t[e-1].isIntersecting&&t[e-1].target.classList.add(`how-to-item-${e}`)})),h=new IntersectionObserver((function(t){for(let e of t)e.isIntersecting&&(e.target.classList.contains("intro-show")||e.target.classList.add("intro-show"))}));let f=Symbol(),L=new WeakMap;t.addEventListener("click",(function(){!function(){t.classList.toggle("theme-bg");const e=t.children;for(let t of e)t.classList.toggle("toggled-bar")}(),s.classList.replace("out-of-view-container","height-grow"),e.classList.toggle("out-of-view")})),i.addEventListener("click",(function(){o.classList.toggle("d-none")})),document.addEventListener("click",(function(t){t.target.classList.contains("off-canvas-container")&&o.classList.add("d-none")})),n.addEventListener("click",(function(){o.classList.add("d-none")})),c.forEach((t=>t.addEventListener("click",d))),function(){let t=document.querySelectorAll(".title-menu");if(window.innerWidth>=576)for(let e of t)e.firstElementChild.innerHTML.length>=18?e.firstElementChild.classList.add("scroll-animation"):e.firstElementChild.classList.remove("scroll-animation")}(),l.forEach((t=>u.observe(t))),a.forEach((t=>g.observe(t))),m.forEach((t=>h.observe(t)));const b=new class{constructor(){this[f]=[],L.set(this,{name:void 0,image:void 0,number:void 0,price:void 0})}storeToLocal(){let t=JSON.parse(localStorage.getItem("basketItem"));if(t){this[f]=t;for(let t=0;t<this[f].length;t++)this[f][t].name===L.get(this).name?(this[f][t].number+=Number(L.get(this).number),localStorage.setItem("basketItem",JSON.stringify(this[f]))):(this[f].push(L.get(this)),localStorage.setItem("basketItem",JSON.stringify(this[f])))}else this[f].push(L.get(this)),localStorage.setItem("basketItem",JSON.stringify(this[f]))}storeToSingle(t,e,s,i){L.get(this).name=t,L.get(this).image=e,L.get(this).number=s,L.get(this).price=i,this.storeToLocal()}get basketLength(){return this[f].length}};document.addEventListener("click",(function(){b.storeToSingle("Burger","...../",1,2e3)}))})();