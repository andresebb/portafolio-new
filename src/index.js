const body = document.getElementById("body");
const loader = document.getElementById("loader");
const objetoAObservar = document.getElementById("interseption");

console.log(objetoAObservar);

window.onload = function () {
  body.classList.remove("hidden");
  loader.remove();
  console.log("se cargo");
};

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

const observer = new IntersectionObserver(observadora, {
  threshold: 0.5,
});

observer.observe(objetoAObservar);

function observadora(entries) {
  const entry = entries[0];
  console.log(entry);
  console.log(entry.intersectionRect);
}
