const themeToggle = document.getElementById('theme-toggle');
const themeStyle = document.getElementById('theme-style');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  themeStyle.setAttribute('href', `filmografia-${currentTheme}.css`);
});
