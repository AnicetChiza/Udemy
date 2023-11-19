'use strict';


const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.btn-close');
const btnOpenModal = document.querySelectorAll('.button');
const overAll = document.querySelector('.overall');

console.log(btnOpenModal);

for(let i = 0; i < btnOpenModal.length; i++)
    btnOpenModal[i].addEventListener('click', function(){
        console.log('Right');
        modal.classList.remove('none');
        
});


