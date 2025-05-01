// Problem: JavaScript has both strict adn type-converting comparisons:
//     *Strict comparison (e.g., ===) checks for value equality without
//      allowing coercion.
//     *Abstract comparison (e.g., ==) checks for value equality with
//      coercion allowed.

// Solution:

const a = "42";
const b = 42;
console.log(a == b); // true
console.log(a === b); // false

// Some simple equality rules: if either value (also known as side) in a comparison could be the true
// or false value, avoid == and use ===.
// if either value in a comparison could be of these specific values (0, "", or []), avoid == and use ===.

// In all other cases, you're safe to use ==. Not only is it safe, but in many cases, it simplifies
// your code in a way that improces readability