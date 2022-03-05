// Declare/initialize variables
const defaultResult = 0;
let currentResult = defaultResult;
let calculationDescription;
const logEntries = [];

// Functions
// Get the number user entered into calculator and convert to a number
const getUserInput = () => {
  return parseFloat(userInput.value)
}

// Creates and writes output
const createAndWriteOutput = (operator, resultBeforeCalc, calcNumber) => {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}
// Functions to perform the mathematic operations of addition, subtraction, multiplication, and division 
const add = () => {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
  logEntries.push(enteredNumber);
  console.log(logEntries);
  }

const subtract = () => {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
}

const multiply = () => {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
}

const divide = () => {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
}

// Event listeners to respond to button clicks
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
