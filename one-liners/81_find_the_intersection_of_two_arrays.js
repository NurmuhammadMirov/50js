// find the common elements (intersection) between two arrays.
const intersection = (arr1, arr2) => arr1.filter(val => arr2.includes(val));

console.log(intersection([1,2,3], [2,3,4]));