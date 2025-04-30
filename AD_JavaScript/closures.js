// Closure is one of the fundamental topics in JavaScript and can be tricky to understand for beginners.
// It is a powerful feature, and developing a good understanding of this topic is essential. In the module,
// we will take a deeper look at what closers are and how they work.

// --What is a closure?--
// the closure is a combination of the following two things:
// *A Function
// *A reference to the environment/scope in which that function is created

// In other words, whenever we define a function in JavaScript, that function saves a reference to the
// environment in which it was created. This is what's referred to as a closure: a fuction along with
// a reference to the environment in which it is created.

// Closures allow a nested function to access the declarations inside the containing function, even after
// the execution of the containing function has ended.

function outerFn() {
  const outerVar = 123;

  return function inner() {
    console.log(outerVar);
  };
}

const innerFn = outerFn();
innerFn();