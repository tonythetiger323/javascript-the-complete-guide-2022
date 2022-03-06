const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

const calculateResult = (operator) => {
  if(operator !== 'ADD' && operator !== 'SUBTRACT' && operator !== 'MULTIPLY' && operator !== 'DIVIDE') {
    return;
  }

  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let operatorSymbol;
  
  if(operator === 'ADD'){
    currentResult += enteredNumber;
    operatorSymbol = '+';
  } else if (operator === 'SUBTRACT') {
    currentResult -= enteredNumber;
    operatorSymbol = '-';
  } else if (operator === 'MULTIPLY') {
    currentResult *= enteredNumber;
    operatorSymbol = '*';
  } else if (operator === 'DIVIDE') {
    currentResult /= enteredNumber;
    operatorSymbol = '/';
  }
  
  createAndWriteOutput(operatorSymbol, initialResult, enteredNumber);
  writeToLog(operator, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult('ADD');
  }

function subtract() {
  calculateResult('SUBTRACT');
  }

function multiply() {
  calculateResult('MULTIPLY');
  }

function divide() {
  calculateResult('DIVIDE');
 }

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
