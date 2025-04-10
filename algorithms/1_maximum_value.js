function max(arr) {
  // Maximum initialization value is 0
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      // swap
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  let maxValue = arr[arr.length - 1];
  return maxValue;
}

// testing //

let scores = [60, 50, 95, 80, 70];
var maxValue = max(scores);
console.log(maxValue); //95
