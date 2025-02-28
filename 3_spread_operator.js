// Back in the days when I started reading about the new features of JavaScript,
// I was the most excited about the spread operator. It allows us to expand iterable
// (or strings) in various places. I'm very often using this operator when constructing
// an object. For example:

const name = {
  firstName: "Krasimir",
  lastName: "Tsonev",
};

// Adding fields to an object
const profile = { age: 36, ...name };
console.log(profile);

// It works well also when we want to overwrite properties. Let's say that we want to update
// the 'age' field of the profile above. We may do the following:

const updates = { age: 37 };
const updatedProfile = { ...profile, ...updates };
console.log(updatedProfile);

// Another popular use case is when we want to pass multiple arguments to a function:

const values = [10, 33, 42, 2, 9];
console.log(Math.max(...values));
// instead of 
// console.log(Math.max(10, 33, 42, 2, 9))

// Last but not least, the operator does a good job of copying arrays. Not deep 
// copying but just to avoid the mutation of the original object. Remember how
// objects and arrays are passed by reference (that's not entirely true) to 
// functions. In such cases, we may want to work with the array but avoid changing it.
// Look at the following example:

const numbers = [10, 33, 42, 2, 9];
function findBiggest(arr) {
  return arr.sort((a, b) => (a > b ? -1 : 1)).shift();
}

const biggest = findBiggest(numbers);
console.log(biggest); //42
console.log(numbers); // [33, 10, 9, 2]

// The 'findBiggest' function sorts the items of the array and returns the biggest
// one. The problem is that it's doing it with 'shift' method, which mutates the object
// it leaves it with fewer items.

// To sove this issue we could use the spread operator.
function findBiggest1(arr) {
  return [...arr].sort((a, b) => (a > b ? -1 : 1)).shift();
}

const biggest1 = findBiggest1(values);
console.log(biggest1); // 42
console.log(values); // [10, 33, 42, 2, 9] no mutation to the original collection