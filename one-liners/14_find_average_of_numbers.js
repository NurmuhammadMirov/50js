// Find the average between multiple numbers using reduce method.

const average = (...args) => args.reduce((a, b) => a + b) / args.length;

console.log(average(1, 2, 3, 4)); //2.5

