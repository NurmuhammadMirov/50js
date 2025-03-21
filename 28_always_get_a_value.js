// JavaScript by default has no type definitions. It has been like that since day one. Today we can
// solve that by using TypeScript. However, as we mentioned, those are solutions that work at build time.
// When our code runs in the browser, we still have to deal with the good old vanilla JavaScript. 

// Let's say that we face up a situation where we really must have value. For the functions this means setting
// up a default value like so:

function calculate(value = 0) {
  return value * 2;
}

// For everything else we may use the logical OR operator:

const user = { age: 37 };
const name = user.firstName || 'unknown';
console.log(name);

// This two options work if we have a default value. But what if we don't have one, and we have to force
// the developer to pass an argument. We can do it via this neat trick.
const required = () => {
  throw new Error('Please provide a number.');
};

const sum = (value = required()) => {
  return value + 42;
};
console.log(sum(8));  // 50
console.log(sum(28)); // 70
sum(); // throw error