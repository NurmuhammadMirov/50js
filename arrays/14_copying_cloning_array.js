// Copying/Cloning an Array
// If you want to copy or clone an array to a new variable, you will need to use the 'slice' method
// without specifying any arguments:

let foo = ["fee", "fi", "fo", "fum"];
let fooCopy = foo.slice();

console.log(fooCopy);

// In this example, 'fooCopy' contains a full copy of all the items in the 'foo' array.