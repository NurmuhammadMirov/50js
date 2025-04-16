// Linear Table Append 
// 1. Add a score 75 to the end of the one-dimensional arrays scores.
// original arra
// [90, 70, 50, 80, 60, 85] insert 75 at the end

// Analysis:
// -- 1.First create a temporary array(tempArray) larger than the original socres array length
// -- 2.Copy each value of the scores to tempArray
// -- 3.Assign 75 to the last index position of tempArray
// -- 4.Finally assign the tempArray pointer reference to the original scores;

function append(array, value) {
  // create a new array, length = array.length + 1
  let tempArray = new Array(array.length + 1);

  for (let i = 0; i < array.length; i++) {
    tempArray[i] = array[i];
  }

  tempArray[array.length] = value;

  return tempArray;
}

// testing //
let scores = new Array(90, 70, 50, 80, 60, 85);
scores = append(scores, 75);

console.log(scores)