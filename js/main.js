!function(){const e=document.querySelector(".header"),t=e.querySelector(".icon-menu"),c=e.querySelector(".menu__body"),o=document.querySelectorAll(".menu__link");t?.addEventListener("click",(function(){t.classList.toggle("_active"),c.classList.toggle("_active")}));for(const e of o)e.addEventListener("click",(()=>{t?.classList.remove("_active"),c?.classList.remove("_active")}))}(),function(){const e=document.querySelectorAll(".footer-menu li");for(const t of e)t.addEventListener("click",(function(){this.querySelector(".footer-menu__item")?.classList.toggle("_active"),this.querySelector(".footer-menu__submenu")?.classList.toggle("_active")}))}(),document.querySelector(".search__btn")?.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(".search")?.classList.toggle("_active"),document.querySelector(".search__input")?.classList.toggle("_active"),this.classList.toggle("_active")}));