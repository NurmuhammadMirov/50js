// ##--Linear Table Search--##
// 1. Please enter the value you want to search like: 70 return index.
// original array -> [ 90, 70, 50, 80, 60, 85 ]

function search(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return i;
    }
  }
  return -1;
}

// testing //
let scores = [90, 70, 50, 80, 60, 85 ];
let value = 70;
let index = search(scores, value);


if (index > 0) {
  console.log("Found value: " + value + " the index is: " + index);
} else {
  console.log("The value was not found: " + value);
}


