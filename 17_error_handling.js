// There is one thing that developers forget very often - error handling. For me,
// there are two rules of proper error handling. The firt one is that the error
// should be processed in the right place. It doesn't make sense to add a try-
// catch block and then just log message. The second rule is that the error should
// hold enough information so we can build context and react to it properly.

// To illustrate the first rule we will make the assumption that we have a button
// which if clicked triggers a fetch request.

// somewhere in our services layer
async function getAllProducts() {
  try {
    const res = await fetch('/api/products');
    return res.json();
  } catch(error) {
    console.log('Ops! Something happne.')
  }
}

// in a React Component
/* 
<button onClick={async () => {
  const data = await getAllProducts();
  // render the 'data'
}}>
  All products
</button>
*/

// This works, but it is not very usefull. If the request fails and we catch the 
// error, we can't do much with it in our service. On another side, if the try-
// catch block is inside the React component we will be able to render a message
// to the user.

// somewhere in our services layer
async function getAllProducts() {
  const res = await fetch('/api/products');
  return res.json();
}
// in a React Component
/*
<button onClick={async () => {
  try {
    const data = await getAllProducts();
    // render the data
  } catch(error) {
    // render error message
  }
}}>
All products
</button>
*/

// To fulfill the secong rule, I like to create a custom type of errors. While
// handling the error, instead of relying on the message, it is much better to use
// its type. For example:
class NoEmailError extends Error {
  constructor() {
    super("Missing email");
    this.name = "NoEmailError";
  }
}

function validatePayload(data) {
 if(!data.email) throw new NoEmailError();   
}

(function handler() {
  try {
    validatePayload({ name: "Jules" });
  } catch(err) {
    console.log(`Error: ${err.message}`);
  }
})();

// The error handling guatantees that our application works even if something
// goes wrong. We should not underestimate this part of our development process.
// Again, we should deal with the error in the right place and we should throw
// errors that hold context.