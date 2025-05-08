// Count the occurrences of a character in a string.
const countOccurrences = (str, char) => str.split(char).length -1;
console.log(countOccurrences('hello world', 'l'));