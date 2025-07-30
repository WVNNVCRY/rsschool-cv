const burgerButton = document.querySelector('.header__burger-button');
const headerList = document.querySelector('.header__list');
const headerOverlay = document.querySelector('.header__overlay');
const headerPicture = document.querySelector('.header__nav-picture');
const headerSocial = document.querySelector('.header__social');
const welcomeTitle = document.querySelector('.welcome__title');
const welcomeDescr = document.querySelector('.welcome__descr');
const welcomeButton = document.querySelector('.welcome__button');
const bodyInner = document.body;
const breakPoint = 1024;

function toggleMenu() {
  burgerButton.classList.toggle('is-active');
  headerOverlay.classList.toggle('is-active');
  headerPicture.classList.toggle('is-active');
  headerSocial.classList.toggle('is-active');
  welcomeTitle.classList.toggle('overlay--hidden');
  welcomeDescr.classList.toggle('overlay--hidden');
  welcomeButton.classList.toggle('overlay--hidden');
  bodyInner.classList.toggle('no-scroll')
}

function resetMenuForDesktop() {
  if (window.innerWidth >= breakPoint) {
    burgerButton.classList.remove('is-active');
    headerOverlay.classList.remove('is-active');
    headerPicture.classList.remove('is-active');
    headerSocial.classList.remove('is-active');
    welcomeTitle.classList.remove('overlay--hidden');
    welcomeDescr.classList.remove('overlay--hidden');
    welcomeButton.classList.remove('overlay--hidden');
    bodyInner.classList.remove('no-scroll')
  }
}

burgerButton.addEventListener('click', toggleMenu);
window.addEventListener('resize', resetMenuForDesktop)