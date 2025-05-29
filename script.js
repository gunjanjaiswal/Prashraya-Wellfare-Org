document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove("active");
      hamburger.classList.remove("open");
    }
  });
});
