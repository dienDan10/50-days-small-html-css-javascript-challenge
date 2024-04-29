const btnOpen = document.querySelector('.nav__btn--open');
const btnClose = document.querySelector('.nav__btn--close');
const mainPage = document.querySelector('.container');
const btns = document.querySelector('.nav__btn');
const nav = document.querySelector('.nav');

btnOpen.addEventListener('click', () => {
  btns.style.transform = 'rotate(-90deg)';
  mainPage.style.transform = 'rotate(-25deg)';
  nav.style.transform = 'translateX(0)';
})

btnClose.addEventListener('click', () => {
  btns.style.transform = 'rotate(0)';
  mainPage.style.transform = 'rotate(0)';
  nav.style.transform = 'translateX(-25rem)';
})

