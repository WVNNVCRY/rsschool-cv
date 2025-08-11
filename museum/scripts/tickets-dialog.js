document.addEventListener('DOMContentLoaded', () => {
  const prices = {
    permanent: 20,
    temporary: 25,
    combined: 40
  };

  let countBasic = 1;
  let countSenior = 1;
  let selectedType = 'permanent';

  // Элементы формы в модалке
  const typeSelect = document.getElementById('type');
  const basicPriceSpan = document.querySelector('.form__count-basic--price');
  const seniorPriceSpan = document.querySelector('.form__count-senior--price');
  const basicCountEl = document.getElementById('basic-type');
  const seniorCountEl = document.getElementById('senior-type');

  // Элементы Overview
  const overviewDate = document.getElementById('overview-date');
  const overviewTime = document.getElementById('overview-time');
  const overviewType = document.getElementById('ovewview-type');
  const overviewBasicCount = document.querySelectorAll('.overview__tickets-count')[0];
  const overviewSeniorCount = document.querySelectorAll('.overview__tickets-count')[1];
  const overviewBasicPrice = document.querySelectorAll('.overview__tickets-price-count')[0];
  const overviewSeniorPrice = document.querySelectorAll('.overview__tickets-price-count')[1];
  const overviewTotal = document.querySelector('.overview__tickets-total-count');

  // Поля даты и времени
  const dateInput = document.querySelector('.form__date-input');
  const timeSelect = document.getElementById('time');

  // Модалка
  const ticketsDialog = document.getElementById('ticketsDialog');
  const dialogCloseBtn = document.querySelector('.tickets__dialog-close');

  function updatePrices() {
    const basicPrice = prices[selectedType];
    const seniorPrice = basicPrice / 2;

    basicPriceSpan.textContent = basicPrice;
    seniorPriceSpan.textContent = seniorPrice;

    const totalBasic = countBasic * basicPrice;
    const totalSenior = countSenior * seniorPrice;
    const total = totalBasic + totalSenior;

    overviewBasicCount.textContent = countBasic;
    overviewSeniorCount.textContent = countSenior;

    overviewBasicPrice.textContent = totalBasic.toFixed(2);
    overviewSeniorPrice.textContent = totalSenior.toFixed(2);
    overviewTotal.textContent = total.toFixed(2);
  }

  function updateOverviewDetails() {
    overviewDate.textContent = dateInput.value || 'Not selected';
    overviewTime.textContent = timeSelect.value || 'Not selected';
    overviewType.textContent = typeSelect.options[typeSelect.selectedIndex].text;
  }

  function updateCounters() {
    basicCountEl.textContent = countBasic;
    seniorCountEl.textContent = countSenior;
    updatePrices();
  }

  // Изменение типа билета в модалке
  typeSelect.addEventListener('change', () => {
    selectedType = typeSelect.value;
    updatePrices();
    updateOverviewDetails();
  });

  // Кнопки Basic
  const basicButtons = document.querySelectorAll('.form__count-basic .form__count-counter button');
  basicButtons[0].addEventListener('click', (e) => {
    e.preventDefault();
    if (countBasic > 0) countBasic--;
    updateCounters();
  });
  basicButtons[1].addEventListener('click', (e) => {
    e.preventDefault();
    countBasic++;
    updateCounters();
  });

  // Кнопки Senior
  const seniorButtons = document.querySelectorAll('.form__count-senior .form__count-counter button');
  seniorButtons[0].addEventListener('click', (e) => {
    e.preventDefault();
    if (countSenior > 0) countSenior--;
    updateCounters();
  });
  seniorButtons[1].addEventListener('click', (e) => {
    e.preventDefault();
    countSenior++;
    updateCounters();
  });

  // Изменение даты и времени
  dateInput.addEventListener('change', updateOverviewDetails);
  timeSelect.addEventListener('change', updateOverviewDetails);

  // Открытие модалки с подтягиванием данных из основного калькулятора
  document.querySelector('.tickets__amount-btn').addEventListener('click', (e) => {
    e.preventDefault();

    // Получаем данные из основного блока
    const mainBasicCount = parseInt(document.querySelector('.basic-count').textContent, 10) || 0;
    const mainSeniorCount = parseInt(document.querySelector('.senior-count').textContent, 10) || 0;
    const mainTypeId = document.querySelector('.custome-radio.checked')?.id || 'type-permanent';

    countBasic = mainBasicCount || 1;
    countSenior = mainSeniorCount || 0;

    if (mainTypeId === 'type-permanent') selectedType = 'permanent';
    if (mainTypeId === 'type-temporary') selectedType = 'temporary';
    if (mainTypeId === 'type-combined') selectedType = 'combined';

    // Устанавливаем значения в модалке
    typeSelect.value = selectedType;
    updateCounters();
    updateOverviewDetails();

    ticketsDialog.style.display = 'block';
  });

  // Закрытие модалки
  dialogCloseBtn.addEventListener('click', () => {
    ticketsDialog.style.display = 'none';
  });

  // Инициализация
  updateOverviewDetails();
  updateCounters();
});