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
  return;
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

const getWinner = (computerChoice, playerChoice = DEFAULT_USER_CHOICE) => 
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
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }
  let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, `;
  if (winner === RESULT_DRAW) {
    message = message + 'we have a draw!';
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + 'you win!'
  } else {
    message = message + 'you lose!'
  }
  alert(message);
  gameIsRunning = false;
};

startGameBtn.addEventListener('click', startGame);

// not related to game
const showResult = (messageText, result) => {
  alert(`${messageText} ${result}`);
}

const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = number => {
    return isNaN(number) ? 0 : number;
  };

  let total = 0;
  for (const num of numbers) {
    if (operation === 'ADD') {
      total += validateNumber(num);
    } else {
      total -= validateNumber(num);
    }
  }
  resultHandler(total);
};
// const sumUp = (resultHandler, ...numbers) => {
//   const validateNumber = (number) => {
//     return isNaN(number) ? 0 : number
//   }

//   let sum = 0;
//   for (const num of numbers) {
//     sum += validateNumber(num);
//   }
//   resultHandler(sum);
// }

// const subtractUp = function(resultHandler, ...numbers) {
//   let difference = 0;
//   for (const num of numbers) { // don't use
//     difference -= num;
//   }
//   resultHandler(difference);
// }

combine(
  showResult.bind(this, 'The result after adding all numbers is:'),
  'ADD',
  1,
  5,
  'fdsa',
  -3,
  6,
  10
);
combine(
  showResult.bind(this, 'The result after adding all numbers is:'),
  'ADD',
  1,
  5,
  10,
  -3,
  6,
  10,
  25,
  88
);
combine(
  showResult.bind(this, 'The result after subtracting all numbers is:'),
  'SUBTRACT',
  1,
  10,
  15,
  20
);