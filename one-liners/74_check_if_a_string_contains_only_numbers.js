// check if a given string contains only numeric characters.
const containsOnlyNumbers = (str) => /^[0-9]+$/.test(str);
console.log(containsOnlyNumbers("12345")); // true
console.log(containsOnlyNumbers("12a34")); // false