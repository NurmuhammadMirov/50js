// check if a given array contains only unique values.
const hasUniqueValues = (arr) => new Set(arr).size === arr.length;
console.log(hasUniqueValues([1,2,3,4,5])); // true
console.log(hasUniqueValues([1,2,3,4,4])); // false