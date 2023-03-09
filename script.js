'use strict';
//Global selection of DOM
let secretNumber;
let score = 20;
let highscore = 0;

const displayNumber = document.querySelector('.number');
const guessNumber = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const scoreH = document.querySelector('.score');
const highScoreH = document.querySelector('.highscore');
const bodyH = document.querySelector('body');
const messageH = document.querySelector('.message');
const againBtn = document.querySelector('.again');

//==============All the functions========================

//Game will start with a randome number
function startGame() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
}

//Comparing the secret Number with user choice
function checkResult() {
  const userChoice = guessNumber.value;
  if (userChoice == secretNumber) {
    //Check for high score
    if (highscore < score) {
      highscore = score;
      renderScoreBoard();
    }
    //Display the result
    displayNumber.textContent = secretNumber;
    bodyH.style.backgroundColor = 'green';
    messageH.textContent = 'Correct Answer! You Won 🥇';
  } else if (userChoice > secretNumber) {
    score = score - 1;
    messageH.textContent = 'Too High ⬆️';
    renderScoreBoard();
  } else if (userChoice < secretNumber) {
    score -= 1;
    messageH.textContent = 'Too Low ⬇️';
    renderScoreBoard();
  }
}

//Updating the score board
function renderScoreBoard() {
  scoreH.innerHTML = `${score}`;
  highScoreH.innerHTML = `${highscore}`;
}

//Reseting the game
function resetGame() {
  //1. Change background colour
  bodyH.style.backgroundColor = '#222';
  //3. Hide the secret Number
  displayNumber.textContent = '?';

  //2. update score board(not high socore)
  score = 20;
  renderScoreBoard();

  //4. Start Game Again
  startGame();
}
//======Click Events==============
checkBtn.addEventListener('click', checkResult);
againBtn.addEventListener('click', resetGame);

startGame();
