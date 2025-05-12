// the reverseWords function takes a string as input and returns a new string
// where the order of words has been reversed.

const reverseWords = (str) => str.split('').reverse().join('');
console.log(reverseWords("Hello world!")); // '!dlrow olleH'