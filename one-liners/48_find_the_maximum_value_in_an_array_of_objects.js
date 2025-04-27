// Find the maximum value of a specific property in an array of objects.

const findMaxValue = (arr, key) => Math.max(...arr.map(item => item[key]));

const students = [
  {name: "Alice", score: 80},
  {name: "Bob", score: 95},
  {name: "Charlie", score: 70},
];

console.log(findMaxValue(students, "score")); // 95