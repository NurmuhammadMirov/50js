// the fibonacci function calvulates the Nth Fibonacci number using a recursive approach
// it determines the Fibonacci number by summing the previous two Fibonacci numbers until
// it reaches the base cases of 0 and 1.
const fibonacci = (n) => (n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2));
console.log(fibonacci(7)); // 13