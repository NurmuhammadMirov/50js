// the isPronicNumber function determines whether a given number is a pronic number
// (also known as a oblong number or rectangular number).

const isPronicNumber = (num) => {
  const n = Math.floor(Math.sqrt(num));
  return n * (n + 1) === num;
};

console.log(isPronicNumber(6)); // true
console.log(isPronicNumber(20)); // trye
console.log(isPronicNumber(7)); // false