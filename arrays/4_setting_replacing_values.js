// When we have a reference to an array item using the index posotion, we arent limited to just
// reading the values stored by that item. We can just as easuly replace the value stored by
// that item by assigning a new value to it. Take look at the following snippet:

let greetings = ["hi", "sup", "hello", "yo", "hey"];
greetings[2] = "hola";
console.log(greetings); // ["hi", "sup", "hola", "yo", "hey"];
// At index position 2, we overwrite the initial 'hello' value with 'hola'

// What we just saw is a nice, direct case where the index position we are specifying is one
// our array already contains a value for. There are a handful of strange cases we can get into
// here - like what happens when our index position is larger than the number of items in our
// array, we specify a value for the index position that isn't actually, or we specify a negative
// number.
