// check if a given string is a palindrome, considering it case-insensitive.
const isPalindromeCaseInsensitive = (str) => str.toLowerCase() === 
str.toLowerCase().split('').reverse().join('');

console.log(isPalindromeCaseInsensitive('LeVel')); // true
console.log(isPalindromeCaseInsensitive('Hello')); // false

