const burgerButton = document.querySelector('.header__burger-button');
const headerList = document.querySelector('.header__list');
const welcomeTitle = document.querySelector('.welcome__title');
const welcomeDescr = document.querySelector('.welcome__descr');
const welcomeButton = document.querySelector('.welcome__button');
const breakPoint = 1024;

function toggleMenu() {
  burgerButton.classList.toggle('is-active');
  headerList.classList.toggle('is-active');
  welcomeTitle.classList.toggle('overlay--hidden');
  welcomeDescr.classList.toggle('overlay--hidden');
  welcomeButton.classList.toggle('overlay--hidden');
}

function resetMenuForDesktop() {
  if (window.innerWidth >= breakPoint) {
    burgerButton.classList.remove('is-active');
    headerList.classList.remove('is-active');
    welcomeTitle.classList.remove('overlay--hidden');
    welcomeDescr.classList.remove('overlay--hidden');
    welcomeButton.classList.remove('overlay--hidden');
  }
}

burgerButton.addEventListener('click', toggleMenu);
window.addEventListener('resize', resetMenuForDesktop)