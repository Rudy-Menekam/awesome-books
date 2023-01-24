const menuItems = document.querySelectorAll('li');
const sections = document.querySelectorAll('section');
function reset() {
  sections.forEach((section) => {
    section.style.display = 'none';
  });
}
reset();
sections[0].style.display = 'block';

menuItems[0].addEventListener('click', () => {
  reset();
  sections[0].style.display = 'block';
});

menuItems[1].addEventListener('click', () => {
  reset();
  sections[1].style.display = 'block';
});

menuItems[2].addEventListener('click', () => {
  reset();
  sections[2].style.display = 'block';
});

export const menuBtn = document.getElementById('burger-container');
const navOverlay = document.getElementById('nav');
export const navList = document.getElementsByClassName('menu')[0];
const burgerBar = document.getElementsByClassName('hamRotate')[0];
export function overlay() {
  navOverlay.classList.toggle('invisible');
  burgerBar.classList.toggle('active');
  navOverlay.style.animation = 'awesome-out 1s';
}

