// Before we talk about 'map', 'reduce', and 'filter' and how they make accessing and manipulating
// data inside an array a breeze, let us look at the non-breezy approach first. This is an approach
// typically involves a 'for' loop, keeping track of where in the array you are, and shedding a certain
// amount of tears.

// To see this in action, let's say we have an array of names:
let names = ["marge", "homer", "bart", "lisa", "maggie"];

// This aptly named 'names' array contains a list of names that are lowercased. What we want to do
// is capitalize the first letter in each word to make these names look proper. Using the 'for' loop
// approach, this can be accomplished as follows:

let newNames = [];

for (let i = 0; i < names.length; i++) {
  let name = names[i];
  let firstLetter = name.charAt(0).toUpperCase();

  newNames.push(firstLetter+name.slice(1));
}

console.log(newNames);

// Notice that we go through each item, capitalize the first letter, and add the properly
// capitalized name to a new array called 'newNames'. There is nothing magical or complicated
// going on here, but you'll often find yourself taking the items in your array, manipulating
// (or accessing) the items for some purpose, and returning a new array with the manipulated
// data. It's a common enough task with a lot of boilerplate code that you will keep replicating
// unnecessarily. In large codebases, making sese of what is going on in a loop adds unnessary 
// overhead. That's why 'map', 'filter', and 'reduce' were introduced. You get all the flexibility
// of using a 'for' loop without the unwanted side effects and extra code. Who wouldn't wnat thid?!