// if you want to swap two items in an array, there are several ways to go about doing this.
// The quickest approach is to do something as follows:

let myData = ["a", "b", "c", "d", "e", "f", "g"];
let temp = myData[2];
myData[2] = myData[5];
myData[5] = temp;
console.log(myData);

// For something a bit more reusable, we can use a function whose job is 
// to swap the items of an array:
 let myData1 = ["a", "b", "c", "d", "e", "f", "g"];

 function swap(input, index_A, index_B) {
  let temp = input[index_A];

  input[index_A] = input[index_B];
  input[index_B] = temp;
 }

 swap(myData1, 2, 5);
 console.log(myData);

//  The 'swap' functions works by taking three arguments:
// --1. The array
// --2. The first item whose contents we want to swap
// --3. The second item whose contents we want to swap

// When we pass these three arguments in, the end result is that our specified array will get the items
// at the specifued index positions swapped. If we want to go one step even further, we can extend our
// Array object with this swapping capability.
