const compContainer = document.querySelector('.comp__container');
const before = compContainer.querySelector('.comp__before');
const afterImg = compContainer.querySelector('.comp__after-img');
const btn = compContainer.querySelector('.comp__btn');

let isDragging = false;

function setSlider(x) {
  const rect = compContainer.getBoundingClientRect();
  let offset = x - rect.left;
  offset = Math.max(0, Math.min(offset, rect.width));
  const percent = (offset / rect.width) * 100;
  before.style.width = percent + '%';
  btn.style.left = percent + '%';
}

btn.addEventListener('mousedown', (e) => {
  isDragging = true;
  document.body.style.userSelect = 'none';
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  setSlider(e.clientX);
});

window.addEventListener('mouseup', () => {
  isDragging = false;
  document.body.style.userSelect = '';
});

// Touch support
btn.addEventListener('touchstart', (e) => {
  isDragging = true;
  document.body.style.userSelect = 'none';
});

window.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  setSlider(e.touches[0].clientX);
});

window.addEventListener('touchend', () => {
  isDragging = false;
  document.body.style.userSelect = '';
});

// Инициализация (по центру)
window.addEventListener('DOMContentLoaded', () => {
  const rect = compContainer.getBoundingClientRect();
  setSlider(rect.left + rect.width / 2);
});