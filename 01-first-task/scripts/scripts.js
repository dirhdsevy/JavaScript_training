import {faqs} from './data.js';

const faqContainer = document.querySelector('.faq-content');
faqContainer.innerHTML = faqs.map(faq => `
  <div class="faq-item">
    <button class="question">${faq.question} <img class="arrow" src="styles/photos/arrow-1.png"></button>
    <div class="answer">${faq.answer}</div>
  </div>
`).join('');

document.querySelectorAll('.question').forEach(button => {
  button.addEventListener('click', function() {
    const answer = this.nextElementSibling;
    const arrow = this.querySelector('.arrow');

    answer.classList.toggle('visible');
    arrow.classList.toggle('rotated');
  });
});