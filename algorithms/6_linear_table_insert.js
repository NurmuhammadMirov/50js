// Linear Table Insert
// 1. Insert a student's score anywhere in the one-dimensional array scores.
// [90, 70, 50, 80, 60, 85] insert 75(i=2) more the rest backwards

// Analysis:
// -- 1. First create a temporary array tempArray larger than the original scores array length
// -- 2. Copy each value of the previous value of the scores array from the beginning to the insertion position to tempArray
// -- 3. Move the socres array from the insertion position to each value of the lase element and move it back to tempArray
// -- 4. Then insert the score 75 to the index of the tempArray
// -- 5. Finally assign the tempArray pointer reference to the scores;

function insert(array, score, insertIndex) {
  let tempArray = new Array(array.length + 1);

  for (let i = 0; i < array.length; i++) {
    // insertIndex = 2
    if (i < insertIndex) {
      tempArray[i] = array[i];
    } else {
      tempArray[i + 1] = array[i];
    }
  }

  tempArray[insertIndex] = score;
  return tempArray;
}

// testing //
let scores = new Array(90, 70, 50, 80, 60, 85);

// Insert 75 into the position: index = 2
scores = insert(scores, 75, 2);
console.log(scores); // [ 90, 70, 75, 50, 80, 60, 85 ]