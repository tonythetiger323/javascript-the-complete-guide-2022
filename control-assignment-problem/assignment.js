const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// 1. In the attached code assignment.js, you find a variable that holds a random number between 0 and 1. Write code that shows an alert (with any message) when that number is greater than 0.7.
console.log(randomNumber);
if (randomNumber > 0.7){
  alert(`${randomNumber} is greater than 0.7`);
}

// 2. Create an array of numbers (any numbers of your choice) and loop through the array in two different ways - outputting the numbers inside of the loop.
const lostNumbers = [4, 8, 15, 16, 23, 42]

for (let i = 0; i < lostNumbers.length; i++){
  console.log(lostNumbers[i]);
}

for (num of lostNumbers){
  console.log(num);
}

lostNumbers.forEach(num => console.log(num));

// 3. Adjust one of the loops from the last task such that it actually starts at the end (last element) of the array and loops to the first element.
for (let i = 5; i >= 0; i--) {
  console.log(lostNumbers[i]);
}

// 4. Create another random number (in a separate constant) and show an alert in two different scenarios: Both are greater 0.7 OR at least one of the two is NOT greater than 0.2.
const randomNumber2 = Math.random();

console.log(randomNumber2);
if ((randomNumber && randomNumber2 > 0.7 )|| randomNumber <= 0.2 || randomNumber2 <= 0.2) {
  alert('One of the conditions is met!')
}