// Getting one value from an array of items
// The last array method we will look at is 'reduce'. This is a bizarre one. With both 'map' and 'filter'
// we went from one array with a starting set of values to another array with a different set of values.
// With the reduce method, we will still start with an array. What we will end up with will be a single value.


// This is definitely one of those cases where we need an example to explain what is going on.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// What we want to do is add up all the values here. This is the kind of thing the 'reduce' method was built for
// where we reduce all the values in our array into a single item. Take a look at the following code.

let total = numbers.reduce(function(total, current) {
  return total + current;
}, 0);

console.log(total); // 78

// We call reduce on our numbers array, and we pass in two arguments to it.
// --1. The callback function
// --2. Initial value

// We start our summing at an initial value of 0, and our callback function is responsible for adding
// up each item in the array. Unlike earlier where our callback function took only the current array item
// as its argumeny, the callback function for 'reduce' is slighly more involved. You need to deal with two
// arfuments here as well.
// --1. The first argument contains the total value of all the actions you've done so far
// --2. The second argument is the familiar current array item
// By using these two arguments, you can easily construct all sorts of scenarios involving keeping track of
// something. In our example, since all we want is sum of all items in the array, we are summing up the total
// with the 'value' of current.

// ##--Note:--##
// More on the callback function arguments

// For our callback functions, we've only specified one argument representing the current array item for 'map'
// and 'filter'. We specified two arguments representing the total value as well as the current item for 'reduce'.
// Our callback functions have two optional arguments you can specify.

// --i. The current index position of your current array item
// --ii. The array you are calling 'map', 'filter', or 'reduce' on

// For 'map' and 'filter', these would be the second and third arguments you specify. For 'reduce', it would be
// third and fourth arguments. You may go your entire life without ever having to specify these optional arguments,
// but if you ever run into a situation where you need them, you now know where to find it.

// Let's look at an example that shows the output of 'reduce' to be something besides a number. Take a look
// at the following.

let words = ["Where", "do", "you", "want", "to", "go", "today?"];

let phrase = words.reduce(function(total, current, index) {
  if (index == 0) {
    return current;
  } else {
    return total + " " + current;
  }
}, "");

console.log(phrase);

// In this  example, we are combining the text-based content of our 'words' array to create
// a single value that ends up showing 'Where do you want to go today?' Notice what is going
// on in our callback function. Besides doing the work to combine each item into a single word,
// we are specifying the optional third argument that represents our current item's index position
// We use this index value to special case the first word to deal with whether we insert or not 
// insert a space character at the beginning.
