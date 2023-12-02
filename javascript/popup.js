'use strict';


const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.btn-close');
const btnOpenModal = document.querySelectorAll('.button');
const overall = document.querySelector('.overall');

console.log(btnOpenModal);

for(let i = 0; i < btnOpenModal.length; i++)
    btnOpenModal[i].addEventListener('click', function(){
        modal.classList.remove('hidden');
        overall.classList.remove('hidden');
});


const closeModal = function(){
    modal.classList.add('hidden');
    overall.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overall.addEventListener('click', closeModal);


