const burgerMenuLogo = document.querySelector(".header__menu--container");
const menu = document.getElementById("menu");

const boton = document.querySelectorAll(".link");

const openMenu = () => {
  if (menu.style.top === "0px") {
    return (menu.style.top = "-30vh");
  }

  menu.style.top = 0;
};

const closeMenu = () => {
  menu.style.top = "-30vh";
};
boton.forEach((btn) => {
  btn.addEventListener("click", openMenu);
});

burgerMenuLogo.addEventListener("click", openMenu);
