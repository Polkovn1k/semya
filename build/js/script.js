/* ----------MENU MOBILE */
var tog = document.querySelector(".navigation__tog");
var nav =  document.querySelector(".navigation__list");

tog.addEventListener("click", function(event) {
  event.preventDefault();
  nav.classList.toggle("navigation__list--show");
  tog.classList.toggle("navigation__tog--close");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    nav.classList.remove("navigation__list--show");
    tog.classList.remove("navigation__tog--close");
  }
});


/* ----------SHOW "ABOUT" - INDEX */
var showAbout = document.querySelector(".btn--about");
var aboutText =  document.querySelector(".about__text");

showAbout.addEventListener("click", function(event) {
  event.preventDefault();
  aboutText.classList.toggle("about__text--show");
  showAbout.classList.toggle("btn--about-close");
});