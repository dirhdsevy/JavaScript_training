document.querySelectorAll('.question').forEach(button => {
  button.addEventListener('click', function() {
    const answer = this.nextElementSibling;
    const arrow = this.querySelector('.arrow');

    answer.classList.toggle('visible');
    arrow.classList.toggle('rotated');
  });
});