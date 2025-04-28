// Remove a specific element from a given array.
const removeElement = (arr, element) => arr.filter(el => el !== element);

console.log(removeElement([1, 2, 3, 4, 5], 3)); // [ 1, 2, 4, 5 ]