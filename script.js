
// ================================
// DARK MODE
// ================================

const toggle = document.getElementById("darkModeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");

  if (toggle) {
    toggle.textContent = "☀️";
  }
}

if (toggle) {
  toggle.addEventListener("click", () => {

    body.classList.toggle("dark-mode");

    const isDarkMode = body.classList.contains("dark-mode");

    localStorage.setItem(
      "theme",
      isDarkMode ? "dark" : "light"
    );

    toggle.textContent = isDarkMode ? "☀️" : "🌙";
  });
}


// ================================
// MOBILE NAVBAR
// ================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });


  // Close menu after clicking a navigation link

  const navItems = navLinks.querySelectorAll("a");

  navItems.forEach((link) => {

    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });

  });

}


// ================================
// CONTACT FORM
// ================================

const form = document.querySelector(".contact-form");

if (form) {

  form.addEventListener("submit", () => {

    alert(
      "Thank you for contacting me! Your message has been sent successfully."
    );

  });

}


// ================================
// CURRENT YEAR
// ================================

const footer = document.querySelector("footer p");

if (footer) {

  const currentYear = new Date().getFullYear();

  footer.innerHTML =
    `© ${currentYear} Khushboo Pundir. All Rights Reserved.`;

}
