function initializeNavbar() {
  const hambBtn = document.getElementById("hamb-btn");
  const navLinks = document.getElementById("nav-links");

  if (hambBtn && navLinks) {
    hambBtn.addEventListener("click", () => {
      navLinks.classList.toggle("hidden");
    });
  } else {
    console.error("Navbar elements not found.");
  }
}

function initializeFooter() {
  console.log("Footer initialized");
}

function initializeForm() {
  console.log("form initialized");
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-container").innerHTML = data;
      // Inicializa el navbar después de cargarlo
      initializeNavbar();
    });

  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
      // Inicializa el footer después de cargarlo
      initializeFooter();
    });

  fetch("form.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("form-container").innerHTML = data;
      initializeForm();
    });
});
