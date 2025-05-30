// the longestWord function determines the longest word in a given sentence. It does this by splitting the 
// sentence into words using spaces as separators and then using the reduce method to compare the length of 
// each word and keep track of the longest one.

const longestWord = (sentence) => 
  sentence.split(' ').reduce((longest, word) => 
    (word.length > longest.length ? word : longest), '');

console.log(longestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'