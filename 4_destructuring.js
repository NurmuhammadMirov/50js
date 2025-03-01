// I first saw destructuring in some other language. it took me some time to understand it but
// once I got the idea I couldn't stop thinking how nice will be to have it in JavaScript. Well
// sometime after war introduced in the language. The destructing is a JavaScript expression that
// extracts array items or object fields into individual variables. Here is how we destruct an object:

const user = { name: "Garen", job: "dev" };
const { name, job } = user;
console.log(`${name}, position: ${job}`); // Garen, position: dev

// The other name of this assignment is 'unpacking'. As we can see here the 'name' and 'job'
// fields are coming from the 'user' object.

// It works similarly with arrays:

// destructuring array
const arr = ["oranges", "apples", "bananas"];
const [a, b, c] = arr;
console.log(`I like ${a}`); // I like oranges

// In the end, if we don't like a field name we may create an alias. In the following 
// example, 'name' becomes 'who' and 'job' becomes 'position'.

// destructuring with renaming
const person = {name: "Lola", job: "designer"};
const { name: who, job: position } = person;
console.log(`${who}, position: ${position}`); //Lola, positionL designer