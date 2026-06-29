// script.js — JavaScript goes here

document.addEventListener("DOMContentLoaded", () => {
    console.log("Website ready!");
});

// nav.js — Hamburger Menu Toggle

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerLines = document.querySelectorAll(".hamburger-line");

function openMenu() {
    mobileMenu.classList.remove("-translate-y-full", "opacity-0", "pointer-events-none");
    hamburgerLines[0].classList.add("rotate-45", "translate-y-2");
    hamburgerLines[1].classList.add("opacity-0");
    hamburgerLines[2].classList.add("-rotate-45", "-translate-y-2");
}

function closeMenu() {
    mobileMenu.classList.add("-translate-y-full", "opacity-0", "pointer-events-none");
    hamburgerLines[0].classList.remove("rotate-45", "translate-y-2");
    hamburgerLines[1].classList.remove("opacity-0");
    hamburgerLines[2].classList.remove("-rotate-45", "-translate-y-2");
}

hamburger.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("-translate-y-full");
    isOpen ? closeMenu() : openMenu();
});

document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        closeMenu();
    }
});

mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeMenu());
});

// ------------------ swiper js ------------------
const swiper = new Swiper(".swiper", {
    loop: true,
    speed: 2000,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        480: { slidesPerView: 4, spaceBetween: 30 },
        768: { slidesPerView: 4, spaceBetween: 40 },
        1024: { slidesPerView: 6, spaceBetween: 50 },
    },
});
