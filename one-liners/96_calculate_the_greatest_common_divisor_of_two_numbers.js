// Calculate the Greates Common Divisor (GCD) of two numbers.
const gcd = (num1, num2) => {
  while (num2 !== 0) {
    let temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
}

console.log(gcd(48, 18)); // 6
console.log(gcd(18, 48)); // 6