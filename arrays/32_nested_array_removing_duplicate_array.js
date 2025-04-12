let bigArray = [
  ["a", "b", "c"],
  [1, 2, 3],
  [true, true, false],
  [":)", ":P", ":X"],
  [true, false, false],
  [1, 2, 3],
  ["foo", "zorb", "blarg"],
  ["a", "b", "c"]
];

// Our 'bigArray' is a two-dimensional array where we have an array whose contents are also arrays.

// The big thing to note is that some of the arrays in our 'bigArray' aren't unique. They are...repeated:

// What we want to do is come up with a mechanism for removing these duplicate arrays so that our bigArray's
// contents are unique.

// So...that is the promblem we are trying to solve. In the next section, we are going to make big jump and look
// at how we will go about solving this problem.

// ##--Our Approach--##
// There are a few approaches we can take to remove the duplicate content arrays from our parent array. While we can
// take more brute-force approach and compare each array's contents with every other array's contents to identify
// duplicates, we can take another approach and rely on the Set object and its natural ability to filter our duplicate values

// On the surface, what we are trying to do with sets seems like it has a simple solution. When creating a new set, we can 
// pass in a collection of data (like our arrays!) and rely on our 'Set' object's default behavior where only the unique 
// values from that collection are stored:

let uniqueArray = new Set(bigArray);
console.log(uniqueArray);

// As it turns out, this won't work. One set-related quirk that is highlighted in 'Sets' chapter is that sets do their
// filtering magic only on 'primitive values' and 'object references'.

// Our bigArray contents are neither of those two things. They are straight-up objects, so the default set filtering
// behavior won't work:

// Is that really a problem? Probably...but not for us! We have a way of tricking our set into thinking our array object
// are worth filtering, and the way we do that is by turning our array contents into a string:

// By turning our arrays into strings, we are now dealing with a primitive value that is part of a set's natural diet.
// Our set is no longer allergic to filtering out duplicate values:

// Once our duplicate values have been removed, we can unstringify our content and turn our strings back into arrays.

// At this point, this gets us to the destination we wanted to get to from the very beginning. We started off with an array
// whose contents are arrays with some duplicate content. We ended up with an array whose contents are still arrays, but these
// arrays are unique!

// ##--Turning our Arrays into Strings--##
let stringArray = bigArray.map(JSON.stringify);
console.log(stringArray);

// The way we do this conversion is by using the 'map' function. The Mapping, Filtering, and Reducing Things chapter
// goes into more detail on how map works, but the elevator pitch version is that 'map' goes through each item in
// our array and calls a function on each item. The function we are calling is JSON.stringify, which...stringifies data.
// Once our 'map' function has fully run, what gets stored by 'stringArray' is our existing array data turned into string form:

// Notice that this string conversion is fairly direct. Each array item is wrapped in quotation marks to designate it as 
// a string, and some of the contetns of each array are additionally processed into strings as well with escape characters
// and other details thrown in. The logic behind how exactly to stringify and what items to leave as-is is part of the 
// JSON.stringify function's internals. That logic is something we don't have a direct hand in defining, but the default
// behavior is good enough.

// Creating the Set

// With our array of strings ready to go, it's time to create our set and filter out duplicate values. Add the following
// two lines to what you have already:

let uniqueStringArray = new Set(stringArray);
console.log(uniqueStringArray);
// With these lines, we are creating a new Set object called 'uniqueStringArray' and pass in our earlier 'stringArray'
// as part of creating our set. The result of this line running is that our 'uniqueStringArray' stores only the unique
// values from our stringArray collection:

// Notice that our collection went from having eighr items to just six after the two duplicate items were filtered out!

// Going Back to Arrayville!
// The last step is for us to go from an array of strings back to an array of arrays. There are a few steps involved here.
// 
let uniArray = Array.from(uniqueStringArray);
console.log(uniArray);

// When we do this, our set containing string values will magically turn into an array containing string values. It all
// gets stores as part of the 'uniArray' object:

// We are almost done here. The last step is to turn these string values back into their non-string equivalents. We could
// use 'map' again and provide the 'JSON.parse' function to turn our stringified arrays back into regular arrays. There is
// an easier way. The Array.from method takes a second argument, and this is a function that gets called on each array item.
// Let's judy udr that! We can modify our uniArray code to look as follows:

let uArray = Array.from(uniqueStringArray, JSON.parse);
console.log(uArray);

// When this code runs, we are back to having an array of arrays since JSON.parse unsttingifies each array item back into its
// original array form. The important change from our starting point is that all duplicate values have been removed.

let str = bigArray.map(JSON.stringify);
let uniqueStrArray = new Set(str);
let uniqueArr = Array.from(uniqueStrArray, JSON.parse);
console.log(uniqueArr);

// If you want to go all compact (and potentially impair code readability), all of these statements can be put into
// just one line:

let uArr = Array.from(new Set(bigArray.map(JSON.stringify)), JSON.parse);
console.log(uArr);