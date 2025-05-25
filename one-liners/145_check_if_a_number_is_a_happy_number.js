// the isHappyNumber function checks if a given number is a 'happy number' or not. A happy
// number is a number where the sequence of repeatedly summing the squares of its digits
// eventually reaches the number 1.

const isHappyNumber = (num) => {
  const seen = new Set();
  while(num !== 1 && !seen.has(num)) {
    seen.add(num);
    num = [...String(num)].reduce((sum, digit) => sum + digit ** 2, 0);
  }
  return num === 1;
};

console.log(isHappyNumber(19)); // true
console.log(isHappyNumber(4)); // false 