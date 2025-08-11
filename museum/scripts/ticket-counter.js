// Цены для basic (senior — половина от basic)
const prices = {
  permanent: 20,
  temporary: 25,
  combined: 40
};

// Инициализация переменных
let countBasic = 0;
let countSenior = 0;
let selectedExhibition = 'permanent'; // По умолчанию

// Расчёт общей стоимости
function calculateTotal() {
  const basicPrice = prices[selectedExhibition] || 0;
  const seniorPrice = basicPrice / 2;
  const total = (countBasic * basicPrice) + (countSenior * seniorPrice);
  document.querySelector('.tickets__amount-price span').textContent = total.toFixed(2);
}

// Обновление отображения счетчиков
function updateCountDisplay() {
  document.querySelector('.basic-count').textContent = countBasic;
  document.querySelector('.senior-count').textContent = countSenior;
}

// Обновление выбора типа билета
function updateExhibition() {
  const checkedCustomRadio = document.querySelector('.custome-radio.checked');
  if (!checkedCustomRadio) return;

  if (checkedCustomRadio.id === 'type-permanent') {
    selectedExhibition = 'permanent';
  } else if (checkedCustomRadio.id === 'type-temporary') {
    selectedExhibition = 'temporary';
  } else if (checkedCustomRadio.id === 'type-combined') {
    selectedExhibition = 'combined';
  }

  calculateTotal();
  console.log('Выбран тип билета:', selectedExhibition);
}

// Слушатели для счетчика basic
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.basic-inrement').addEventListener('click', () => {
    countBasic++;
    updateCountDisplay();
    calculateTotal();
  });

  document.querySelector('.basic-decrement').addEventListener('click', () => {
    if (countBasic > 0) {
      countBasic--;
      updateCountDisplay();
      calculateTotal();
    }
  });

  // Слушатели для счетчика senior
  document.querySelector('.senior-increment').addEventListener('click', () => {
    countSenior++;
    updateCountDisplay();
    calculateTotal();
  });

  document.querySelector('.senior-decrement').addEventListener('click', () => {
    if (countSenior > 0) {
      countSenior--;
      updateCountDisplay();
      calculateTotal();
    }
  });

  // Инициализация
  updateExhibition();
  updateCountDisplay();
  calculateTotal();
});