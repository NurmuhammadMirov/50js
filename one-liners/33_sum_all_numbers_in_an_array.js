// Calculate the sum of all numbers in a given array.

const sumArray = (arr) => arr.reduce((acc, val) => acc + val, 0);

console.log(sumArray([1, 2, 3, 4, 5])); // 15