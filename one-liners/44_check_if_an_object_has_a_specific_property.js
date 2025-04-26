// Check if an object contains a specific property

const hasProperty = (obj, prop) => prop in obj;

const person = {name: "John", age: 30};
console.log(hasProperty(person, "name")); // true

console.log(hasProperty(person, "gender")); // false