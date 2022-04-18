function initScrollSuave() {
  const links = document.querySelectorAll(".js-menu a");

  if (links.length) {
    function scrollSuave(event) {
      event.preventDefault();
      const href = event.target.getAttribute("href");
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    links.forEach((link) => {
      link.addEventListener("click", scrollSuave);
    });
  }
}
initScrollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  const height = window.innerHeight * 0.6;

  if (sections.length) {
    function animacaoScroll() {
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        const isVisible = top - height < 0;
        if (isVisible) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }
    animacaoScroll();

    window.addEventListener("scroll", animacaoScroll);
  }
}
initAnimacaoScroll();
