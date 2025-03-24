// At the job interviews for JavaScript developers, two questions are almost always asked
// the first one is about the 'this' keyword and the other one is about scope. I like to
// think that the scope is an evironment that holds a specific set of variables, constants
// functions, etc. And as part of that environment, all the actors inside are visible to 
// each other. Understanding scope is important mainly because of that visibility. We have
// to know well what we can access and whatnot.

// There are four different scopes: global, function, block, and module. Let's illustrate each
// one of them with a quick example:

let total = 0;
function calculate(a, b, c) {
  const sum = a + b + c;
  if (a > b) {
    const diff = a - b;
    return diff + c;
  }
  return sum;
}

// 'total' live in the global scope. Being part of that environment, it is accessible
// (visible) for all the nested environments (scopes). For example, we can use it from
// within the if statement. sum lives in the calculate function scope. It is not accessible
// outside that function. diff is defined in a block scope, and it is not accessible outside
// the if statement. The module scope is the one that is usually defined by a file.

// A.js
let inc = 0;
export default function calc(a, b, c) {
  inc += 1;
  return a + b + c;
}