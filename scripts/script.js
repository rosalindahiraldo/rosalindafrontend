// JavaScript Document

var menuLink = document.querySelector(".menu-link");
var menuLinkIcon = document.querySelector(".menu-link img");
var foldoutMenu = document.querySelector(".foldout");

var menuIsOpen = false;

menuLink.addEventListener("click", function (e) {
  e.preventDefault();
  menuIsOpen = !menuIsOpen;
  if (menuIsOpen) {
    menuLinkIcon.src = "./images/cross.svg";
    foldoutMenu.classList.add("open");
  } else {
    menuLinkIcon.src = "./images/menu.svg";
    foldoutMenu.classList.remove("open");
  }
});
