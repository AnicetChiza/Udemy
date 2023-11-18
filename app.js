'use strict';

/*document.querySelector('.message').textContent = '🎉 Correct number';
document.querySelector('.score').textContent = 13;
document.querySelector('.guess').value = 23;
document.querySelector('.number').textContent = 23;*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.btn').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
        document.querySelector('.message').textContent = '🔥 No number';
    }

    else if(guess === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct number';
    }

    else if(guess > secretNumber){
        document.querySelector('.message').textContent = '📈 To high';
    }

    else if(guess < secretNumber){
        document.querySelector('.message').textContent = '📉 Too lower';
    }
});
