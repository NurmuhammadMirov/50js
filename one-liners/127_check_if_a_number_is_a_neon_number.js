// the isNeonNumber function determines whether a given number is a neon number. A neon number is
// a number where the sum of the digits of its square is equal to the number itself.
const isNeonNumber = (num) => {
  const squared = num ** 2;
  const digitSum = [...String(squared)].map(Number).reduce((sum, digit) => sum + digit, 0);
  return squared === digitSum;
};

console.log(isNeonNumber(9)); // false
console.log(isNeonNumber(2)); // true