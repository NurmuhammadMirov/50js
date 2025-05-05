// find the elements that are present in the first array but not in the second array.
const difference = (arr1, arr2) => arr1.filter(val => !arr2.includes(val));
console.log(difference([1,2,3], [2,3,4]));