// calculate the sum of squares of an array of numbers.
const sumOfSquares = (arr) => arr.reduce((acc, val) => acc + val**2, 0);
console.log(sumOfSquares([1,2,3])); // 14
console.log(sumOfSquares([1,2,3,4,5])); // 55