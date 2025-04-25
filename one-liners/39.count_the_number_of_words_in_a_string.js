// Count the number of words in a given string.
const countWords = (str) => str.trim().split(/\s+/).length;

console.log(countWords("Hello world, how are you?")); // 5