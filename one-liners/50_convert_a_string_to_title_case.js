// Convert a given string to title case (capitalize the first letter of each word).

const toTitleCase = (str) => str.replace(/\b\w/g, match => match.toUpperCase());

console.log(toTitleCase("hello world")); // 'Hello World'