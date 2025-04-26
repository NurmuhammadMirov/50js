// Check if a given string is empty (contains no characters).

const isEmptyString = (str) => str.trim().length === 0;

console.log(isEmptyString("")); // true

console.log(isEmptyString("Hello, world!")); // false