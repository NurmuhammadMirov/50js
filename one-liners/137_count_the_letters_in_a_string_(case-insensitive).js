// the countLetters function calculates the count of each letter in a given string,
// considering both upperacase and lowercase versions as the same letter.

const countLetters = (str) => {
  const letters = str.toLowerCase().match(/[a-z]/g); // this will return array of lowercase letters
  const letterCount = {};
  for (const letter of letters) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  }
  return letterCount;
};

console.log(countLetters('Hello, World!')); // { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }