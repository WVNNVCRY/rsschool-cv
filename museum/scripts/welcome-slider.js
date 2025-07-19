const arrowLeft = document.querySelector('.slider-controls__arrow--left');
const arrowRight = document.querySelector('.slider-controls__arrow--right');
const sliderImages = document.querySelectorAll('.slider-img');
const sliderDots = document.querySelectorAll('.slider-controls__dot');
const sliderCountCurrent = document.querySelector('.slider-controls__count--current');

let currentIndex = 0;

function showSlide() {
  sliderImages[currentIndex].classList.add('block');
}

function hideSlide() {
  sliderImages[currentIndex].classList.remove('block');
}

function nextSlide() {
  hideSlide();
  currentIndex++;
  if (currentIndex > sliderImages.length - 1) {
    currentIndex = 0;
  }

  paginationDots();

  showSlide()
}

function prevSlide() {
  hideSlide();
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = sliderImages.length - 1;
  }

  paginationDots();

  showSlide();
}

arrowRight.addEventListener('click', nextSlide);
arrowLeft.addEventListener('click', prevSlide);

paginationDots = () => {
  sliderDots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === currentIndex) {
      dot.classList.add('active');
    }
  });
  sliderCountCurrent.textContent = currentIndex + 1;
}

sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    hideSlide();
    currentIndex = index;
    showSlide();
    paginationDots();
  });
});


setInterval(() => {
  nextSlide();
  paginationDots();
}, 5000);





