const hamburger = document.getElementById('hamburger');
const headerMenu = document.getElementById('header-menu');
const hamburgerClose = document.getElementById('hamburger-close');

hamburger.addEventListener('click', () => {
    headerMenu.classList.toggle("show");
})

hamburgerClose.addEventListener('click', () => {
    headerMenu.classList.toggle("show");
})