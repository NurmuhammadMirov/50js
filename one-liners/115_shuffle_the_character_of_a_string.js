// the shuffleString function rearranges the characters of a given string in a random order.
// It does so by first splitting the string into an array of characters, them using the sort
// method with a random comparison function. Finally, the shuffled characters are rejoined to
// form a new string.

const shuffleString = (str) => str.split("").sort(() => 0.5 - Math.random()).join('');
console.log(shuffleString('hello'));