const menuBars = document.querySelector('.burger__fas-bar');
const menuTimes = document.querySelector('.burger__fas-times');
const menuMobile = document.querySelector('.menu-mobile');
const menuMobileItem2 = document.querySelector('.fa-arrow-down');
const menuMobileSubNav = document.querySelector('.menu-mobile__list-subnav');

const changeMenuBars = () => {
  menuBars.classList.remove('burger__fas-bar--active');
  menuTimes.classList.add('burger__fas-times--active');
  menuMobile.classList.add('menu-mobile--active');
}

const changeMenuTimes = () => {
  menuTimes.classList.remove('burger__fas-times--active');
  menuBars.classList.add('burger__fas-bar--active');
  menuMobile.classList.remove('menu-mobile--active');
}

const changeMenuSubNav = () => {
  menuMobileItem2.classList.toggle('active');
  menuMobileSubNav.classList.toggle('menu-mobile__list-subnav--active');
}

menuMobileItem2.addEventListener('click', changeMenuSubNav);
menuBars.addEventListener('click',changeMenuBars);
menuTimes.addEventListener('click',changeMenuTimes);
