// Similar to the iterable protocol, the usage of generators in JavaScript is not very popular.
// The community is not betting a lot on this API. I think that it has potential. Especially for
// handling asynchronous processes.

// The generator functions are a special type of function which if called returns
// an iterable generator. This means that the code inside the function is not executed
// immediately. We have to call the 'next' method of the generator. Then the execution
// continues until a 'yield' statement appears. The following code snippet illustrates
// the workflow:

function* calculate() {
  yield 10;
  const result = yield 5;
  console.log(`Result = ${result}`);
}

const g = calculate();
const res1 = g.next();
console.log(res1); // { value: 10, done: false }

const res2 = g.next();
console.log(res2); // { value: 5, done: false }

g.next(res1.value + res2.value);;

// Let's read this example line by line and explain what happens:
// * const generator = calculate() - at this point the fucntion's
//   body is not executed. We just created the generator. In fact
//   'calculate' may create as many generators as we want. They will
//   be different iterables.
// * const res1 = generator.next() - now the function runs and its execution
//   stops at the first 'yield' statement. Whatever we 'yield appears in the
//   'value' field of the returned object.
// * const res2 = generator.next() - same as the above line except that we have 5
//   as a value. And we have to say that the function is paused right before 'result'
//   receives its value. At this point, results constant is still not defined. Only the
//   following 'next()' call outside will complete the assignment.
// * generator.next(res1.value + res2.value) - this line resumes the generator by
//   sending the sum of the previously exported integers.

// The ability of the generator to send and receive data is what makes it unique
// and opens the door for some interesting implementations. The most common one is
// the implementation of the command pattern. Think about how we have to do something
// which consists of a couple of steps. For example, we want to get an image URL from
// a remote server and create am &lt;img> tag. Here is how this looks like with a generator.

commander(robot());

function* robot() {
  const catURL = yield ["get-cat"];
  const imgTag = yield ["format", catURL];
  console.log(imgTag);
}

async function commander(gen, passBack) {
  let state = gen.next(passBack);
  switch (state.value ? state.value[0] : null) {
    case "get-cat":
      const res = await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await res.json();
      return commander(gen, data[0].url);
    case "format":
      return commander(gen, `<img src="${state.value[1]}" />`);
  }
  if (!state.done) {
    commander(gen);
  }
}
// after a second or two we'll get:
// <img src="https://cdn2.thecatapi.com/images/<random is here>.jpg" />

// Our generator fuction 'robot' sends commands out and asynchronously receives
// results. 'get-cat' is a command that performs an HTTPS request to thecatapi.com
// and returns a random image URL. 'format' is another command and it returns the
// img tag. Notice how generators, similarly to the async/await syntax, make our 
// functions look synchronous.