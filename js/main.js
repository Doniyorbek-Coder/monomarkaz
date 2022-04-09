let searchModal = document.querySelector(".search-modal");
let searchButton = document.querySelector(".nav__link-search");
let modalClose = document.querySelector(".modal-close");
let dropDown = document.querySelector(".dropdown-list");
let hamburger = document.querySelector(".hamburger");
let navList = document.querySelector(".nav__list");

searchButton.addEventListener("click", (e) => {
  searchModal.classList.toggle("show");
});

modalClose.addEventListener("click", (e) => {
  searchModal.classList.toggle("show");
});

hamburger.addEventListener("click", (e) => {
  navList.classList.toggle("showss");
});

// var coll = document.getElementsByClassName("nav__link");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function () {
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }
