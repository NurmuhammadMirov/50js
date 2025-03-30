// To find something in our array, we have the handy "indexOf" method. We pass in the value
// we are looking for, and 'indexOf' will do the hard work of letting us know if the value
// exist in our array or not.

// If the value exists, 'indexOf' will return the index position of the first array item storing
// our result:

let friends = ["Joey", "Monica", "Ross", "Chandler", "Phoebe", "Rachel"];
let result = friends.indexOf("Chandler");
console.log(result); // 3
// If the value does not exist, 'indexOf will return a '-1':
let res = friends.indexOf('Garen');
console.log(res); // -1

// If you have an array with the values you are looking for appearing multiple times,
// indexOf will only find the first entry and stop there. We will have to write some
// additional logic to find all instances, and that is something we'll explore later.

// Another detail to note is that there is a 'lastIndexOf' method at our disposal as 
// well. This method is nearly identical to 'indexOf', but instead of finding the first
// matching value line 'indexOf' does, 'lastIndexOf' finds the last matching value insread.

// ##--NOTE--##
// Arrays can accept any combination of values!
// There is something we should mention about arrays. We aren't limited to storing values
// of only one type, such as only strings or numbers. JavaScript isn't very strict about
// rules like this (unlike a strongly-typed language like Jave or C#), so we can get away
// with doing something like the following:
let myArray = ["Hello", "PI", 3.14, true];
// This flexibility arrays bring with them makes them powerful, but it also means we have to
// extra careful to not accifentally mix and match types if we aren't intending to.