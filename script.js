const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("active");
});

// Keyboard accessibility for hamburger
hamburger.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    hamburger.click();
  }
});

// Simple submit handler for query form (you can expand this)
document.getElementById("queryForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const query = e.target.query.value.trim();
  if (query) {
    alert(`Thanks for your query:\n"${query}"\nWe'll get back to you soon!`);
    e.target.reset();
  }
});
