
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("show");
    menuBtn.textContent = isOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll("#navMenu a").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("show");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

document.getElementById("year").textContent = new Date().getFullYear();
