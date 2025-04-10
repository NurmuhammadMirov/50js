// The approach we will use for shuffling the contents of an array is something "Fisher-Yates devised and Don 
// Knuth popilarized". The general approach they came up with can be seen in code form below:

Array.prototype.shuffle = function() {
  let input = this;

  for (let i = input.length - 1; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let itemAtIndex = input[randomIndex];

    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
  return input;
}

let tempArray = [1,2,3,4,5,6,7,8,9];
tempArray.shuffle();

// and the result is...
console.log(tempArray);

// The 'shuffle' function is responsible for shuffling the contents of our array. It is declared as a prototype
// on the build-in Array object, so we can use it on any array we create.

// If all you wanted was the code to shuffle the contents of an array in JavaScript, uou can pretty much stop here
// If you wanted to be reaaly cool (or cooler!) and learn a bit more about how the shuffling actually works, you 
// should read on

// ##--How the Shuffling Works--##
// The best way to understand what the code does is to first take a step back and learn (using words and pictures)
// more about how our shuffling actually works.

let nums = [1,2,3,4,5,6,7,8,9];

// The first thing we do is start at the 'end of our array' by selecting our last item, the one containing the 9:
// [1,2,3,4,5,6,7,8,9]

// What we are going to do is swap the contents of our currently selected item with another item randomly selected
// from our array. The range of items we can randomly pick from are the "selected item itself and all items that precede it":

// Since this is our first run, every item in our array is fair game for being chosen. Let's say that the random 
// item we pick is the one containing the 4:


// Once the random number had been picked, we 'swap the contents' of our selected item wiht the randomly selected item.
// This would mean the 9 and the 4 swap places:
// [1,2,3,9,5,6,7,8,4]

// With the swap completed, we are done with our last item. We are also done with the first run of our shuffling approach.
// We still have many more items that need to be shuffled, so we "traverse through our array backwards" and now pick
// our second-to-last item: [8]
// [1,2,3,9,5,6,7,8,4]

// Similar to before, it is time for us to pick another iten from our array to swap with our selected item. The range of
// numbers we can pick from is the following:
// [1,2,3,9,5,6,7,8]

// Notice that the last item is no longer eligible for being swapped. The items we can pick, to reiterate what we mentioned
// ealier, are the selected item and all the items that precede it. For our example, the random number we'll pick will
// be the 2:

// Once the random item is picked, we perform the swap with our selected item:
// [1,8,3,9,5,6,7,2,4]

// After the swap had been done, this whole process continues all over again by us moving on to the next previous item and
// repeating everything we've seen so far. Now, I could go on explaining our shuffle approach with each remaining item, but
// that will probably be really boring. Instead, the two cases we looked at should prepare you well for shuffling elements
// stops when we reach the end of our array, which is actually the first item since we are traversing our array backwards.

// Now, lets shift gears to go from words and images to code and see how everything fits together nicely.


