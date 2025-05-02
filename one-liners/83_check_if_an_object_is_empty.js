// check if a given object has no own properties (i.e., it is empty).
const isEmptyObject = (obj) => Object.keys(obj).length === 0;
console.log(isEmptyObject({})); // true
console.log(isEmptyObject({name: "John", age: 30})); // false