// Arrays in JavaScript come with a handy built-in 'sort' method that allows you to specify how to
// sort. Take a look at the following example where we are sorting some numbers as well as text:

let numbers = [3, 10, 2, 14, 7, 2, 9, 5];
let beatles = ["Ringo", "George", "Paul", "John"];

numbers.sort(compareValues);
beatles.sort(compareValues);

function compareValues(a, b) {
  if (a < b) {
    // if a less than b
    return -1;
  } else if (a > b) {
    // if a greater than b
    return 1;
  } else {
    // a and b are equal
    return 0;
  }
}

console.log(numbers); // [ 2, 2, 3, 5, 7, 9, 10, 14 ]
console.log(beatles); // [ 'George', 'John', 'Paul', 'Ringo' ]

// We are using one comparison function called 'compareValues'. This function (a callback function to 
// be precise) compares two values that are passed in as an argument, and all we have to do is specify
// which of the two values should appear first. We do that by returning either -1, 1 or 0. Returning -1
// means the first value will appear ahead of the second value. Returning 1 means the first value will appear
// after the second value. Returning 0 means both values are equal.

// Our 'compareValus' function is pretty straightforward. For more involved types of data, you'll need to 
// customize your comparison function appropriately, but even that isn't rocket science. Below is an example
// of sorting an array of Objects:

let shows = [
  {name: "Frasier", seasons: 11},
  {name: "Seinfeld", seasons: 9},
  {name: "Friends", seasons: 10},
  {name: "Cheers", seasons: 11},
  {name: "Animaniacs", seasons: 5},
  {name: "Everybody Loves Raymond", seasons: 9}
];

function showComparison(a, b) {
  if (a.seasons < b.seasons) {
    // if a less than b
    return -1;
  } else if (a.seasons > b.seasons) {
    // if a greater than b
    return 1;
  } else {
    // a and b are equal
    return 0;
  }
}

let sortedShows = shows.sort(showComparison);
console.log(sortedShows);

// In this example, we are sorting television shows by the number of seasons. Each television show is represented
// as an object in our array. Notice how we have our 'showComparison' function defined. Instead of comparing the
// two values directly, we are dotting into the 'seasons' value to help determine which show should appear first.
