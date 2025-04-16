// ##--Insert Sorting Algorithm--##
// Take an unsorted new element in the array, compare it with the already sorted element
// before, if the element is smaller than the sorted element, insert new element to the
// right position.

// original array -> [ 90, 70, 50, 80, 60, 85 ]

class insertSort {
  static sort(arrays) {
    for (let i = 0; i < arrays.length; i++) {
      let insertElement = arrays[i]; // Take unsorted new element
      let insertPosition = i; // Inserted position

      for (let j = insertPosition - 1; j >= 0; j--) {
        // if the new element is smaller than the sorted element, shifred to the right
        if (insertElement < arrays[j]) {
          arrays[j + 1] = arrays[j];
          insertPosition--;
        }
      }
      arrays[insertPosition] = insertElement; // Insert the new element
    }
  }
}

let scores = [ 90, 70, 50, 80, 60, 85 ]; 
insertSort.sort(scores);
console.log(scores);