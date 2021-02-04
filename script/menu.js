const menuBars = document.querySelector('.banner__fas-bar');
const menuTimes = document.querySelector('.banner__fas-times');
const menuMobile = document.querySelector('.menu-mobile');

const changeMenuBars = () => {
  menuBars.classList.remove('banner__fas-bar--active');
  menuTimes.classList.add('banner__fas-times--active');
  menuMobile.classList.add('menu-mobile--active');
}

const changeMenuTimes = () => {
  menuTimes.classList.remove('banner__fas-times--active');
  menuBars.classList.add('banner__fas-bar--active');
  menuMobile.classList.remove('menu-mobile--active');
}

menuBars.addEventListener('click',changeMenuBars);
menuTimes.addEventListener('click',changeMenuTimes);
