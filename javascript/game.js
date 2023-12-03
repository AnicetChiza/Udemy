'use strict';

//SELECTING AND CALLING ELEMENTS
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


//Stating conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); 

const scores = [0, 0];
let currentScore = 0;
const activePlayer = 0;

//Rolling dice functions
btnRoll.addEventListener('click', function() {
    //1. Generating a random dice
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = '../images/dice-' + dice + '.png';
    //diceEl.src = `dice-${dice}.png`;

    //Check for rolled 1
    if(dice !== 1){
        //Add dice to the current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        //currentEl0.textContent = currentScore;
    }
    else{
        //Switch to the next player
        activePlayer = activePlayer === 0 ? 1 : 0;
    }
});