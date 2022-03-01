// Declare/initialize variables
const defaultResult = 0;
let currentResult = defaultResult;
let calculationDescription;

currentResult = (currentResult + 10) * 3 / 2 - 1;

calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);