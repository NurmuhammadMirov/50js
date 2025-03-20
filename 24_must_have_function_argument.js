// As we know, JavaScript is not a strictly typed language. We don't have types by default.
// That is why a big part of the community started using alternatives(like TypeScript)
// Which is a good solution, but most of them work at build time. Once our code is transpiled
// and bundled the type check are gone. Some time ago I found a neat way to make a function
// argument required. Even at runtime.

function required() {
  throw new Error(`Missing argument`);
}
function shoppingCenter(time, money = required()) {
  return {
    time,
    money,
  };
}
console.log(shoppingCenter("1h", 200));
// { time: '1h', money: 200 }
console.log(shoppingCenter("2h30min"));
// Error: Missing argument.

// This may be a bit drastic because throwing an error may lead to an application
// crash. However, with proper error handling is I believe a good solution.