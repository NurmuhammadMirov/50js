// the median function calculates the median of an array of numbers. The median is the middle value
// of a dataset when it is ordered.

const median = (arr) => {
  const sorted = arr.sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
};

console.log(median([1,3,5,7,9])); // 5