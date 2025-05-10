// this function determines if an array is sorted in decending order. It iterates through the array
// and verifies that each element is either greater than or equal to the precefing element, ensuring a
// descending order.

const isSortedDescending = (arr) => arr.every((el, i) => i === 0 || el <= arr[i - 1]);

console.log(isSortedDescending([5,4,3,2,1])); // true
console.log(isSortedDescending([1,5,3,8,2])); // false