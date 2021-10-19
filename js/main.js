var elBtn = document.querySelector('.menu-btn');
var elHead = document.querySelector('.header');

elBtn.addEventListener('click', (evt) =>{
    elHead.classList.toggle('header--active')
});