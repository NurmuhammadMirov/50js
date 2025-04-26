// Calculate the average of numbers in a given array.
const average = (arr) => arr.reduce((acc, val) => acc + val, 0) / arr.length;

console.log(average([1,2,3,4,5,6])); // 3.5