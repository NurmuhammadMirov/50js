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

// --How do closures work?--
// To understand how closures work, we need to understand how JavaScript resolves the scope of any identifier.
// Consider the following code example:

let isReading = true;

function learningJavaScript() {
  console.log(isReading);
}

learningJavaScript();

// When the learningJavaScript function is invoked to log the value of the isReading variable, the
// JavaScript first needs to identify where it is defined. The first place where JavaScript will search
// is the local scope of the learnJavaScript function because this is where a reference to the isReading 
// variable was found.

// As the isReading variable is not defined in the local scope of the learnJavaScript function, JavaScript
// will search for this variable in the outer scope, which in this case is the global scope. JavaScript will
// find the declaration of the isReading variable in the global scope, so it will get its value and pass
// it to the console.log function so that it can be logged to the console.

// Let us take a look at another code example that involves a nested function:

function learnJS() {
  function stepsToLEarnJS() {
    console.log(isReading);
  }

  stepsToLEarnJS();
}

learnJS();

// JavaScript traverses to the outer scope to seach for the variable.