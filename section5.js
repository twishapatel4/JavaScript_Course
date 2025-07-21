'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.number').textContent = 21;

// document.querySelector('.guess').value = 2;
// console.log(document.querySelector('.guess').value);
let random = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = random;
let score = 20;
let highestScore = 0;
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').style.width = '15rem';
  random = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing..';
  document.querySelector('.guess').textContent = '';
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number here';
  } else if (score > 1) {
    if (guess === random) {
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = random;
      document.querySelector('.message').textContent = 'Correct Number';
      if (score > highestScore) {
        highestScore = score;
        document.querySelector('.highscore').textContent = highestScore;
      }
    } else {
      if (guess > random) {
        document.querySelector('.message').textContent = 'Too high';
      } else {
        document.querySelector('.message').textContent = 'Too Low';
      }
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = 'Lost';
    document.querySelector('.score').textContent = 0;
  }
});

// const x = 12;
// const temp = [3, -2, -6, 'avc', 'xcvz', 13, 6, 26];
// let max = temp[0];
// let min = temp[0];
// for (let i = 0; i < temp.length; i++) {
//   if (typeof temp[i] !== 'number') continue;
//   if (max < temp[i]) {
//     max = temp[i];
//   }
//   if (min > temp[i]) {
//     min = temp[i];
//   }
// }
// console.log(max - min)
// prompt('Enter the number');

// const measurekelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     // value: Number(prompt('Enter the temperature')),
//     value: 23,
//   };
//   console.log(measurement);
//   console.log(measurement.value + 273);
// };
// console.log(measurekelvin());
// let sum = 0;
// for (let i = 0; i < 10; i++) {
//   sum += i;
//   console.log(sum);
// }
// let forecast = [17, 21, 23];
// for (let i = 0; i < forecast.length; i++) {
//   console.log(`...${forecast[i]} in ${i} days.`);
// }
// const printForecast = function (forecast) {
//   let str = '';
//   for (let i = 0; i < forecast.length; i++) {
//     str = str + ` ${forecast[i]} in ${i + 1} days...`;
//   }
//   console.log(str);
// };
// printForecast(forecast);
