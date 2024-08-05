const hambBtn = document.getElementById("hamb-btn");
const navLinks = document.getElementById("nav-links");

hambBtn.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
});
