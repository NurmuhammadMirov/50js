// While adding and removing items is something we'll do frequently, not everything
// we will be doing will involve those two operations. Most of the time, we'll just
// be reading the values stored by our array items instead. The way to read the
// contents of our array is by accessing them by their 'index position'. Let's say 
// we have the following 'greetings' array:

let greetings = ["hi", "sup", "hello", "yo", "hey"];

// Our greetings array has five items. The index position (aslo referred to as index
// values) is a number indicating the position of each item in our array. The first 
// item in our array will start with an index position of 0, and the index position
// goes up by 1 for each subsequent item.

// To read the first item in our array, we will reference our 'greetings' array and
// pass in the index position of 0 as an argument using the brackets:

let first = greetings[0];
console.log(first); // 'hi'

// When we read an item, our array does not get modified. Nothing is added. Nothing is
// removed. The index positions are always fixed where the first item in our array always
// has an index value of 0, the second item has an index value of 1, and so on. If we
// were to remove the first item from our array, our approach for reading the first item
// remains the same:

greetings.shift();
console.log(greetings[0]); // 'sup'

// The only difference is that the value of our first item is going to be 'sup' insread
// of 'hi'

// Now, when working with index positions, there is an important detail about our arrays
// that will be really helpful to know. That detail is around how many items are actually
// in our array. We don't want to specify an index position that is greater than what our 
// array can actually handle. Doing so will return a value of 'undefined':

console.log(greetings[5]); // undefined

// To avoid these types of situations, the way we can calculate how many items are in our 
// array is via the 'length' property:

let arrayLength = greetings.length;
console.log(arrayLength); // 4

// For our 'greetings' array, the 'length' property will return a value of 4 because we have
// 4 items after using shift method. As long as the index position we are specifying stays
// less the total length of the array, we can be confident that we are reading from a valid
// spot in our array. Pretty cool, right?

// There is one more thing I want us to look at. With our understanding of index positions
// and array length, we have all the ingredients needed to loop through our array and read
// every item. Take a look at the following 'for' loop:

for (let index = 0; index < greetings.length; index++) {
  let greeting = greetings[index];

  console.log(greeting);
}

// When this code runs, our loop starts with the 'index' variable set to 0, and it keeps
// running until it hits the last item in our array. Along the way, we are accessing the 
// current array item (greetings[index]) and printing it to our console. Because the length
// of our array starts at 1 and our index position starts at 0, our array's terminating
// condition on 'index < greetings.length' property ends our loop just after it reaches
// our last item. Looping through an array is one of those things that we'll be doing many
// MANY times, so we'll have plenty of chances to see similar looking code in the future.