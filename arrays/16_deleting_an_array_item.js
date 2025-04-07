// Deleting an Array Item

// While it is easy to add an item to the array, there is no built-in equivalent for removing an item
// you've added. You'll need to rely on 'indexOf' and 'slice' to create your own remove functionality.

let evenNumbers = [0, 2, 4, 6, 7, 8, 10];
console.log(evenNumbers.length); // 7

let removeIndex = evenNumbers.indexOf(7);

if (removeIndex > -1) {
  evenNumbers.splice(removeIndex, 1);
}

console.log(evenNumbers.length); // 6
console.log(evenNumbers);

// This approach will completely remove any trace of the array item ever having existed.

// For a less intrusive approach, you have the 'delete' keyword. if you try to delete an item from an array
// using it, the behavior is a bit different. Take a look at the following code snippet to see what happens:

let evenNum = [0, 2, 4, 6, 7, 8, 10];
console.log(evenNum.length); // 7

let removeIdx = evenNum.indexOf(7);
delete evenNum[removeIdx];

console.log(evenNum.length); // 7
console.log(evenNum); // [0, 2, 4, 6, undefined, 8, 10];

// The only thing that happens using the delete keyword is that the removed item is set to an empty value,
// but an array entry still remains. That entry will now reference an empty item. The length of the items
// in the array is still the same as well. That may not be what you expect.

// Where our odd 7 number was, you will see empty instead. the takeaway is this. If you want to retain all 
// of your array indexes, use the delete keyword when you want to remove an item. if you want to fully remove
// an item and any trace of it from your array, use the 'indexOf' and splice approach indread.
