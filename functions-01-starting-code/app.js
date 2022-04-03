// Select the game button element in the HTML and store to a constant
const startGameBtn = document.getElementById('start-game-btn');

// Global variables
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS'

let gameIsRunning = false;

// functions
const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}?`, '').toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
  alert('Invalid choice! We chose rock for you!');
  return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < .34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER
  } else  {
    return SCISSORS;
  }
};

const getWinner = (computerChoice, playerChoice) => 
  computerChoice === playerChoice 
  ? RESULT_DRAW 
  : computerChoice === ROCK && playerChoice === PAPER || 
  computerChoice === PAPER && playerChoice === SCISSORS || 
  computerChoice === SCISSORS && playerChoice === ROCK 
  ? RESULT_PLAYER_WINS 
  : RESULT_COMPUTER_WINS;
;

const startGame = () => {
  if (gameIsRunning){
    return;
  }
  console.log('Game is starting');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  console.log(winner);
};

startGameBtn.addEventListener('click', startGame);