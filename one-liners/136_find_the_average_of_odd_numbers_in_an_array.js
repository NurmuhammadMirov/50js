// the averageOfOddNumbers function calculates the average of odd numbers within a given
// array. It does so by filtering the odd numbers from the array, then computing their sum
// and dividing by the count of odd numbers.

const averageOfOddNumbers = (arr) => {
  const oddNumbers = arr.filter(num => num % 2 !== 0);
  return oddNumbers.reduce((sum, num) => sum + num, 0) / oddNumbers.length;
};
console.log(averageOfOddNumbers([1,2,3,4,5,6,7,8,9,10])); // 5