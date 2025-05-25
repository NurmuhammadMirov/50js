// the gcd function calculates the greates common divisor (GCD) of two given numbers using
// a recursive approach.

const gcd = (num1, num2) => (num2 === 0 ? num1 : gcd(num2, num1 % num2));
console.log(gcd(48, 18)); // 6