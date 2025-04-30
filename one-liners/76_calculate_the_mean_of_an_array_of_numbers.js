// calculate the mean (average) of a given array of numbers.
const mean = (arr) => arr.reduce((acc, val) => acc + val, 0) / arr.length;
console.log(mean([1,2,3,4,5])); // 3