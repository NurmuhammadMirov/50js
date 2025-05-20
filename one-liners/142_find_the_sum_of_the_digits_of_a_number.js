// the sumOfDigits function calculates the sum of the digits of a given number.
const sumOfDigits = (num) => [...String(num)].reduce((sum, digit) => sum + Number(digit), 0);

console.log(sumOfDigits(12345)); // 15