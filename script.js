document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.querySelector(".toggle");
    const nav = document.querySelector(".nav-bar");

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }
});

function redirectTo(url) {
    window.location.href = url;
}

// JavaScript para mostrar/ocultar el botón
window.addEventListener('scroll', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});