// The only way we can create a set is by calling on the "Set" constructor:

let mySet = new Set();

// When this code runs, we will have created an empty "Set" object called mySet:
// Now, you may be wondering if there are other cleverer ways to create sets outside of typing 'new Set()'
// like an animal. The answer is a Nope.

// Once we have a set, we can add items to it by using the add method:

mySet.add("blarg");
mySet.add(10);
mySet.add(true);

// Now, here is where the 'uniqueness enforcement superpowers' of sets comes into play. Right now, our set
// contains the text value "blarg", the number "10", and the boolean "true". If we try to add new item that 
// already exists in our set, nothing new will get added. Take a look at the following highlighted line:

mySet.add("blarg");

// We are trying to add the blarg one more time to our set. The blarg item already exists, so our set won't add
// this duplicared item one more time:

// Reacting to duplicate elements without making a fuss is one of the  Set's strongest differentiators compared to
// other data structures like arrays. When our set encounters a duplicate item, it just ignores it and the rest of
// our code executes as if nothing out of the ordinary happened.

// ##--How checking for Duplicates Works--##

// For every item we add, our "Set" object has a really fast way of checking whether the item we are adding is iqual
// to another item already in the set. The way our 'Set' will check for equality with another item is by using the 
// strict equality (aka ===) approach. This is an important detail to call out, for it may be the source of somme
// frustration if we aren't careful. By relying on '===', what our set is checking for is equality of primitive value
// and object references. The primitice value part is what we have been seeing so far in our code where we added some
// text, a numner, and a boolean. Somethign like the following doesn't have any surprises:

let sayWhat = new Set();
sayWhat.add("Lobby!");
sayWhat.add("Lobby!");
sayWhat.add("Lobby!");
sayWhat.add("Lobby!");
sayWhat.add("Lobby!");
sayWhat.add("Lobby!");
sayWhat.add("Lobby!");

console.log(sayWhat);

// Now, here is where things get a little bit interesting. Take a look at the following example:
let anotherSet = new Set();
anotherSet.add(true);
anotherSet.add("abc");
anotherSet.add([1, 2]);
anotherSet.add([1, 2]);
console.log(anotherSet);

// The part that might seem trippy is the two [1, 2] arrays that we are adding. To us human beings, both
// of those arrays seem the same. They are representing what looks to be identical things. To the === check
// our set preforms, those two arrays are distinct. What our set will declare as equal is when object 
// 'references' refer to the same thing. The following snippet highlights this:

let myArray = [1, 2];
let nSet = new Set();

nSet.add(true);
nSet.add("abc");
nSet.add(myArray);
nSet.add(myArray);
console.log(nSet);

// In this case, we have our 'myArray' object' that stores our array values of 1 and 2. It is this object we are
// now adding twice to our set, and since we are adding two 'myArray' object references, the === operator will 
// say that they are both the same. The end resutl will be that our array will end up getting represented inside
// our set just once. The contents of 'anotherSet' in this situation will be 'true', 'abc', and [1, 2].

// Earlier, we saw how to create an empty set that we then added items to. There is another way we can create sets.
// It still involves the 'new' keyword, but we can pass in an existing collection of data when creating our set to 
// pre-populate it:

let someValues = ["a", "b", "c", 10, "a", "c", false];
let newSet = new Set(someValues);
console.log(newSet);

// In this snippet, we have our 'someValues' array that contains a handful of items, and some of the items like the 'a'
// and the 'c' are duplicated. When creatign our 'newSet' object, we still use the 'new Set()' expression, but we pass
// in the 'someValues' array to our 'Set' constructor. When our set gets created this time, it isn't empty. It contains
// the 'unique values' from the items we passed in when creating our set. Our duplicated items get filtered out.

// This might bring up another question. What sorts of item collections can we pass in ot the Set constructor when creating
// a set? The answer is any iterable object. An iterable object is just a fancy name for any object that provides a way for
// us to cycle through all of its values. An array is one exampe of such an object. Text(Strings), TypedArrays, Maps, other
// Set objects, NodeList, and a handful more fall into the iterable object bucket. There are few really technical things an 
// object must also satisy to be considered iterable, and you can read more about that in MDN article on this subject.

// take a look at the following where we pass in a string (aka an iterable object!) as part of creatign our set:
let textSet = new Set("effective");
console.log(textSet);

// We pass in the word, and what gets stored by our set are the unique characters from it. Notice that each letter ends up
// becoming an individual entry in our set. Whenever an iterable object is passed in, each individual value is indeed unique.

