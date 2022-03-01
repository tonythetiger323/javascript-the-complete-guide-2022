// Declare/initialize variables
const defaultResult = 0;
let currentResult = defaultResult;
let calculationDescription;

// Functions
// Addition - adds the currentResult and userInput together and reassigns that value to currentResult and updates DOM 
const add = () => {
  currentResult = currentResult + userInput.value;
  outputResult(currentResult, calculationDescription);
};

// When add button is clicked run the add function
addBtn.addEventListener('click', add);


