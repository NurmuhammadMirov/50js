// The topic of asynchtony in JavaScript is huge. That is because the language
// offers many mechanisms for handling asynchronous operations. Over the years,
// those mechanisms change. Historically, the native APIs introduced the first
// one. They accept a function that is fired sometime in the future. We name
// this fucntion a callback.

const fs = require('fs');

 fs.readFile('./content.md', function callback(error, result) {
  if (error) {
    // in case of error
  } else {
    // use the data
  }
 });

// The 'callback' function is triggered when the operation has some development.
// Euther the file is successfully ready or there is an error. It was a well-estblished
// practice to accept the potential error as a first argument. This encourages
// error handling. Using a lot of callbacks though leads to deeply nested functions,
// producing the so-called "callback hell".

function functionA(param, callback){}
function functionB(param, callback){}
function functionC(param, callback){}
functionA("1", function (err, result) {
  functionB("2", function (err, result) {
    functionC("3", function (err, result) {
      // And so on...
    });
  });
});

// The API that was supposed to fix the callback hell was promises. The
// promise is an object that represents the future of our operation. It
// may succeed or fail. The object has three states -
// resolved, rejected, and pending.

// Here's the same example converted to use promises.

import { readFile } from "fs/promises";
readFile('./content.md')
  .then(data => {})
  .catch(err => {});

// The promises don't have the problem of the callbacks, but they are
// not perfect. Once we start nesting or chaining promises we may
// end up with pretty messy code.

// Nowadays, almost everyone is using another API - the 'async/await'.
// This API allows us to define a function as asynchronous with the
// 'async' keyword in front. Then inside, we can place the await keyword
// before each of our promise. This will make the function pause till the
// promise is resolved. Again, here's the same example bur re-written
// with async/await.

async function getContent() {
  try {
    const data = await readFile('./content.md');
    // use the data
  } catch(err) {
    // in case of error
  }
}

getContent();

// We should again mention that the 'await' keyword may be placed before a
// promise. 'readFile' in our case is a function that returns a promise.
// Another important fact is that every 'async' function returns a promise.
// For example, the getResult below doesn't return 10, bur a promise that
// resolved with a value of 10.

async function getResult() {
  return 10;
}
console.log(getResult());
// Promise<fullfilled: 10>