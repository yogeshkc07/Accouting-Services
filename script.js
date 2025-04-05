const hamburger = document.querySelector(".hamburger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const mobileNav = document.querySelector(".mobileNav");

hamburger.addEventListener("click", function () {
  bar1.classList.toggle("animateflipBar1");
  bar2.classList.toggle("animatefadeBar2");
  bar3.classList.toggle("animateflipBar3");
  mobileNav.classList.toggle("openMobileNav");
});
console.log(hamburger);
console.log("hello");
