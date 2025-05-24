// we can use the new structuredClone global function to deep clone javascript object as it
// overcomes many limitations of the old hack JSON.parse(JSON.stringify(obj))

const employeeObj = { firstName: 'Mirov' };
const original = {
  map: new Map([['firstName', 'Mirov']]),
  set: new Set([1,2,1,3]),
  date: new Date(),
  array: [employeeObj],
  employeeObj
};

original.circularRef = original;

const cloned = structuredClone(original);

// -- Works with Map, Set, Date, RegExp, ArrayBuffer
// -- Works with object having circular reference
// -- Works in all modern browsers and JS runtimes
// -- Throws error on cloning DOM nodes or functions
// -- Does not clone object prototype chain
// -- metadata-like features of the object such as prop 
//    descriptors, setters, getters etc. don't get cloned