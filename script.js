"use strict";
// First Section
const menuItem = document.querySelectorAll(".menu-item");
const menuContent = document.querySelectorAll(".menu-content");
document.addEventListener("click", function (e) {
  let element = e.target;
  if (element.classList[0] == "menu-item") {
    for (let index = 0; index < menuItem.length; index++) {
      if (menuItem[index] != element) {
        menuItem[index].classList.remove("selected-menu-item");
        menuItem[index].classList.add("unselected-menu-item");
        menuContent[index].classList.add("none-display");
      } else if (menuItem[index] == element) {
        element.classList.remove("unselected-menu-item");
        element.classList.add("selected-menu-item");
        menuContent[index].classList.remove("none-display");
      }
    }
  }
});

// Second Section
// Typing Effect
var i = 0;
var txt = "R Front-End Developer";
typeWriter();
function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".typing-effect").innerHTML += txt[i];
    i++;
  } else if (i == txt.length) {
    document.querySelector(".typing-effect").innerHTML = "J";
    i = 0;
  }
  setTimeout(typeWriter, 200);
}

// Third Section
const github = document.querySelector(".github");
const twitter = document.querySelector(".twitter");
const whatsapp = document.querySelector(".whatsapp");

if (window.innerWidth < 600) {
  github.innerHTML = `<i class="fa-brands fa-github"></i
  >`;

  twitter.innerHTML = `<i class="fa-brands fa-twitter"></i
  >`;

  whatsapp.innerHTML = `<i class="fa-brands fa-whatsapp"></i
  >`;
} else {
  github.innerHTML = `<i class="fa-brands fa-square-github"></i
  >`;

  twitter.innerHTML = `<i class="fa-brands fa-square-twitter"></i
  >`;

  whatsapp.innerHTML = `<i class="fa-brands fa-square-whatsapp"></i
  >`;
}

window.addEventListener("resize", (event) => {
  if (window.innerWidth < 600) {
    github.innerHTML = `<i class="fa-brands fa-github"></i
    >`;

    twitter.innerHTML = `<i class="fa-brands fa-twitter"></i
    >`;

    whatsapp.innerHTML = `<i class="fa-brands fa-whatsapp"></i
    >`;
  } else {
    github.innerHTML = `<i class="fa-brands fa-square-github"></i
    >`;

    twitter.innerHTML = `<i class="fa-brands fa-square-twitter"></i
    >`;

    whatsapp.innerHTML = `<i class="fa-brands fa-square-whatsapp"></i
    >`;
  }
});
