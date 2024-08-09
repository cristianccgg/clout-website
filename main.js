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

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("followers-slider");
  const tooltip = document.getElementById("slider-tooltip");

  function updateValues() {
    const followers = parseInt(slider.value, 10);
    const earnings = (followers * 0.02 * 0.85).toFixed(2);

    const percent =
      ((followers - slider.min) / (slider.max - slider.min)) * 100;
    tooltip.style.left = `calc(${percent}% + (${10 - percent * 0.2}px))`;

    tooltip.innerHTML = `<span class="tooltip-earnings">$${earnings}</span><br><span class="tooltip-followers">${followers.toLocaleString()} followers</span>`;
  }

  slider.addEventListener("input", updateValues);

  // Inicializa valores en carga de la página
  updateValues();
});

const ecommerceBtn = document.getElementById("ecommerce-btn");
const saasBtn = document.getElementById("saas-btn");
const appsBtn = document.getElementById("apps-btn");
const benefitsContainer = document.getElementById("benefits-container");

const ecommerceBenefits = `
        <h1>30% higher conversion <br class="lg:hidden" /> rates than traditional marketing</h1>
        <h1>
          Make fans <br class="lg:hidden" />not just customers 
        </h1>
        <h1>Lower content costs</h1>
      </div>`;

const saasBenefits = `
        <h1>37% higher retention <br class="lg:hidden" /> than traditional channels</h1>
        <h1>
          Lower CAC
        </h1>
        <h1>Build trust</h1>
      </div>`;

const appsBenefits = `<h1>37% higher retention</h1>
        <h1>
          Control your CPI <br class="lg:hidden" />(Cost Per Install)
          <br class="lg:hidden" />
          and reduce wasted spend
        </h1>
        <h1>30% higher conversion rates</h1>`;

ecommerceBtn.addEventListener("click", () => {
  benefitsContainer.innerHTML = ecommerceBenefits;
});

saasBtn.addEventListener("click", () => {
  benefitsContainer.innerHTML = saasBenefits;
});

appsBtn.addEventListener("click", () => {
  benefitsContainer.innerHTML = appsBenefits;
});
