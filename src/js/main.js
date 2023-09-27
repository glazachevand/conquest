import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

burgerHandler();
dropdownHandler();
searchHandler();
seeAll();
swiperFunc();

function burgerHandler() {
  const header = document.querySelector(".header");
  const iconMenu = header.querySelector(".icon-menu");
  const menuBody = header.querySelector(".menu__body");
  const links = document.querySelectorAll(".menu__link")

  iconMenu?.addEventListener("click", function () {
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });

  for (const link of links) {
    link.addEventListener('click', () => {
      iconMenu?.classList.remove("_active");
      menuBody?.classList.remove("_active");
    });
  }
}

function dropdownHandler() {
  const footerMenuItems = document.querySelectorAll(".footer-menu li");

  for (const item of footerMenuItems) {
    item.addEventListener("click", function () {
      this.querySelector(".footer-menu__item")?.classList.toggle("_active");
      this.querySelector(".footer-menu__submenu")?.classList.toggle("_active");
    });
  }
}

function searchHandler() {
  const searchBtn = document.querySelector(".search__btn");

  searchBtn?.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".search")?.classList.toggle("_active");
    document.querySelector(".search__input")?.classList.toggle("_active");
    this.classList.toggle("_active");
  });
}

function seeAll() {
  const watches = document.querySelectorAll('.watches');
  const btn = document.querySelector('.popular__see-all');
  // число видимых элементов изначально
  const n = 3;

  for (let i = 0; i < n; i++) {
    watches[i].style.display = 'block';
  }

  btn?.addEventListener('click', () => {
    for (let i = n; i < watches.length; i++) {
      watches[i].style.display = 'block';
    }
  });
}

function swiperFunc() {
  const swiperBanner = new Swiper('.banner__swiper', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.banner__button-next',
      prevEl: '.banner__button-prev',
    },
    pagination: {
      el: ".banner__pagination-container",
      type: 'custom',
      clickable: true,
      renderCustom: function (swiper, current, total) {

        return `<span>${total < 10 ? '0' + current : current}</span>`;
      }
    },
  });
}

