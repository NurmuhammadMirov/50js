// the sumOfCubes function computes the sum of the cubes of all numbers in an array. It employs
// the reduce method to iterate through the array, accumulating the sum of cubes by raising each
// value to the power of 3 and adding it to the accumulator.
const sumOfCubes = (arr) => arr.reduce((acc, val) => acc + val ** 3, 0);
console.log(sumOfCubes([1,2,3,4,5])); // 225