// ##-- Checking the Size of Our Set --##

// To figuer out how many items live inside our set, we have access to the handy 'size' property:

let setCount = new Set();
console.log(setCount);

setCount.add("foo");
console.log(setCount.size); // 1

setCount.add("bar");
setCount.add("zorb");
console.log(setCount.size); // 3

// The value returned by the 'size' property gets updated each time we add or remove itesm from our set.

// ##-- Deleting Items from a Set --##
// To delete or remove an item from a set, we can use the appropriately named 'delete' method and pass in 
// the value of the item we are looking to remove:

let robotSounds = new Set(["beep", "boop", "who dis?"]);
// robotSounds.delete("who dis?");
console.log(robotSounds);

// When you delete an item, the deleted item is both removed from the set and a value of true is returned:

if(robotSounds.delete("who dis?")) {
  console.log("Item successfully deleted!");
}

// If we attempt to delete an item that doesn't exist, our set remains unchanged and false is returned by our
// 'delete' method indtead.

// While deleting items individuallu is handy, there may be times when we just want to fully empty all items
// from our set. We can do that by using the 'clear' method:

let fruits = new Set(["Banana", "Orange", "Apple", "Mango", "Kiwi"]);
console.log(fruits.size);

fruits.clear();
console.log(fruits);

// Another way to clear all the items from the set is by doing a 'new Set()' to re-create our Set object. It 
// turns out that it isn't actually faster, so we should just stick with the 'clear' method for efficiently
// emptying all items from our set.

// ##--Checking if an Item Exists--##
let ingredients = new Set(["milk", "eggs", "cheese", "tofu"]);
if (ingredients.has("tofu")) {
  ingredients.delete("tofu");
  ingredients.add("bacon");
}

console.log(ingredients); // "milk", "eggs", "cheese", "bacon"

// The 'has' method takes the item we want to check for as its argument. If the item is found, it returns a true.
// if the item doesn't exist in the collection, it returns a false. The way the check works, as we saw earlier as 
// part of identifying duplicates, is by testing for strict equality

// ##--Looping Through Items in a Set--##
// There will be times when we'll need to loop through the items in a set. The way we can do this is by using the 
// 'for..of' looping pattern. Take a look at the following example:

let txtSet = new Set("diplodocus");

for (let letter of txtSet) {
  console.log(letter);
}

// This for loop will run until every item in the set has been reached. The order the items from our set will be
// accessed is the same as the order they were added to the set in the first place. Unlike arrays, sets don't have 
// any concept of index positions that we can loop through. We have to use this 'for..of approach.

// ##--Entries, Keys, and Values--##
// Under the covers, sets store items in the form of 'key' and 'value' pairs. This is something that makes the most
// sense when visualized. Let's say we have the following code:

let animaniacs = new Set(["Yakko", "Wakko", "Dot"]);

// Inside our animaniacs ser, the items Yakko, Wakko, and Dot will look a bit as follows.
// animaniacs
//   Key   Value 
//  Yakko  Yakko
//  Wakko  Wakko
//   Dot    Dot 

// Think of the internal of our set being like a database or a spreadsheet with two columns. One column is
// labeled 'Key'. Another column is labeled Value. Each row represents the item we are trying to store. The
// thing that makes sets a bit interesting when compared to other key/value storage arrangements (like a hashtable
// for example) is that both keys and values store the same data. That is why in our example, Yakko, Wacko, and Dot
// appear in both the key column as well as the value column. All of this is a bit strange, but...as the kids say these
// days, whatevs!

// The reason why we spent this time looking at this key and value malarkey is that the 'Set' object provides us with a 
// handful of methods that return all the keys, values, and actual key/value pairs (called entries) that make up a set. 
// Take a look at the following snippet:
console.log(animaniacs)
console.log(animaniacs.keys());
console.log(animaniacs.values());
console.log(animaniacs.entries());

// The names of these methods should help clarify what type of data they will return. The 'keys' method returns all the keys
// the 'values' method returns all of the values, and the 'entries' method returns the key/value pair for each item in our
// set. The way the dat is returned is not in the form of something like an array of generic object. The data is returned in
// the form of an 'Iterator' object. This means the way you can access the items is by using the similar for..of approach
// we saw earlier:

for (let item of animaniacs.keys()) {
  console.log(item); // 'Yakko' 'Wakko' 'Dot'
}

// Iterators are really neat and provide a lot of cool functionality for iterating to items.