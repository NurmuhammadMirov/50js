// Check if a given array is sorted in ascending order.

const isSortedAscending = (arr) => arr.every((el, i) => i === 0 || el >= arr[i - 1]);

console.log(isSortedAscending([1, 2, 3, 5, 8])); // true
console.log(isSortedAscending([1, 5, 3, 8, 2])); // false