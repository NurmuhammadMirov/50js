// get the last N elements from a given array.
const lastNElements = (arr, n) => arr.slice(-n);

console.log(lastNElements([1,2,3,4,5,6,7], 3)); // [ 5, 6, 7 ]