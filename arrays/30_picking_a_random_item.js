// Let's say we have an array called 'myShows' that contains a list of some popular TV shows that you 
// may like to watch:

// Whenever I find myself in a situation where I am all alone and having to make a difficult choice, I do
// what I do best. I put all of my choices into an array and write some JavaScript to randomly pick a choice
// a choice that I unquwstioningly follow. In this chapter, we will learn how to write this JavaScript ourselevs.
// We will learn how to write some code to randomly pick an item from array filled with items!
let myArray = ["text", "number"];

let randomeValue = myArray[Math.floor(Math.random() * myArray.length)];

// Replace 'myArray' with the name of the variable that actually stores you array. That's it. To see this as part of
// an example, we first need an array:

let myShows = ["Bones", "Psych", "Big Bang Theory", "Mad Men", "Breaking Bad", "Modern Family", "Game of Thrones", "Dexter"];

// Our array is called 'myShows', so using the code we saw earlier, the way we pick a random value from this array is by
// doing this:

let show = myShows[Math.floor(Math.random() * myShows.length)];
console.log(show);

// if you run this code, our show variable will store the name of a randomly picked show from your 'myShows' array.

// ##--How This All Works--##
// The techinque behind making our one line of code work requires only a slight understanding of arrays and how to
// work with random numbers. We will start with the random numbers angle first. The basic formula for picking a
// random number between a range of numbers is:
let high = 10; 
let low = 0;

Math.floor(Math.random() * (1 + high - low)) + low;

// All we need is a high number and low number to define the range of numbers we want. This code will randomly
// (and fairly!) pick a random number between our range. The details of this are outlined in the 'Random Numbers'
// article, so check that out later if you want to go deeper into the world of random numbers.

// What is the high number and the low number in our case? Since we are dealing with arrays, we know that the position
// of an item in an array is based on an index number. This index number starts at 0 and increments by one until we hit
// the last item in our array.

// The low number for us will be 0. This corresponds to the first item in our array. The formula right now will look
// as follows:

Math.floor(Math.random() * (1 + high));

// The high number is the last item in our array. The index position of the last item in your array can be found by
// taking the length of our array and subtracting that value by 1: 

let lastItem = myArray.length - 1;

// if we substitute 'myArray.length - 1' into the high variable in our formula, here is what we would get:
Math.floor(Math.random() * (1 + myArray.length - 1));

// The 1's will cancel out leaving our random index position to be:

Math.floor(Math.random() * myArray.length);

// Getting the index position takes us most of the way there. We will use this index position to retrieve the value
// associated with it in our array:

let value = myArray[Math.floor(Math.random() * myArray.length)];

// Replace 'myArray' with 'myShows' to get the exact syntax we saw a few hundred pixels earlier.
