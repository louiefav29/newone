//////////////////////////////////////////////////////
/////Mobile Navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const HeaderEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  HeaderEl.classList.toggle("nav-open");
})("nav");
