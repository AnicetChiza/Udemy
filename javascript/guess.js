'use strict';

/*document.querySelector('.message').textContent = '🎉 Correct number';
document.querySelector('.score').textContent = 13;
document.querySelector('.guess').value = 23;
document.querySelector('.number').textContent = 23;*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hihgscore = 0;
let displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.btn').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
        document.querySelector('.message').textContent = '🔥 No number';
    }

    else if(guess === secretNumber){
        displayMessage('🎉 Correct number');
        /*document.querySelector('.message').textContent = '🎉 Correct number';*/
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.section').style.backgroundColor = 'green';
        if(score > hihgscore){
            hihgscore = score;
            document.querySelector('.high-score').textContent = hihgscore;
        }
    }    

    else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? '📈 To high' :  '📈 To low')
            /*document.querySelector('.message').textContent = guess > secretNumber ? '📈 To high' :  '📈 To low';*/
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            displayMessage('😭 You lost the game')
            /*document.querySelector('.message').textContent = '😭 You lost the game';*/
            document.querySelector('.score').textContent = 0;
        }
    }
    /*else if(guess > secretNumber){
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
    }*/
});

document.querySelector('.again').addEventListener('click', function(){
    score = 0;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.section').style.backgroundColor = '#fff';
    document.querySelector('.guess').value = ' ';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = 20;
    displayMessage('Start guessing ...');
    /*document.querySelector('.message').textContent = 'Start guessing ...';*/
})
