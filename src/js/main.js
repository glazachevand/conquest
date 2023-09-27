burgerHandler();
dropdownHandler();
searchHandler();

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
