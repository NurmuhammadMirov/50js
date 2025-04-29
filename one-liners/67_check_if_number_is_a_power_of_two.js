// check if a given number is a power of two.
const isPowerOfTwo = (num) => (num & (num - 1)) === 0;
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(5)); // false