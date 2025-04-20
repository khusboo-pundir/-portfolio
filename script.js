// script.js

// Dark mode toggle
const toggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check if user has dark mode saved from before
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}

// Toggle dark mode on button click
toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Contact form submission (dummy handler)
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message, Khushboo will get back to you soon!');
  form.reset();
});

