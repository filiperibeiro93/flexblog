const links = document.querySelectorAll('.js-menu a');

links.forEach((link) => {
  link.addEventListener('click', scrollSuave)
})