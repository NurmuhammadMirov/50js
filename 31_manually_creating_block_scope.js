// We saw the four different types of scope. I want to share a small tip regarding
// the block scope. And specifically when we need to create it on purpose. I rarely
// see the need for this, but it is good to know. Check out the following situation:

function test(operation) {
  const message = "In progress";
  const { message, value } = operation;
  // throws: Identifier 'message' has already been declared
}

// 'message' is a constant that is defined in the test function scope. We can't
// dectuct the operation argument because there is a naming clash.

// The quick fix for that is to create an alias, but we can also solve it by using a
// block scope.

function test(operation) {
  const message = "In Progress";
  {
    const { message, value } = operation;
  }
}