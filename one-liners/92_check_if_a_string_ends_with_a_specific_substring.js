// check if a string ends with a specific substring.
const endsWithSubstring = (str, subStr) => str.endsWith(subStr);

console.log(endsWithSubstring("Hello, world!", "world!")); // true
console.log(endsWithSubstring("Hello, world!", "Hello")); // false