// the largestPrimeFactor function calculates the largest prime factor of a given number.
const largestPrimeFactor = (num) => {
  let factor = 2;

  while (factor <= num) {
    if (num % factor === 0) {
      num /= factor;
    } else {
      factor++;
    }
  }

  return factor;
};

console.log(largestPrimeFactor(48)); // 3