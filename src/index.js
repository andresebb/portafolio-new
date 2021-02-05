const body = document.getElementById("body");
const loader = document.getElementById("loader");
const header = document.querySelector(".header");
const ObjetoAObsever = document.querySelector(".about__header");

window.onload = function () {
  body.classList.remove("hidden");
  loader.remove();
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

const observer = new IntersectionObserver(callback, {
  // threshold: 0,
});

observer.observe(ObjetoAObsever);
let visibility;

function callback(entries) {
  const entry = entries[0];
  visibility = entry.isIntersecting;
}

window.addEventListener("scroll", () => {
  const top = window.scrollY;

  if (top > 700 && visibility === false) {
    header.style.background =
      "linear-gradient(0deg, #15202b 20%, #213a57 100%)";
  } else {
    header.style.background = "#15202b";
  }
});
