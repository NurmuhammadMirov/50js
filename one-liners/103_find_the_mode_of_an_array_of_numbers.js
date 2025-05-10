// calculate the mode, the most frequently occuring number(s), from an array of numbers. It 
// identifies the number(s) with the highest frequency and returns them in an array.

const mode = (arr) => {
  const frequency = {};
  arr.forEach(num => frequency[num] = (frequency[num] || 0) + 1);
  const maxFrequency = Math.max(...Object.values(frequency));
  return Object.keys(frequency).filter(num => frequency[num] === maxFrequency).map(Number);
};

console.log(mode([1,2,2,3,3,3,4,4,4,4])); // [4]