// the factors function calculates and returns an array of all the factors of a given number. 
// factors are the positive integers that evenly divide the input number.

const factors = (num) => {
  const result = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      result.push(i);
    }
  }
  return result;
};
console.log(factors(12)); // [ 1, 2, 3, 4, 6, 12 ]