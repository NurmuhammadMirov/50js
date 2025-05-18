// the isDisariumNumber function determines whether a given number is a disarium number.

const isDisariumNumber = (num) => {
  const digits = [...String(num)].map(Number);
  const sumOfPowers = digits.reduce((sum, digit, index) => sum + digit ** (index+1), 0);
  return sumOfPowers === num;
}

console.log(isDisariumNumber(89)); // true
console.log(isDisariumNumber(135)); // true 
console.log(isDisariumNumber(23)); // false 