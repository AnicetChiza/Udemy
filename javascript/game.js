'use strict';

//SELECTING AND CALLING ELEMENTS
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const currentEl0 = document.querySelector('.current--0');
const currentEl1 = document.querySelector('.current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Stating conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); 

let currentScore = 0;

//Rolling dice functions
btnRoll.addEventListener('click', function() {
    //1. Generating a random dice
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. Display dice
    diceEl.classList.remove('hidden');
    dice.src = `dice-${dice}.png`;

    //Check for rolled 1
    if(dice !== 1){
        //Add dice to the current score
        currentScore += dice;
        currentEl0.textContent = currentScore;
    }
})