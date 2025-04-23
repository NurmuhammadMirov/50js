// Generate a Random Number within a Range

const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomInRange(1, 10));