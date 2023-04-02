const menuItem = document.querySelectorAll(".menu-item");
document.addEventListener("click", function (e) {
  let element = e.target;
  if (element.classList[0] == "menu-item") {
    for (let index = 0; index < menuItem.length; index++) {
      if (menuItem[index] != element) {
        menuItem[index].classList.remove("selected-menu-item");
        menuItem[index].classList.add("unselected-menu-item");
      }
    }
    element.classList.remove("unselected-menu-item");
    element.classList.add("selected-menu-item");
  }
});
