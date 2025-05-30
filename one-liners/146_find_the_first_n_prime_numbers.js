// the firstNPrime function generates an array of the first n prime numbers.

const isPrime = (num) => {
  if (num <= 1) return false;
  for(let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const firstNPrimes = (n) => {
  const primes = [];
  let num = 2;
  while(primes.length < n) {
    if (isPrime(num)) primes.push(num);
    num++;
  }
  return primes;
}

console.log(firstNPrimes(5)); // [ 2, 3, 5, 7, 11 ]