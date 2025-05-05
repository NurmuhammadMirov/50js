// check if a given number is a Fibonacci number.
const isPerfectSquare = (num) => Math.sqrt(num) % 1 === 0;
const isFibonacci = (num) => isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
console.log(isFibonacci(5)); // true
console.log(isFibonacci(6)); // false