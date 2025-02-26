// Whenever we force the creation of one and only instance of a class
// we use the singleton pattern. Think about a class that we initialize once.

// In JavaScript the implementation of this pattern is very often done via static
// function of the class.

let cache;
class A {
  static getInstance() {
    if (cache) return cache;
    return cache = new A();
  }
}

const x = A.getInstance();
const y = A.getInstance();

console.log(x === y);

// The 'cache' variable keeps the created instance of the class. If we attempt to
// create a new one, we will get the same result. That is why x and y point to the
// same object

// another popular way to create a singleton is to use a factory function:

let cacheB;
class B {}

function getInstanceB() {
  if (cacheB) return cacheB;
  return cacheB = new B();
}

const c = getInstanceB();
const d = getInstanceB();

console.log(c === d);

// the writer prefers this approach because it eliminates the option of someone using 'new' keyword