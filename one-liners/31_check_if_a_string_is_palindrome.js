// Determine if a given string is a palindrome.
const isPalindrome = (str) => str === str.split('').reverse().join('');

console.log(isPalindrome('level')); // true