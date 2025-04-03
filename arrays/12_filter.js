// With arrays, we'll often find ourself filtering(aka removing) items based 
// on a given criteria.

// For example, let's say we have an array of numbers:

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Right now, our numbers array has both eveb numbers as well as odd numbers. Let's say
// we want to ignore all of the odd numbers and only look at the even ones. The way we 
// can do that is by using our array's 'filter' method and filtering our all of the odd 
// numbers so only the even numbers remain.

// The way we use the 'filter' method is similar to what er did wiht 'map'. It takes one
// argument, a callback function, and this function will determine whether each array item
// will be filtered our or not. This will make more sense when we look at some code. Take a
// loolk at the following

let evenNumbers = numbers.filter(function(item) {
  return (item % 2 == 0);
});

console.log(evenNumbers);

// We created a new array called 'evenNumbers' that will store the result of 'filter' running 
// on our numbers array. The contents of this array will be the even numbers only thanks to our
// callback function checking if the remainder when you divide by 2 is 0. if the callback function
// returns a true, the item is carried over to the filtered array. If the callback function returns
// false, the item is ignored.

// One thing to note here is that our callback function isn't an explicitly named function like our
// capitalizeItUp function we saw earlier. It is simply an anonymous one, but it still gets the job
// done. You'll see theis anonymous from commonly where a callback function needs to be specified, so
// become familiar with this style f defining a function.