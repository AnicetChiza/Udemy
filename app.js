'use strict';

/*document.querySelector('.message').textContent = '🎉 Correct number';
document.querySelector('.score').textContent = 13;
document.querySelector('.guess').value = 23;
document.querySelector('.number').textContent = 23;*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.btn').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
        document.querySelector('.message').textContent = '🔥 No number';
    }

    else if(guess === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct number';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.section').style.backgroundColor = 'green';
    }    
    else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📈 To high';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = '😭 You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }

    else if(guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📈 Too low';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = '😭 You lost the game';
            document.querySelector('.score').textContent = 0;
        } 
    }
});

document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('.section').style.backgroundColor = '#fff';
    document.querySelector('.guess').value = ' ';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = 'Start guessing ...';
})
