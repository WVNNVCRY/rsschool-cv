document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.getElementById('ticketsDialog');
  const openBtn = document.querySelector('.tickets__amount-btn');
  const closeBtn = dialog.querySelector('.tickets__dialog-close');

  openBtn.addEventListener('click', () => {
    dialog.classList.add('active');
    document.body.classList.add('no-scroll');
  });

  closeBtn.addEventListener('click', () => {
    dialog.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });

  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
      dialog.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }
  });
});