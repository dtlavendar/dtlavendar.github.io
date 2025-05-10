// Update copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Simple animation on page load
document.addEventListener("DOMContentLoaded", function () {
  const mainContent = document.querySelector("main");
  if (mainContent) {
    mainContent.style.opacity = 0;
    mainContent.style.transform = "translateY(20px)";
    setTimeout(() => {
      mainContent.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      mainContent.style.opacity = 1;
      mainContent.style.transform = "translateY(0)";
    }, 100);
  }
});
