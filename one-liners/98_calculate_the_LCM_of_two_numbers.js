// Calculate the Least Common Multiple (LCM) of two numbers.
const gcd = (num1, num2) => {
  while (num2 !== 0) {
    let temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
}

const lcm = (num1, num2) => (num1*num2) / gcd(num1,num2);
console.log(lcm(6, 8)); // 24