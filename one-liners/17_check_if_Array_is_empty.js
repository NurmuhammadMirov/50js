// You can check if an array if empty with this snippet.

const isNotEmpty = arr => Array.isArray(arr) && arr.length > 0;

console.log(isNotEmpty([1, 2, 3])); // true 