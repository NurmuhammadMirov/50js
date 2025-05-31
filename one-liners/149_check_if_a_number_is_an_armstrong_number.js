// the isArmstrongNumber function checks if a number is an Armstrong number, also
// known as a narcissistic number.

const isArmstrongNumber = (num) => {
  const digits = [...String(num)].map(Number);
  const numDigits = digits.length;
  const sumOfPowers = digits.reduce((sum, digit) => sum + digit ** numDigits, 0);
  return sumOfPowers === num;
};

console.log(isArmstrongNumber(153)); // true
console.log(isArmstrongNumber(370)); // true
console.log(isArmstrongNumber(123)); // false