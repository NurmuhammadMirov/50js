// Count the occurrences of a specific character in a given string.

const countOccurrences = (str, char) => str.split(char).length - 1;
console.log(countOccurrences("banana", "a"));