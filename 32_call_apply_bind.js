// Now when we know what scope is, it's time to explore the 'call', 'apply', and 'bind'
// methods. They are all touching on the topic of context in JavaScript, because they 
// define the this of the passed functions. Consider the following example:

const user = { firstName: "Garen" };
function message(greeting) {
  console.log(`${greeting} ${this.firstName}!`);
}
message.call(user, 'Hey'); // Hey Garen!
message.apply(user, ['Hi']); // Hi Garen!
message.bind(user, 'Hola')(); // Hola Garen!

// 'call' accepts the desired 'this' as a first argument followed by other parameters
// of the function. 'apply' works the same way except that the additional parameters
// we pass as an array. 'bind' is a bit different since it doesn't execute the function
// immediately. It does a partial application. The result of 'bind' is another function
// that we can run with predefined parameters.