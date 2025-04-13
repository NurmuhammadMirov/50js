// ##--Bubble sorting Algorithm:
// Compare arrays[j] with arrays[j + 1], if arrays[j] > arrays[j + 1] are exchanged.
// Remaining elements repeat this process, until sorting is completed.

class BubbleSort {
  static sort(arrays) {
    for (let i = 0; i < arrays.length - 1; i++) {
      for (let j = 0; j < arrays.length - i - 1; j++) {
        // swap
        if (arrays[j] > arrays[j + 1]) {
          let flag = arrays[j];
          arrays[j] = arrays[j + 1];
          arrays[j + 1] = flag;
        }
      }
    }
  }
}

// testing //
let scores = [60, 50, 95, 80, 70];
BubbleSort.sort(scores);
console.log(scores);


