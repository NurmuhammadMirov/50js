// the consecutiveNumbers function generates an array of consecutive numbers
// within a specified range.
const consecutiveNumbers = (start, end) => Array.from({length: end-start + 1}, (_, i) => start + i);
console.log(consecutiveNumbers(1, 5)); // [ 1, 2, 3, 4, 5 ]
console.log(consecutiveNumbers(3, 5)); // [ 3, 4, 5 ]