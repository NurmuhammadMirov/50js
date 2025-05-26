// determining if avalue is a string with the typeof Operator
function isString(value) {
  return typeof value === "string";
}

console.log(isString(123)); // false
console.log(isString('abc')); // true

// the typeof operator returns a string indicating a value's type