const burgerMenuLogo = document.querySelector(".header__menu--container");
const menu = document.getElementById("menu");

const boton = document.querySelectorAll(".link");

const openMenu = () => {
  menu.classList.toggle("open");
};
boton.forEach((btn) => {
  btn.addEventListener("click", openMenu);
});

burgerMenuLogo.addEventListener("click", openMenu);
