// check if a string is a palindrome, considering case sensitivity.
const isPalindtomeCaseSensitive = (str) => str === str.split('').reverse().join('');

console.log(isPalindtomeCaseSensitive('level')); // true
console.log(isPalindtomeCaseSensitive('Level')); // false