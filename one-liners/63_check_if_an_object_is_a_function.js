// check if a given object is a function.

const isFunction = (obj) => typeof obj === 'function';
const isFunction1 = (obj) => obj.constructor === Function;

console.log(isFunction(() => {})); // true
console.log(isFunction({})); // false

console.log(isFunction1(() => {})); // true
console.log(isFunction1({})); // false