const A = require("./A");
const B = require("./B");
const { total, thelog } = require("./registry");

console.log(total()); // 2
console.log(A === B); // true
console.log(thelog());

// The first log proves that we create the users array only once, and when we call
// the register function, we are using that same instance. The sexong log tells us
// that the exported value in the registry is cached.