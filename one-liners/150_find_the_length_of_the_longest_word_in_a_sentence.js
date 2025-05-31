// the longestWordLength function calculates the length of the longest word in a given sentence. It
// splits the sentence into words spaces as separator, and then uses the reduce method to find the 
// maximum length among all the words.

const longestWordLength = (sentence) => 
  sentence.split(' ').reduce((longest, word) => Math.max(longest, word.length), 0);

console.log(longestWordLength("The quick brown fox jumped over the lazy dog"));
