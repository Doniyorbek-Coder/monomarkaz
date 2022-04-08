let searchModal = document.querySelector(".search-modal");
let searchButton = document.querySelector(".nav__link-search");
let modalClose = document.querySelector(".modal-close");
let dropDown = document.querySelector(".dropdown-list");
let navLink = document.querySelector("#nav__link");
let hamburger = document.querySelector(".hamburger");
let navList = document.querySelector(".nav__list");

searchButton.addEventListener("click", (e) => {
  searchModal.classList.toggle("show");
});

modalClose.addEventListener("click", (e) => {
  searchModal.classList.toggle("show");
});

navLink.addEventListener("click", (e) => {
  dropDown.classList.toggle("shows");
});

hamburger.addEventListener("click", (e) => {
  navList.classList.toggle("showss");
});
