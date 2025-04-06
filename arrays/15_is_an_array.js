// Checking if an Object is an Array

// For detecting whether an item is an array or not, the hip way that all the cool kids
// use is Array.isArray: 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(Array.isArray(numbers));

// If you are old-school, you can also check the constructor property on whatever array-like
// object to see if its value is an 'Array' or not:

// Array
console.log(numbers.constructor === Array); // true

let name = "Homer Simpson";

// Not an array
console.log(name.constructor === Array); // false

let num = 2;
console.log(num.constructor === Number); // true

let obj = {name: 'Lux'};
console.log(obj.constructor === Object); // true

// Notice that we are checking for the 'Array' type directly as opposed to the
// string-based name for it.
