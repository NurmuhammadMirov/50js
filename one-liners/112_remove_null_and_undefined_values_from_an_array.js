// the removeNullAndUndefined function eliminates null and undefined values from an array by
// utilizing the filter method. It returns a new array containing only the non-null and 
// non-undefined elements.
const removeNullAndUndefined = (arr) => arr.filter(item => item !== null && item !== undefined);
console.log(removeNullAndUndefined([1, null, 2, 3, undefined, 4, null])); // [ 1, 2, 3, 4 ]