// ##--Reverse Array--##
// Inversion of ordered sequence:

// 1. Algorithmic ideas
// Initial i = 0 and then swap the first element arrays[i] with last element arrays[length - i - 1]
// Repeat until index of middle i == length / 2.

function reverse(arrays) {
  // arrays = [1, 2, 3]
  let length = arrays.length;
  // length = 3
  let middle = length / 2;
  // middle = 1.5
  for (let i = 0; i <= middle; i++) {
    let temp = arrays[i];
    arrays[i] = arrays[length - i - 1];
    arrays[length - i - 1] = temp;
  }
}

// testing //
let scores = [1, 2, 3, 4, 5];
reverse(scores);
console.log(scores);