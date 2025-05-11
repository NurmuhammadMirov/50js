// the isSubset function determines if one array is subset of another array. It achieves this
// by verifying that every element in the first array (arr1) is present in the seconf array (arr2).

const isSubset = (arr1, arr2) => arr1.every(item => arr2.includes(item));

console.log(isSubset([1,2,3],[2,3,4,5,6])); // false
console.log(isSubset([1,2,3],[2,3,1,5,6])); // true