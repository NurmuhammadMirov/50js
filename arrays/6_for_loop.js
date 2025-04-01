// The oldest and most popular way to loop through an array is by using a 'for' loop.
// To use a 'for' loop, what we need is a starting point, ending point, and the amount
// to increment with each run of our loop. With arrays, we totally have all of that
// information right at our finger tips:

// We know the first item starts with an index position of 0. We know the last item has
// an index position that is one less than the total length of our array (items.length -1).
// Our index positions go up by 1, so we know the amount to increment by each time our loop
// goes through a cycle. Putting this all together, using a 'for' loop to go through the items
// in our array will look as follows:

let items = ["TT", 3.14, "PA", Math.PI];

for (let i = 0; i < items.length; i++) {
  let item = items[i];
  console.log(item);
}

// "TT"
// 3.14
// "PA"
// 3.14159265358979

// The variable i represents both our loop's current count and the index postion.
// That makes some of our loop-related bookkeeping convenient. I only call this out
// because our next two loop approaches make us jump through hoops to give us the index
// position at the current loop iteration.