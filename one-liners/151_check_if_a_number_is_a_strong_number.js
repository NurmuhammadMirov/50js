// the isStrongNumber function checks if a number is a strong number. A strong number
// is a number whose sum of factorials of its digits is equal to the number itself.

const factorial = (num) => (num === 0 ? 1 : factorial(num - 1));

const isStrongNumber = (num) => {
  const sumOfFactorials = [...String(num)].reduce((sum, digit) => sum + factorial(Number(digit)), 0);
  return sumOfFactorials === num;
};

console.log(isStrongNumber(1)); // true
console.log(isStrongNumber(123));  // false