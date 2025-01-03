'use strict'

// Add event listener on elements

const addEventonElements = function (element, event, callback) {
    if (element.length > 1) {
        for(let i=0 ; i<element.length ; i++) {
            element[i].addEventListener(event, callback);
        }
    } else {
        element.addEventListener(event, callback);
    }
}

// Navbar Toggle

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventonElements(navTogglers, "click", toggleNavbar);

// Active header on scroll

const header = document.querySelector("[data-header]");

const activeHeaderonScroll = function () {
    if (window.scrollY > 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

addEventonElements(window, "scroll", activeHeaderonScroll);
