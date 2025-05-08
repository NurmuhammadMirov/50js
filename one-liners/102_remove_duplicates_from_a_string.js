// remove duplicate characters from a string.
const removeDuplicatesFromString = (str) => [...new Set(str.split(""))].join('');
console.log(removeDuplicatesFromString("hello"));