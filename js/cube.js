const cube = document.querySelector('.cube');

cube.addEventListener('click', () => {
  cube.classList.add('clicked');
});

cube.addEventListener('animationend', () => {
  cube.classList.remove('clicked');
});
