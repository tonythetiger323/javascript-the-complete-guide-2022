const task3Element = document.getElementById('task-3');

// Create two new functions: One that takes no parameters and simply shows an alert() with some text of your choice and one that receives a name as a parameter and then uses alert() to output that name.
const textAlert = () => {
  alert('Hi my name is');
}

const nameAlert = (name) => {
  alert(name);
}

// Call both functions directly from your code.
textAlert();
nameAlert('Tony');

// Add an event listener to task3Element and attach it to the first function (the one without arguments). Click this task thereafter to verify whether it works.
task3Element.addEventListener('click', textAlert);

// Add a brand-new function that takes three parameters (three strings, give them any names you want) that returns one combined string (where the three strings are concatenated).
const concatStrings = (string1, string2, string3) => {
  return `${string1} ${string2} ${string3}`;
}

const alertString = concatStrings('Happy', 'Paczki', 'Day!');
alert(alertString);