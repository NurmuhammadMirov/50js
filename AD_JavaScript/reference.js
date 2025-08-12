/* What is a Reference? */ 
// References are everywhere in JS, but they're invisible. They just look like variables. Some languages, like C,
// call thses things out explicitly as pointers, with their own syntax to boot. But JS doesn't have pointers, at least
// not by that name. And JS doesn't have any special syntax for them, either.

// Take this line of JavaScript for example: it creates a variable called "word" that stores the string "hello".
let word = "hello";

// 'word' points to the box with the "hello". There's a level of indirection here. The variable is not the box. The variable
// points to the box. Let that sink in while you continue reading.

// Now let's give this variable a new value using the assignment operator '=' :

word = "world";

// What's actually happening here isn't that the 'hello' is being replaced by "world" --- it's ,ore like an entirely new box
// is created, and the 'word' is reassigned to point at the new box. (and at some point, the "hello" box is cleaned up by the 
// garbage collector, since nothing is using it)

// f you've ever tried to assign a value to a function parameter, you probably realized this doesn't change anything outside the function.

// The reason this happens is because reassigning a function parameter will only affect the local variable, not the original one
// that was passed in. Here's an example:

function reassignFail(word) {
  // this assignment does not leak out
  word = "world";
}
let test = "hello";
// reassignFail(test);
console.log(test)