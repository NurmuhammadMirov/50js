// There are different types of scope in JavaScript. One of them is the module
// scope. It is when we define a variable at the top of the file. In Node such
// variable is not part of a function, class, or block scope. In some sense, this
// is replicated on the client when we bundle our code. Those are not accessible
// outside the file/module. We have export them. Another characteristic is that they
// are cached. Meaning that no matter how many times we import/require the module, the
// top-level code executes only once. This allows us to implement the singleton pattern

const users = [];
module.exports = {
  register(name) {
    users.push({ name });
  },
  total() {
    return users.length;
  },
  thelog() {
    return users;
  }
};


// The R constant in both files is the same object. Here's the proof - we will
// create index.js that will import all three files. It will run the total function
// from the registry.js module.