// The relationship between arrays and objects has always been a bit scandalous. They both allow us to
// store arbitrary amounts of data. They both have a way of indexing the items. Deep down, an Array is
// itself an Object...just like everything esle in JavaScript. Now, if you ever have the sedire to go
// from an array to an object, the following snippet is what we need: 

let airportCodes = ["SFO", "LAX", "SEA", "NYC", "ORD", "ALT"];
let airportCodesObject = {...airportCodes};
console.log(airportCodesObject); // { 0: 'SFO', 1: 'LAX', 2: 'SEA', 3: 'NYC', 4: 'ORD', 5: 'ALT' }

// The original array items's index position will be the key, and the corresponding
// array item's content will be the value.