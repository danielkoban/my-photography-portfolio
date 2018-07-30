// Menu button function

const hamburger = document.getElementById("hamburger");
const menu = document.querySelector("nav");

hamburger.addEventListener("click", function(){
	menu.classList.toggle("full-screen-menu");
	hamburger.classList.toggle("twisted");
});