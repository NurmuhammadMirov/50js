// a harshad number, also known as a Niven number, is an integer divisible by the sum of its digits.
// the isHarshadNumber function determines whether a given number meets this criterion. It calculates
// the sum of the digits of the number, and then checks if the number itself is divisible by this sum.

const isHarshadNumber = (num) => num % [...String(num)].reduce((sum, digit) => sum + Number(digit), 0) === 0;
console.log(isHarshadNumber(18)); // true
console.log(isHarshadNumber(19)); // false