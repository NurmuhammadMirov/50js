// this function computes the average of even numbers present in an array. It first fiters out
// the even numbers from the array, then calculates the sume of these even number, and finally
// divides the sum by the count of even numbers to obtain the average.

const averageOfEvenNumbers = (arr) => {
  const evenNumbers = arr.filter(num => num % 2 === 0);
  return evenNumbers.reduce((sum, num) => sum+num, 0) / evenNumbers.length;
};

console.log(averageOfEvenNumbers([1,2,3,4,5,6,7,8,9,10])); // 6