// Generate the first N Fibonacci numbers.

const fibonacci = (n) => {
  const result = [0, 1];
  for(let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
};

console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]