// Theme toggle — remove this file and its script tag if you prefer a fixed theme.
const root = document.documentElement;
const toggle = document.querySelector('#theme-toggle');
const savedTheme = localStorage.getItem('portfolio-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
function setTheme(theme) {
  root.dataset.theme = theme;
  toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  localStorage.setItem('portfolio-theme', theme);
}
setTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : (prefersDark ? 'dark' : 'light'));
toggle.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
document.querySelector('#year').textContent = new Date().getFullYear();
