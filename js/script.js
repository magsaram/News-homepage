const burger = document.querySelector(".burger");
const closemenu = document.querySelector(".closemenu");
const menu = document.querySelector(".navmobile");
const shaddow = document.querySelector(".shaddow");

burger.addEventListener("click", function () {
  menu.classList.toggle("show");
  shaddow.classList.toggle("show");
});
closemenu.addEventListener("click", function () {
  menu.classList.toggle("show");
  shaddow.classList.toggle("show");
});
