burgerHandler();
dropdownHandler();

function burgerHandler() {
  const header = document.querySelector(".header");
  const iconMenu = document.querySelector(".icon-menu");
  const menuBody = document.querySelector(".menu__body");

  iconMenu?.addEventListener("click", function (e) {
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

function dropdownHandler() {
  const footerMenuItems = document.querySelectorAll(".footer-menu li");

  for (const item of footerMenuItems) {
    item.addEventListener("click", () => {
      item.querySelector(".footer-menu__item")?.classList.toggle("_active");
      item.querySelector(".footer-menu__submenu")?.classList.toggle("_active");
    });
  }
}
