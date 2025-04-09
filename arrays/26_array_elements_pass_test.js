// Arrays have the handy 'every' method that allows us to check if all items in an array pass
// a test we specify. For example, the following snippet uses the 'every' method and an isEven
// function to check if all items in our someNumbers array are even:

let someNumbers = [2, 4, 38, 20, 10, 13, 42];
function isEven(currentItem) {
  if (currentItem % 2 === 0) {
    return true;
  }
}

console.log(someNumbers.every(isEven)); // false
// Because not all of the item in our 'someNumbers' array are even (looking at you 13), the 
// result is false.

