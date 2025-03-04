// The iterable protocol is so underrated. I don't see people using it, which
// makes me sad because it's a wonderful instrument. It defines how we loop
// over a specific object. Or in other words, it allows us to create custom
// iterating behavior. We have to create a property called @@iterator
// (Symbol.iterator is a shortcut for this key). That property must equal a zero-
// argument function that returns an object matching the iterable protocol. Here
// is an example:

const user = {
  data: ["JavaScript", "HTML", "CSS"],
  [Symbol.iterator]: function() {
    let i = 0;
    return {
      next: () => ({
        value: this.data[i++],
        done: i > this.data.length,
      }),
    };
  },
};
for (const skill of user) { console.log(skill); }

// The protocol requires that we return an object with a 'next' method. That
// function should result in another object that has 'value' and 'done' fields.
// The 'value' could be anything, and 'done' is a boolean that indicates whether
// the iteration finishes.

// Notice, in the example above, how 'user' is not an array, but we can use it as
// such. That is because we defined a custom iterator. The script outputs "JavaScript",
// "HTML" and "CSS" (in that order).

// This feature comes in handy if we have complex data structures and we want
// to access deeply nested properties. I like to use the iterable protocol to
// facilitate the destructing of my objects.

const person = {
  name: {first: 'John', last: 'Wick'},
  position: 'engineer',
  [Symbol.iterator]: function() {
    let i = 0;
    return {
      next: () => {
        i++;
        if (i === 1) {
          return { value: `${this.name.first} ${this.name.last}`, done: false };
        } else if (i === 2) {
          return { value: this.position, done: false };
        }
        return { done: true }
      }
    }
  }
}
const [name, position] = person;
console.log(`${name}: ${position}`); // John Wick: engineer

// By definition, we can destruct every iterable object. And if our objects are not
// iterable, we can make them so by using the techique above - defining an iterable protocal.

let range = {
  from: 1,
  to: 5
};

// 1. call to for...of initially calls this
range[Symbol.iterator] = function() {
  // ...it returns the iterator object:
  // 2. Onward, for..of works only with the iterator object below, asking it for next values
  return {
    current: this.from,
    last: this.to,

    // 3. next() is called on each iteration by the for..of loop
    next() {
      // 4. it should return the value as an object {done:.., value:...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  }
}

for (let num of range) {
  console.log(num); // 1, 2, 3, 4, 5
}

// Note the core feature of iterables: separation of concerns.
//  * The 'range' itself does not have the 'next()' method.
//  * Instead, another object, a so-called "iterator" is created by the
//    call to range[Symbol.iterator](), and its 'next()' generates values for the iteration.

// So, the iterator object is separate from the object it iterates over.
// Technically, we may merge them and use 'range' itself as the iterator to make the code simpler.

// Like this
let numRange = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
}

for (let num of numRange) {
  console.log(num); // 1, 2, 3, 4, 5
}

// String is iterable
// Arrays and strings are most widely used built-in iterables.
// For a string. "for..of" loops over its characters:

for(let char of 'test') {
  // tiggers 4 times: once for each character
  console.log(char); // t, e, s, t
}

// Calling an iterator explicitly
// For deeper understanding, let's see how to use an iterator explicitly.
// We'll iterate over a string in exactly the same way as 'for..of', but with direct calls.
// This code creates a string iterator and gets values from it "manually":

let str = "Hello";

// does the same as
// for (let char of str) console.log(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value);
}

// This is rarely needed, but gives us more control over the process than 'for..of'.
// For instance, we can split the iteration process: iterate a bit, then stop,
// do something else, and then resume later.
