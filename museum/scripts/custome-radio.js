document.addEventListener('DOMContentLoaded', () => {
  // Обработчик для нативных радио-кнопок
  document.querySelectorAll('.custome-radio-hidden').forEach(radio => {
    radio.addEventListener('change', () => {
      const customRadio = radio.nextElementSibling;
      if (radio.checked) {
        customRadio.classList.add('checked');
      } else {
        customRadio.classList.remove('checked');
      }

      // Сбрасываем стиль для других радио-кнопок в группе
      document.querySelectorAll(`input[name="${radio.name}"]`).forEach(otherRadio => {
        if (otherRadio !== radio) {
          otherRadio.nextElementSibling.classList.remove('checked');
        }
      });
    });

    // Инициализация начального состояния
    if (radio.checked) {
      radio.nextElementSibling.classList.add('checked');
    }
  });

  // Обработчик для кастомных радио-кнопок
  document.querySelectorAll('.custome-radio').forEach(customRadio => {
    customRadio.addEventListener('click', (e) => {
      e.preventDefault(); // Предотвращаем дефолтное поведение
      const radioInput = customRadio.previousElementSibling;
      if (radioInput && !radioInput.checked) {
        radioInput.checked = true; // Активируем только если не выбрано
        radioInput.dispatchEvent(new Event('change')); // Вызываем событие change
      }
    });
  });
});
