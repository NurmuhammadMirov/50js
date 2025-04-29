// check if a given array contains at lrast one even number
const hasEvenNumber = (arr) => arr.some(num => num % 2 === 0);

console.log(hasEvenNumber([1,3,5,7,8])); // true
console.log(hasEvenNumber([1,3,5,7,9])); // false