import {leftSection, rightSection} from "./data.js";

const leftContainer = document.querySelector('.mega-menu-left');
leftContainer.innerHTML = Object.entries(leftSection).map(([key, section]) => `
  <div class="left-box">
    <h2 class="title">${section.title}</h2>
    <ul class="list">
      ${section.items.map(item => `
        <li class="list-item">${item}</li>
      `).join('')}
    </ul>
  </div>
`).join('');

const rightContainer = document.querySelector('.right-box');
rightContainer.innerHTML = rightSection.map(item => `
  <div class="right-box">
    <img class="right-box-img" src="${item.image}">
    <div class="right-box-content">
      <h3 class="right-box-content-title">${item.title}<img class="arrow-right" src="styles/photos/JavaScript_training.code-workspace.svg"></h3>
      <p class="right-box-content-description">${item.description}</p>
    </div>
  </div>
`).join('');

const dropdownButton = document.querySelector('.dropdown-button');
dropdownButton.addEventListener('click', function() {
  const megaMenu = document.querySelector('.mega-menu');
  const arrow = document.querySelector('.header-arrow');
  arrow.classList.toggle('rotated');
  megaMenu.classList.toggle('visible');
});