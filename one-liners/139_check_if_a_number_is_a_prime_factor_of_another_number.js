// the isPrimeFactor function checks if a given number is a prime factor of another number.
// check if a given number is a prime number.
const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};

const isPrimeFactor = (num, factor) => num % factor === 0 && isPrime(factor);

console.log(isPrimeFactor(20, 2)); // true
console.log(isPrimeFactor(20, 3)); // false