// Find the longest word in a string.
const findLongestWord = (str) => str.split(' ').reduce((longest, word) => 
word.length > longest.length ? word : longest, '');

console.log(findLongestWord("Hello, how are you doing?")); 