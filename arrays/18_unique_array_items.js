// Thanks to ES6 and the "Set" object, removing duplicate values from your array is pretty straightforward:

let names = ["Peter", "Joe", "Cleveland", "Quagmire", "Joe"];
let uniqueNames = [...new Set(names)];
console.log(uniqueNames);

// The trick is to use the spread(...) operator that expands a collection of items into its individual pieces.
// There is on wrinkle with this approach. In my testing, the performance of this approach is much slower than
// the more verbose approach:
let myArray = ["bar", "foo", "zorb", "bar", "baz", "fum", "baz"];

Array.prototype.removeDuplicates = function() {
  let input = this;
  let hashObject = new Object();

  for (let i = input.length - 1; i >= 0; i--) {
    let currentItem = input[i];

    if (hashObject[currentItem] == true) {
      input.splice(i, 1);
    }

    hashObject[currentItem] = true;
  }

  return input;
}

myArray.removeDuplicates();
console.log(myArray); // [ 'foo', 'zorb', 'bar', 'fum', 'baz' ]

