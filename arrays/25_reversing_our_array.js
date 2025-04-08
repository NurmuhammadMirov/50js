// We have the ability to reverse the order items appear in our array by using
// the built-in 'reverse' method:

let numbers = [1, 2, 3, 4, 5, 6];
numbers.reverse();
console.log(numbers); // [ 6, 5, 4, 3, 2, 1 ]

// The 'reverse' method does modify our original array itself. If you wish to preserve our original
// array and create a new reversed array instead, we can do the following:

let nums = [1, 2, 3, 4, 5, 6];
let reversed = [...nums].reverse();
console.log(reversed);