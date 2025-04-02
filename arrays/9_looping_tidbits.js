// In the previous sections, we saw how to loop through our array using the 'for', 'for...of',
// and 'forEach' approaches. What we looked at were the basic use cases that we'll always encounter,
// but we can't fully round out our understanding of how to loop through arrays without looking
// at a few more slighly less common cases as well.

// ##--Looping in Reverse--##
// The default looping direction is one where we start with the first array item and iterate
// through each subsequent item until we hit the end.

// For a handful of reasons, we may want to loop through our array backwards where we start
// with the last item and make our way towards the front:

// With a 'for' loop, we can accomplish this by changing our loop's starting and running
// conditions:

let names = ["George", "Ringo", "Paul", "John"];
for (let i = names.length - 1; i >= 0; i--) {
  let name = names[i];
  console.log(name);
}
// 'John' 
// 'Paul' 
// 'Ringo' 
// 'George'

// Notice that the various values we use to tell our 'for' loop how to run have flipped from
// what they were a few setions ago. Our starting point is the last item, we run as long as our
// index position is greater than or equal to 0, and we increment by -1 to go backwards with
// each loop iteration.

// With the 'for..of' and 'forEach' looping appraoches, the direction of the looping is not
// something we can easily control. Those details are hidden from us. What we do in thid case is
// a little sneaky. We reverse our array itself. By doing this, even though our loop direction
// remains unchanged, the items we access are now in revers order.

// Putting all those words into code, below is what accessing our array items in revers for
// the 'for..of' and 'forEach' approaches look like:

let reversedNames = names.slice().reverse();

// Using for...of
for(let [index, name] of reversedNames.entries()) {
  console.log(`${index}: ${name}`);
}
// '0: John' 
// '1: Paul' 
// '2: Ringo' 
// '3: George'

// Using forEach
reversedNames.forEach((name, index) => console.log(`${index}: ${name}`));
// '0: John' 
// '1: Paul' 
// '2: Ringo' 
// '3: George'

// The 'reversedNames' array stores a reversed copy of our original 'names' array. Creating
// a copy of the 'names' array is optional, but the reverse method modifles the array directly.
// It is considered a bad practice to modify our original data, so we create a (fast and shallow)
// copy of our array using 'slice' and then call reverse on that.

// Once we have oru reversed array copy, it is business as usual when using the 'for...of' and
// 'forEach' approaches to loop through our array items. The end resutl is that our items will
// now be accessed in a reverse order via the 'reversedNames' array compared to what they were
// in the original names array.

// ##--Inconsistencies--##
// The 'for', 'for...of', and 'forEach' looping appraoches have a lot of common functionality.
// What sometimes gets in the way is when some common looping behaviors you may expext don't
// exist or work differently than expected. Let's look at a few of those inconsistencies.

// ##--Control Statements--##
// It's common to use control statements like 'break' or 'continue' to end our loop
// midway or skip a loop iteration.

// Both 'for' and 'for..of' support the 'break' and 'continue' control statements
// lie a boss:

let items = ["TT", 3.14, "PI", Math.PI];

for (let i = 0; i < items.length; i++) {
  let item = items[i];

  // End the loop
  if (item == "PI") {
    break;
  }
  console.log(item);
}
// 'TT'
// 3.14

for (let item of items) {
  // Skip current iteration
  if (item == 3.14) {
    continue;
  }

  console.log(item);
}
//'TT'
// 'PI'
// 3.141592653589793

// The forEach approach, unlike a boss, doesn't not support them. If you need to use 'forEach'
// and you looping logic relies on using 'break' and 'continue', the only solution is to change
// your logic or use 'for' or 'for...of' instead.

// ##--Iterating Through A Sparse Array--##
// A sparse array is one of those arrays where there are some gaps with array items not directly
// adjacent to another array item. The following is one way we can end up with a sparse array:

let sparse = ["bar", "foo", "zorb"];
sparse[5] = "blah";
console.log(sparse.length); // 6

// We create our array with the first three items (index positions 0 through 2) prepopulated.
// We then add 'blah' to live at index position 5. If we had to visualize this array, this what
// we will see:
// sparse; -- [ 'bar', 'foo', 'zorb', undefined, undefined, 'blah' ]

// Notice that index positions 3 and 4 are empty. We might expect the length of our array to be
// a count of the actual elements with content and be 4, but that's not how this all works. The
// length will be 6 since ther are six array items. That two of the array items are empty does not
// factor into the length calculation. This has some intersting effects in how our various loop 
// approaches deal with iterating through this array.

// Let's start with our 'for' loop:

for (let i = 0; i < sparse.length; i++) {
  console.log(`${i}: ${sparse[i]}`)
}
// '0: bar' 
// '1: foo' 
// '2: zorb' 
// '3: undefined' 
// '4: undefined' 
// '5: blah'

// The 'for' loop goes through every item including the empty items at index positions 3 and 4. This is similar
// to behavior our 'for...of' loop shows in this situation as well:

for (let [index, item] of sparse.entries()) {
  console.log(`${index}: ${item}`);
}
// '0: bar' 
// '1: foo' 
// '2: zorb' 
// '3: undefined' 
// '4: undefined' 
// '5: blah'

// ##--Where things are different with 'forEach"--##:
sparse.forEach((item, index) => console.log(`${index}: ${item}`));
// 0: bar
// 1: foo
// 2: zorb
// 5: blah

// When iterating through a sparse array using 'forEach', the callback function only 
// gets called on the array items with actual elements in them. The empty elements
// are skipped.