// My 'favorite' error while I'm coding something is "Cannot read properties of undefined". 
// Here's an example that produces such error:

const user = { name: "Garen" };
// console.log(user.skills[0]);

// To prevent such situation, we do checks or use helpers. Reading values from deeply nested
// properties has always been a source of bugs. Today the language has a feature that solves
// this problem. It is called "optional chaining". It provides safe access to nested fields.
// When something along the chain is 'undefined' or 'null', the whole expression results in 
// undefined. For example:

console.log(user?.skills?.[0]); // undefined
