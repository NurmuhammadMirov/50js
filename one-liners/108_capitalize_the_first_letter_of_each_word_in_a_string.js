// this function transforms a string by capitalizing the first letter of each word within it.
// it employs a regular expression to locate the first character of each word (defined as a 
// word boundery followed by a letter), and then replaces it with its uppercase version.

const capitalizeWords = (str) => str.replace(/\b\w/g, char => char.toUpperCase());
console.log(capitalizeWords('hello world')); // 'Hello World'