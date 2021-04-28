const hamburgerMenu = document.querySelector(".hamburger-img");
const menuClass = document.querySelector(".menu");
const body = document.body;
const buttons = document.querySelectorAll(".button");

const toggleMenu = function () {
  hamburgerMenu.addEventListener("click", function () {
    menuClass.classList.toggle("hide-menu");
  });
};

const changeBackground = function () {
  buttons.forEach(function (item) {
    item.addEventListener("click", function (e) {
      body.removeAttribute("class");
      body.classList.add(e.target.classList[1]);
      menuClass.classList.toggle("hide-menu");
    });
  });
};

toggleMenu();
changeBackground();
