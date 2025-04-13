// Search the Minimum of Integer Sequences:

// [60, 80, 95, 50, 70]

// 1. Algorithmic ideas
// Intial value minIndex=0, j=1 Compare arrays[minIndex] with arrays[j] if arrays[minIndex] > arrays[j]
// then minIndex=j, j++ else j++ continue until the last number, arrays[minIndex] is the Min Value.

function min(arrays) {
  let minIndex = 0;
  for(let j = 1; j < arrays.length; j++) {
    if (arrays[minIndex] > arrays[j]) {
      minIndex = j;
    }
  }
  return arrays[minIndex];
}

// testing //

let scores = [60, 80, 95, 50, 70];
let minValue = min(scores);
console.log(minValue);