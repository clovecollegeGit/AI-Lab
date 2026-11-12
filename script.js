
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", function() {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    hamburger.setAttribute("aria-expanded", isOpen);
    hamburger.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    hamburger.textContent = isOpen ? "✕" : "☰";
});