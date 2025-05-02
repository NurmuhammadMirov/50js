// calculate the factorial of a given number using a recursive function
const factorial = (num) => {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(3)); // 6