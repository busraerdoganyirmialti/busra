const gameContainer = document.getElementById('game-container');
const scoreBoard = document.getElementById('score-board');
const startBtn = document.getElementById('start-btn');

let score = 0;
let gameInterval;
let timeLeft = 30;

function createBalloon() {
  const balloon = document.createElement('div');
  balloon.className = 'balloon';
  balloon.style.left = Math.random() * (gameContainer.clientWidth - 60) + 'px';
  balloon.style.top = Math.random() * (gameContainer.clientHeight - 80) + 'px';

  balloon.addEventListener('click', () => {
    score += 1;
    scoreBoard.textContent = 'Skor: ' + score;
    gameContainer.removeChild(balloon);
  });

  gameContainer.appendChild(balloon);

  setTimeout(() => {
    if (gameContainer.contains(balloon)) {
      gameContainer.removeChild(balloon);
    }
  }, 1500);
}

function startGame() {
  score = 0;
  scoreBoard.textContent = 'Skor: ' + score;
  startBtn.disabled = true;
  timeLeft = 30;

  gameInterval = setInterval(() => {
    createBalloon();
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      alert('Oyun bitti! Skorun: ' + score);
      startBtn.disabled = false;
    }
  }, 700);
}

startBtn.addEventListener('click', startGame);
