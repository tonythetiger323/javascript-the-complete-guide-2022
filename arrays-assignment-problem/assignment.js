// 1. Create an array of numbers (of your choice) and perform three array operations on it: filter for numbers greater than 5, map every number to an object which holds the number on some property (e.g. "num") and reduce the array to a single number (the multiplication of all numbers).

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterNumArr = numArr.filter(num => num > 5);
console.log(filterNumArr);

const mapNumArr = numArr.map((num, idx) => {
  const numObj = { index: idx, num}
  return numObj;
})

console.log(mapNumArr);

const productArr = numArr.reduce((prev, current) => prev*current );
console.log(productArr);

// 2. Write a function ("findMax") which executes some logic that finds the largest number in a list of arguments. Pass the array from task 1 split up into multiple arguments to that function.

function findMax(...nums) {
  let max = nums[0];
  for (const num of nums) {
    if(num > max) {
      max = num
    }
  }
  return max;
}

// 3. Tweak the "findMax" function such that it finds both the minimum and maximum and returns those as an array. Then use destructuring when calling the function to store the two results in separate constants.

function findMinMax(...nums){
  let min = nums[0];
  let max = nums[0];
  for (const num of nums) {
    if(num > max) {
      max = num
    }
    if(num < min) {
      min = num
    }
  }
  return [min, max];
}


console.log(findMax(...numArr));

const [min, max] = findMinMax(...numArr);
console.log(min, max);

// 4. Create a list (and possibly some surrounding logic) where you ensure that NO duplicate values can be added. Use whichever approach seems appropriate to you.

const emails = new Set();
emails.add('tony.greeley@me.com');
emails.add('anthony.greeley@kinandcarta.com');
console.log(emails);
