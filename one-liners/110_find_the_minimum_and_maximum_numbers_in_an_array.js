// the minMax function calculates both the minimum and maximum values within an array. It achieves this by
// employing the Math.min and Math.max function alongside the spread operator to extract the elements' values
// from the input array. the fucntion returns an object containing both the minimum and maximum values.
const minMax = (arr) => ({
  min: Math.min(...arr),
  max: Math.max(...arr)
});

console.log(minMax([10, 5, 25, 3, 15])); // { min: 3, max: 25 }