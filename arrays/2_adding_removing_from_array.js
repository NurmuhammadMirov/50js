// After creating our array, we will often find ourselves wanting to add or remove
// items from it as part of our application just doing its thing or us interacting
// with it.

// Adding items
// To add items to our array, we have the push and unshift methods. The push method
// adds items to the end of our array as shown below:

let names = ["bar", "foo", "zorb"];
let bb = names.push("blarg");
console.log(names);


// The 'unshift' method adds items to the beginning of our array:
let names1 = ["bar", "foo", "zorb"];
names1.unshift("blarg", "beep");
console.log(names1);
// Notice that we added blarg and beep, and they found themselves in the
// first and second positions in our array.

// In both cases, when we are adding items to our array using either push or
// unshift, the new length (aka count) of all the items in our array gets returned.
// This may come in handy when needing to know how big our array is after adding or
// remocing items.

// Removing items
// Just like wiht adding, we have two ways of removing items from our array. We have
// the 'pop' method that removes the last item from our array, and we have shift method
// that removes the first item from our array. Below is pop in action:

let numbers = [0, 1, 2, 3, 4, 5];
let oo = numbers.pop();
console.log(numbers); // [0, 1, 2, 3, 4]
// Notice the last item in our numbers array has been removed.

// The other way to remove an item is via the 'shift' method:
let nums = [0, 1, 2, 3, 4, 5];
nums.shift();
console.log(nums); // [1, 2, 3, 4, 5]
// When using 'shift', it is the first item that gets removed in this case is 0

// When calling either 'pop' or 'shift', the item removed from our array gets returned.
// Below is an example of what this looks like for shift:

let ns = [0, 1, 2, 3, 4, 5];
let removedItem = ns.shift();
console.log(ns); // [1, 2, 3, 4, 5]
console.log(removedItem); // 0
// The removedItem variable stores our removed item, which is the number 0.
