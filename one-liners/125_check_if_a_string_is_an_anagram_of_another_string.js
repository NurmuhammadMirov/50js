// the isAnagram function determines whether two given strings are anagrams of each other. An anagram is
// a word or phrase formed by rearranging the letters of another, using all the original letters exactly once.

const isAnagram = (str1, str2) => str1.split('').sort().join('') === str2.split('').sort().join('');
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world')); // false