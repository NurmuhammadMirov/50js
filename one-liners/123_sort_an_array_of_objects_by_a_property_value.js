// the sortByPorperty function arranges an array of objects based on a specified property's value.
// It employes the sort method with a custom comparison function that compares the property values of
// two objects

const sortByProperty = (arr, prop) => arr.sort((a, b) => a[prop] - b[prop]);
const people = [
  {name: 'Alice', age: 25},
  {name: 'Bob', age: 20},
  {name: 'Charlie', age: 30},
];

console.log(sortByProperty(people, 'age'));