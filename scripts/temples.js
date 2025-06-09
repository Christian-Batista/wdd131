const toggleBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-button');
const main = document.querySelector('main');

// Toggle menu
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');

  if (menu.classList.contains('active')) {
    main.classList.add('menu-active-main');
  }
});

// Close menu
closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');

  if (!menu.classList.contains('active')) {
    main.classList.remove('menu-active-main');
  }
});


