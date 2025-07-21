'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const cur0El = document.getElementById('current--0');
const cur1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let score = [0, 0];
let playing = true;

let curScore = 0;
let activePlayer = 0;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      curScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        curScore;
    } else {
      //Switch to next player
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      curScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    }
  }
});

btnHold.addEventListener('click', function () {
  // activePlayer === 0 ? (score0El += curScore) : (score1El += curScore);
  // if (score0El >= 100 || score1El >= 100) {
  // }
  if (playing) {
    score[activePlayer] += curScore;
    console.log(score[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 20) {
      diceEl.classList.add('hidden');
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      curScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    }
  }
});

btnNew.addEventListener('click', function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  cur0El.textContent = 0;
  cur1El.textContent = 0;
  score = [0, 0];
  curScore = 0;
  playing = true;
  let activePlayer = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  // document.getElementById(`score--${activePlayer}`).textContent =
  //   score[activePlayer];
  // document.getElementById(`score--${!activePlayer}`).textContent =
  //   score[activePlayer];
  // document.getElementById(`current--${activePlayer}`).textContent = curScore;
  // document
  //   .querySelector(`.player--${activePlayer}`)
  //   .classList.remove('player--winner');
});
