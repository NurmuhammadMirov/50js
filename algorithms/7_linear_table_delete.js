// Linear Table Delete
// 1. Delete the value of the index=2 from scores array
// original array -> [90, 70, 50, 80, 60, 85]

// Analysis: 
// -- 1.Create a temporary array tempArray that length smaller than scores by 1.
// -- 2.Copy the data in front of i=2 to the front of tempArray
// -- 3.Copy the array after i=2 to the end of tempArray
// -- 4.Assign the tempArray pointer reference to the scores
// -- 5.Printout scores

function remove(array, index) {
  // create a new array, length = array.length - 1
  let tempArray = new Array(array.length - 1);

  for (let i = 0; i < array.length; i++) {
    // index = 1
    // Copy the array after index to the front of tempArray
    if (i < index) {
      tempArray[i] = array[i];
    }

    // Copy the array after index to the end of tempArray
    if (i > index) {
      tempArray[i - 1] = array[i]
    }
  }

  return tempArray;
}

// testing // 
let scores = new Array(90, 70, 50, 80, 60, 85);
scores = remove(scores, 2);
console.log(scores); // [ 90, 70, 80, 60, 85 ]