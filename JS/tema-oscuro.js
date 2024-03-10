const darkModeBtn = document.getElementById('dark-mode-btn');
const sections = document.querySelectorAll('section');
const divs = document.querySelectorAll('div');

// Comprueba si hay un tema oscuro almacenado en localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Aplica el tema oscuro si está almacenado en localStorage
if (isDarkMode) {
  sections.forEach(section => {
    section.classList.add('dark-mode');
  });
  divs.forEach(div => {
    div.classList.add('dark-mode');
  });
}

darkModeBtn.addEventListener('click', () => {
  // Alterna entre el tema oscuro y el tema claro
  const isDarkMode = !localStorage.getItem('darkMode') || localStorage.getItem('darkMode') === 'false';

  // Almacena el estado del tema oscuro en localStorage
  localStorage.setItem('darkMode', isDarkMode);

  // Actualiza el tema en todas las páginas del proyecto
  sections.forEach(section => {
    section.classList.toggle('dark-mode', isDarkMode);
  });
  divs.forEach(div => {
    div.classList.toggle('dark-mode', isDarkMode);
  });
});