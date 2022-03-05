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

// Creates a log entry object of data pertaining to the calculation and pushes it to an array
const writeToLog = (operationIdentifier, prevResult, operationNumber, newResult) => {
  const logEntry = {
    operation: operationIdentifier,
    prevResult,
    number: operationNumber,
    result: newResult
  }
  logEntries.push(logEntry);
  console.log(logEntries);
}
// Functions to perform the mathematic operations of addition, subtraction, multiplication, and division 
const add = () => {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
  writeToLog('ADD', initialResult, enteredNumber, currentResult);
  }

const subtract = () => {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
  writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

const multiply = () => {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

const divide = () => {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

// Event listeners to respond to button clicks
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
