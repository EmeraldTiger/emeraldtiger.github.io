"use strict";

// change this whenever a new update releases with new maps
const numberOfMaps = 'X';
if (document.getElementById("mapcount")) {
	document.getElementById("mapcount").innerHTML = numberOfMaps;
}

// Nav bar

var nav = document.getElementById("nav").innerHTML = 
	'<button class="fa fa-bars" id="menu-icon"></button>' +
	'<div id="menu">' +
	'<a class="menu-item" href="home">Home</a>' +
	'<a href="download.html" class="menu-item" href="home">Downloads</a>' +
	'<a href="gallery.html" class="menu-item" href="home">Gallery</a>' +
	'<a href="https://github.com/EmeraldTiger/Re-Mobilize/wiki" class="menu-item" href="home">Wiki</a>' +
	'<a href="https://github.com/EmeraldTiger/Re-Mobilize" class="menu-item" href="home">GitHub</a>' +
	'<a class="menu-item" href="home">Credits</a>' +
	'</div>'


// Accordions for the mechanics

var acc = document.getElementsByClassName("accordion");
var panels = document.getElementsByClassName("panel");
var i;

var minSize = window.matchMedia("(min-width: 768px)");

if (minSize.matches) {
	Array.prototype.forEach.call(panels, (item) => {
		item.style.transition = "max-height 0s ease-out;"
		item.style.maxHeight = item.scrollHeight + "px";
	});
}
else {
	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", toggleSlide);
	}
}

function toggleSlide() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
	

	if (panel.style.maxHeight) {
		panel.style.maxHeight = null;
	} else {
		panel.style.maxHeight = panel.scrollHeight + "px";
	}
		
	// deactivate other slides
	for (i = 0; i < acc.length; i++) {
		if (acc[i] != this) {
			acc[i].classList.remove("active");
			acc[i].nextElementSibling.style.maxHeight = null;
		}
	}
	

}

var menuButton = document.getElementById("menu-icon");
var menu = document.getElementById("menu");

menuButton.addEventListener("touchstart", toggleMenu);

menuButton.addEventListener("mouseover", enableMenu);
menu.addEventListener("mouseout", (event) => {
  if (!menu.contains(event.relatedTarget)) {
    disableMenu();
  }
});

function toggleMenu() {
	if (menu.style.maxHeight) {
      menu.style.maxHeight = null;
    } else {
      menu.style.maxHeight = menu.scrollHeight + "px";
    }
}

function enableMenu() {
	menu.style.maxHeight = menu.scrollHeight + "px";
}

function disableMenu() {
	menu.style.maxHeight = null;
}

// Carousel map screenshots