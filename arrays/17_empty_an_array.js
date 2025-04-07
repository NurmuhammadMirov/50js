// To empty out and delete all the contents from your array, the simplest (and also the fastes-ish!) way is
// to use the totally nonintuitive approach where you set the length property of your array to 0:

let myItems = ["apples", "oranges", "bananas", "kiwis"];
console.log(myItems.length); // 4

myItems.length = 0;
console.log(myItems.length); // 0

// I know this looks absolutely rificulous, but try it our for yourself. It totally works!