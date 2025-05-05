// calculate the standard deviation of an array of numbers.
const mean = (arr) => arr.reduce((acc, val) => acc + val, 0) / arr.length;
const standardDeviation = (arr) => {
  const avg = mean(arr);
  const squaredDiff = arr.map(num => Math.pow(num - avg, 2));
  const variance = mean(squaredDiff);
  return Math.sqrt(variance);
}
console.log(standardDeviation([1,2,3,4,5])); // 1.4142135623730951