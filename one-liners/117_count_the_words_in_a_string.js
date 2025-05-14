// the countWords function determines the number of words in a given string. It accomplishes
// this by splitting the string using a regular expression that matches one or more whitespace
// characters, and then counting the resulting array's length.
const countWords = (str) => str.split(/\s+/).length;
console.log(countWords('Hello, how are you doing?')); // 5