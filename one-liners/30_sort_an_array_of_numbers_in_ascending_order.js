// Sort a given array of numbers in ascending order.

const sortAscending = (arr) => arr.slice().sort((a, b) => a - b);

console.log(sortAscending([3,1,4,1,5,9,2,6,5,3]));
