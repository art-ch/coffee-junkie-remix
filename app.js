// date setter
const date = document.querySelector(`.date`);
date.innerHTML = new Date().getFullYear();

// toggle links visibility
const navBtn = document.querySelector(`.nav-btn`);
const links = document.querySelector(`.links-container`);

navBtn.addEventListener(`click`, () => {
  links.classList.toggle(`show-links`);
});

// fixed navbar
const navbar = document.querySelector(`.navbar`);
window.addEventListener(`scroll`, () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add(`fixed-navbar`);
  } else {
    navbar.classList.remove(`fixed-navbar`);
  }
});

// smooth scroll
const scrollLinks = document.querySelectorAll(`.scroll-link`);

scrollLinks.forEach((link) => {
  link.addEventListener(`click`, (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute(`href`).slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = links.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains(`fixed-navbar`);
    let position = element.offsetTop - navHeight;
    console.log(navHeight);
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 122) {
      position += containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    links.classList.remove(`show-links`);
  });
});
