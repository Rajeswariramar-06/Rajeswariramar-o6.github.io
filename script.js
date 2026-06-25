// ======================
// Navbar Shadow on Scroll
// ======================

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(10,25,47,0.95)";
        header.style.boxShadow = "0 5px 30px rgba(0,0,0,0.3)";
    } else {
        header.style.background = "rgba(10,25,47,0.75)";
        header.style.boxShadow = "none";
    }
});


// ======================
// Fade In Animation
// ======================

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });
});

const hiddenElements = document.querySelectorAll(
    ".glass-card, .skill-card, .project-card, .contact-card"
);

hiddenElements.forEach((el) => observer.observe(el));


// ======================
// Smooth Scroll Navigation
// ======================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


// ======================
// Typing Effect
// ======================

const text = "Aspiring Automation Test Engineer";
let index = 0;

function typeEffect() {

    const title = document.querySelector(".hero h2");

    if (index < text.length) {
        title.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}

window.onload = () => {
    const title = document.querySelector(".hero h2");
    title.textContent = "";
    typeEffect();
};
