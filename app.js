'use strict';

/*document.querySelector('.message').textContent = '🎉 Correct number';
document.querySelector('.score').textContent = 13;
document.querySelector('.guess').value = 23;
document.querySelector('.number').textContent = 23;*/

document.querySelector('.btn').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    if(!guess){
        document.querySelector('.message').textContent = 'No number entered';
    }
});
