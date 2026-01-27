// ---adding items to the end of an array
let name1 = ['bar', 'foo', 'zorb'];
name1.push('blarg');
console.log(name1);
// 'blarg' - added via push to the end of our array!

// ---adding items to the start of an array
let name2 = ['bar', 'foo', 'zorb'];
name2.unshift('blarg', 'beep');
console.log(name2);
// notice that we added 'blarg' and 'beep', and they found themselves in the
// first and second positions in our array:

// ---removing items
let numbers = [1, 2, 3, 4, 5];
let removedItem = numbers.pop();
console.log(removedItem);
console.log(numbers); // [ 1, 2, 3, 4 ]
// notice the last item in our numbers array has been removed
// the other way to remove an item is via the 'shift' method:
let num = [0, 1, 2, 3, 4, 5];
num.shift();
console.log(num);
// when using 'shift', it is the first item that gets removed in this case
// also calling 'pop' or 'shift', the item removed from our array gets returned.
// ex:
let numArray1 = [0, 1, 2, 3, 4, 5];
let removedItem1 = numArray1.shift();

console.log(numArray1); // [ 1, 2, 3, 4, 5 ]
console.log(removedItem1); // 0

