// check if a given number is a perfect square.
const isPerfectSquare = (num) => Math.sqrt(num) % 1 === 0;
console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(10)); // false