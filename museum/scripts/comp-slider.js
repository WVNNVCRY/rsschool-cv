const compContainer = document.querySelector('.comp__container');
const before = compContainer.querySelector('.comp__before');
const afterImg = compContainer.querySelector('.comp__after-img');
const btn = compContainer.querySelector('.comp__btn');

let isDragging = false;

function setSlider(x) {
  const rect = compContainer.getBoundingClientRect();
  const btnRect = btn.getBoundingClientRect();
  const btnWidth = btnRect.width;

  // Ограничиваем так, чтобы центр кнопки не выходил за границы
  let offset = x - rect.left;
  offset = Math.max(btnWidth / 2, Math.min(offset, rect.width - btnWidth / 2));
  const percent = (offset / rect.width) * 100;
  before.style.width = percent + '%';
  btn.style.left = percent + '%';
}

// Drag мышкой
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

// Drag touch
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

// Клик по контейнеру (мышь)
compContainer.addEventListener('click', (e) => {
  if (e.target === btn) return; // не реагировать на клик по самой кнопке
  setSlider(e.clientX);
});

// Клик по контейнеру (touch)
compContainer.addEventListener('touchstart', (e) => {
  if (e.target === btn) return;
  setSlider(e.touches[0].clientX);
});

// Инициализация (по центру)
window.addEventListener('DOMContentLoaded', () => {
  const rect = compContainer.getBoundingClientRect();
  setSlider(rect.left + rect.width / 2);
});