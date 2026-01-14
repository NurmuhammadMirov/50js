// Using Destructuring to Shuffle an Array (JS Tip)

"use strict";

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let arrayShuffle = function(arr) {
    let newPos;
        // temp;
    
    for (let i = arr.length - 1; i > 0; i--) {
        newPos = Math.floor(Math.random() * (i + 1));

        // temp = arr[i];
        // arr[i] = arr[newPos];
        // arr[newPos] = temp;

        [arr[i], arr[newPos]] = [arr[newPos], arr[i]]
    }

    console.log(arr);
    // return arr;
};

let newArray = arrayShuffle(arr);
console.log(newArray);





// [num1, num2, ...smallArray] = [1, 2, 3, 4, 5, 6, 7, 8];


// num1
// num2
// smallArray