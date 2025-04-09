// In the previous trick, we saw how the 'every' method returns a 'true' only if all items
// in the array pass our test. The 'same' method is less picky. This method will return a
// true if any items in our array pass our test. Take a look at the following example:

let highScores = [46, 191, 38, 10, 156];

function isReallyHighScore(currentItem) {
  if (currentItem > 100) {
    return true;
  }
}

console.log(highScores.some(isReallyHighScore)); // true

// We have an array of high scores, and the isReallyHighScore function checks if any of the scores
// are greater than 100. Combining all of this with the 'some' method, the result is true because
// the values 191 and 156 are indeed greater than 100. It's ok that not all of the scores are greater
// than 0. That's just how the 'some' method rolls.