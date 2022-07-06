// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// sayHello();

// 1. Re-write the function you find in assignment.js as an arrow function.
// const sayHello = name => console.log(`Hi ${name});

// sayHello('Tony');
// 2. Adjust the arrow function you created as part of task 1 to use three different syntaxes: With two arguments (incl. a phrase that replaces "Hi"), with no arguments (hard-coded values in function body) and with one returned value (instead of outputting text inside of the function directly).
// const sayHello = (phrase, name) => {
//   console.log(`${phrase} ${name}`);
// }

// sayHello('Hello', 'Tony');

// const sayHello = () => console.log('Hello Tony');

// sayHello();

// const sayHello = name => `Hello ${name}`;

// sayHello('Tony');

// 3. Add a default argument to the function you created: A fallback value for the phrase if no value is provided.
  const sayHello = (name, phrase = 'Hi') => `${phrase} ${name}`;
// 4. Add a new function: "checkInput" which takes an unlimited amount of arguments (unlimited amount of strings) and executes a callback function if NO argument/ string is an empty string.
const checkInput = (cb, ...strings) => {
  let noText = false;
  for (const text of strings) {
    if (!text) {
      noText = true;
      break;
    }
  }
  if (!noText){
    cb();
  }
};

checkInput(() => {
  console.log('No empty strings!');
}, 'Bob', 'the', 'tomato');