"use strict";

const str = 'This is a simple string.';

for (let char of str) {
    console.log(char);
}

let charArray = [...str];

let iterator = str[Symbol.iterator]();

console.log(iterator.next())