// the firstNonRepeatedChar function identifies the first non-repeated character within a given
// string. It accomplished this by iterating through the string, building a character count object,
// and then using the find method to locate the first character with a count of 1.

const firstNonRepeatedChar = (str) => {
  const charCount = {};
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1
  }
  return str.split('').find((char) => charCount[char] === 1);
};

console.log(firstNonRepeatedChar('abacabad')); // 'c'