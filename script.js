function initScrollSuave() {
  const links = document.querySelectorAll(".js-menu a");

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
initScrollSuave();