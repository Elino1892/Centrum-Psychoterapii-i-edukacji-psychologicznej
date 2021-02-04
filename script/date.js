const spanYear = document.querySelector('.footer__date-year');

const today = new Date();
const year = today.getFullYear();

spanYear.textContent = year;