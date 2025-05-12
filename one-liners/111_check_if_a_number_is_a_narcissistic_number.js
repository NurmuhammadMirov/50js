// the isNarcissisticNumber function evaluates whether a given number is a
// narcissistic number.

const isNarcissisticNumber = (num) => {
  const digits = [...String(num)].map(Number);
  const numDigits = digits.length;
  const sumOfPowers = digits.reduce((sum, digit) => sum + Math.pow(digit, numDigits), 0);
  return sumOfPowers === num;
};

console.log(isNarcissisticNumber(153)); // true
console.log(isNarcissisticNumber(370)); // trie
console.log(isNarcissisticNumber(123)); // false