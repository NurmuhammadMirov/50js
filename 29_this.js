// this keyword. These days I feel that the community pushes the language to more functional
// paradigms. We are not using the 'this' keyword so much. And I bet is still confuses people
// because its meaning is different based on the context. So, let's start with a few examples
// where this refers to the global scope:

function A() {
  console.log(this); // this = global object (window)
}
const B = () => console.log(this); // this = global object (window)
const C = {
  method: () => console.log(this), // this = global object (window)
};

// In all these cases, we call the function without having a concrete context.
// That is why the global scope is picked. (Here we have to mention that in strict mode, 
// this will be equal to undefined)

// When the function is part of a class or an object, we have context. Then this points
// to the specific object or instance of the class.

class D {
  run() {
    console.log(this); // this = instance of the class
  }
}

const E = {
  method() {
    console.log(this); // this = the constant E itself
  },
};

function F() {
  console.log(this); // this = an instance of the F prototype
}

new F();

// JavaScript also offers the ability to set the scope manually. The first argument
// of 'apply' and call becomes 'this' of the function.

const foo = {id: 'foo'};
function G() {
  console.log(this); // this = foo
}

G.apply(foo);
G.call(foo);

// And at the end, if we don't want to call the function but define its 'this', we can
// use the 'bind' method.

function H() {
  console.log(this.name);
}
const HFunc = H.bind({ name: 'foobar' });
HFunc();