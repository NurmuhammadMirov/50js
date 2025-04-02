// Another way of looping through our array items is by relying on the 'forEach' method. Just like 'for..of',
// the initial setup work is minimal. Below is 'forEach' in action:

let animals = ["F", "B", "O", "W", "D"];

animals.forEach((item) => console.log(item));
// F
// B
// O
// W
// D
// Notice that all we really specified is our array, the forEach method, and a callback function that accepts
// the current array item as an argument. If we wanted to include the current index position as well, our 
// callback function (very conveniently) accepts the index position as its seconf argument:

animals.forEach((item, index) => console.log(`${index}: ${item}`));
// 0: F
// 1: B
// 2: O
// 3: W
// 4: D

// Purely from a code simplicity point of view, the forEach method is really nice. it has some
// quirks like missing support for 'break' and 'continue' that we'll talk about later, but it's
// another solid approach for looping through our arrays using a very compact syntax.

// ##--Note:--##
// Defining Functions is Stll Cool
// In our forEach examples, we specified our callback function inline by using an arrow function.
// Uisng arrow function is entirely optional. If you prefer a more traditional function syntax, we
// can rewrite the loop as follows:

animals.forEach(function(item) {
  console.log(item);
});

// To go further, the function body doesn't have to be a part of the 'forEach' call. We can separate
// the function out even further:

animals.forEach(printArrayItem);

function printArrayItem(item) {
  console.log(item);
}
// There isn't really a right or more preferred approach here. The arrow function syntax is more concise,
// modern, and hip. It does some nice thingd with ensuring the value of 'this' is predictable. The function-
// based syntax is the OG. Use whichever approach you like.