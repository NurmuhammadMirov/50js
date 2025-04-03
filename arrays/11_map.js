// ##--Modifying Each Array Item with Map--##

// The first of the array methods we will look at for manipulating our array data is 'map'.
// We will use the 'map' method to take all the items in our array and modify them into
// something else into an entirely new array.

// The way 'map' works is as follows: You call it on the array that you wish to affect, and it
// takes a function as the argument. This function will run on each item in the array - allowing
// you to write code to modify each item as you wish. The end result is a new array whose contents
// are the result of function having run and potentially modified each item in the original array.
// Sounds simple enough, right?

// Using 'map', let's revisit our earlier problem of taking the lowercased names from the array
// and capitalizing them properly. We'll look at the full code first and then focus on the intersting
// details next. The full code is as follows:

let names = ["marge", "homer", "bart", "lisa", "maggie"];
function capitalizeItUp(item) {
  let firstLetter = item.charAt(0).toUpperCase();
  return firstLetter + item.slice(1);
}

let newNames = names.map(capitalizeItUp);
console.log(newNames);

// Take a moment to see how this code works. The interesting part is the 'capitalizeItUp' function
// that is passed in as the argument to the 'map' method. This function runs on each item, and notice
// that the array item you are currently on is passed into this function as an argument. You can reference
// the current item argument via whatever name you prefer. We are referencing this argument using the boring
// name of item

// Inside the function, we can write whatever code we want to manipulate the current array item.
// The only thing we need to do is return the new array item value:

// That's all there is to it. After all of this code runs, 'map' returns a new array with all of the
// capitalized items in their correct locations. The original array is never modified, so keep that in mind.