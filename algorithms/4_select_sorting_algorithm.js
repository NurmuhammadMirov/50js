// Select SOrting Algorithm:
// Sorts an array by repeatedly finding the minimum element from unsorted part and putting it at the beginning.

// Sort the following numbers from small to large
// [60, 80, 95, 50, 70]

class SelectSort {
  static sort(arrays) {
    let len = arrays.length - 1;
    let minIndex; // Save the index of the selected minimum

    for (let i = 0; i < len; i++) {
      minIndex = i;
      // Save the minimum value of each loop as the first element
      let minValue = arrays[minIndex];
      for (let j = i; j < len; j++) {
        if (minValue > arrays[j + 1]) { // minimum value exchange with the minIndex
          minValue = arrays[j + 1];
          minIndex = j + 1;
        }
      }

      if (i != minIndex) {
        let temp = arrays[i];
        arrays[i] = arrays[minIndex];
        arrays[minIndex] = temp;
      }
    }
  }
}

// ////testing//// //
let scores = [90, 70, 50, 80, 60, 85];
SelectSort.sort(scores);
console.log(scores);