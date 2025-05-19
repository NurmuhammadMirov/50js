// the isPangram function checks whether a given string is a pangram, which is a sentence
// that contains every letter of the alphabet at least once.
const isPangram = (str) => {
  const letters = new Set(str.toLowerCase().match(/[a-z]/g));
  return letters.size === 26;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true
console.log(isPangram("Hello, World!")); // false