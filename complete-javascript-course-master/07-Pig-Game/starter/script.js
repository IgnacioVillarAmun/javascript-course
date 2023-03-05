'use strict';

const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const current1 = document.querySelector('#current--0');
const current2 = document.querySelector('#current--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

// console.log(player1, player2);

let currectScore, activePlayer, playing, scores;

// Startin conditions
const init = function () {
  scores = [0, 0];
  currectScore = 0;
  activePlayer = 0;
  playing = true;

  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;
  dice.classList.add('hidden');
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
};

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currectScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

init();

// Rolling dice funcionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate a random dice roll
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(randomNumber, typeof randomNumber);

    // 2. Display dice
    dice.classList.remove('hidden');
    dice.src = `dice-${randomNumber}.png`;

    // 3. Checked for rolled 1
    if (randomNumber !== 1) {
      // Add dice to currect score
      currectScore += randomNumber;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currectScore;
    } else {
      // Switch player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currectScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch players
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init)
