// the way to read the contents of our array is by accessing them by their 'index position'.

let greetings = ['hi', 'sup', 'hello', 'yo', 'hey'];
greetings.shift();
let first = greetings[0];

console.log(first); // 'sup'
console.log(greetings);

let arrayLength = greetings.length;
console.log(arrayLength); // 4


for (let index = 0; index < greetings.length; index++) {
    let greeting = greetings[index];

    console.log(greeting);
}

// when this code runs, our loop starts with the 'index' variable set to 0, and it keeps running 
// until it hits the last iten in our array. Along the way, we are accessing the current array item
// (greeting[index]) and printing it to our console. Because the length of our array starts at 1
// and our index position starts at 0, our array's termination condition of index < greetings.length
//  properly ends our loop just after it reaches our last item. Looping through an array is one of those
// things that we'll be doing many MANY times, so we'll have plenty of chances to see similar looking code
// in the future.