// ##--Dichotomy Binary Search--##
// Find the index position of a given value from an already ordered array.

// [30, 40, 50, 70, 85, 90, 100]

// -- 1.Initialize the lowest index low=0, the highest index high=scores.length-1
// -- 2.Find the searchValue of the middle index mid=(low+high)/2 scores[mid]
// -- 3.Compare the scores[mid] with searchValue
//      if the scores[mid]==searchValue print current mid index,
//        if  cores[mid]>searchValue that the searchValue will be found between low and mid-1
// -- 4.And so on. Repeat step 3 until you find searchValue or low>=high to terminate the loop.

class BinarySearch{
  static search(arrays, searchValue) {
    let low = 0;
    let high = arrays.length - 1;
    let mid = 0;

    while(low <= high) {
      mid = (low + high) / 2;
      if (arrays[mid] == searchValue) {
        return mid;
      } else if (arrays[mid] < searchValue) {
        low = mid + 1;
      } else if (arrays[mid] > searchValue) {
        high = mid - 1;
      }
    }
    return -1;
  }
}

// testing //
let scores = [30, 40, 50, 70, 85, 90, 100];
let searchValue = 40;
let position = BinarySearch.search(scores, searchValue);
console.log(position); // 1

searchValue = 90;
position = BinarySearch.search(scores, searchValue);
console.log(position); // 5 