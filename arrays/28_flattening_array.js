// Having nested arrays where our arrays are made up of items that themselves are arrays is a common thing:
let cool = [1,2, [1,2,[1,2]]];

// The term multidimensional array might come to mind. In some cases, having nested arrays isn't desirable 
// and more of a side effect of how our data got there. Web requests with complex JSON data is a great example 
// of this. In these cases, we may want to flatten our arrays into something manageable. We can do this with
// the flat method and passing in a number for the levels of depth to flatten by:

let flatCool = cool.flat(1);
console.log(flatCool); // [1, 2, 1, 2, [1, 2]]

// In this example, our 'cool' array has two levels of nested arrays. By specifying depth value of 1, we tell our
// 'flat' method to flatten our arrays by one layer, leaving only one layer of nested arrays behind. There will be
// times when you want to flatten your arrays fully, so you can specify a higher numerical value for the depth. if 
// you have idea how deep your arrays are nested, you can throw down the ultimate value for the depth to flatten any
// array of any depth:

let nums = [1, 2, [[[[[1]]]], 2, [1, 2]]];
let flatNums = nums.flat(Infinity);
console.log(flatNums); // [ 1, 2, 1, 2, 1, 2 ]

// That's right! You can specify a depth value of 'Infinity' to the 'flat' methof, and that will endure your array is
// flattened in all situations.