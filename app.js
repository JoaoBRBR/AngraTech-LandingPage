const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const fexaA = document.querySelector('.fexaA');
const fexaB = document.querySelector('.fexaB');
const fexaC = document.querySelector('.fexaC');
const fexaD = document.querySelector('.fexaD');
const fexaE = document.querySelector('.fexaE');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
fexaA.addEventListener('click',close)
fexaB.addEventListener('click',close)
fexaC.addEventListener('click',close)
fexaD.addEventListener('click',close)
fexaE.addEventListener('click',close)



function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close() {
    mainMenu.style.top = '-100%';
}