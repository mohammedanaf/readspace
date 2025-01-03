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

//  Special Offer Countdown
document.addEventListener('DOMContentLoaded', (event) => {
    const countdownDate = new Date("Dec 31, 2025 23:59:59").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("days").textContent = "0";
            document.getElementById("hours").textContent = "0";
            document.getElementById("minutes").textContent = "0";
            document.getElementById("seconds").textContent = "0";
        }
    }

    const interval = setInterval(updateCountdown, 1000);
});
