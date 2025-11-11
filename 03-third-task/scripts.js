const dropdownButton = document.querySelector('.dropdown-button');
dropdownButton.addEventListener('click', function() {
  const megaMenu = document.querySelector('.mega-menu');
  const arrow = document.querySelector('.header-arrow');
  arrow.classList.toggle('rotated');
  megaMenu.classList.toggle('visible');
});