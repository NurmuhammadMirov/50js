// check if a given string starts with a specific character.

const startsWithChar = (str, char) => str.startsWith(char);

console.log(startsWithChar("Hello, world!", "H")); // true
console.log(startsWithChar("Hello, world!", "h")); // false