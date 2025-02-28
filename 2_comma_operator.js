// I think the comma operator in JavaScript is underestimated. The popular perception is that the comma is used 
// to separate function arguments or items in an array. However, there is another use case.

const page = {
  visitis: 42
};

const newPageView = () => {
  return page.visitis += 1, page.visitis;
}

console.log(newPageView());

// 'newPageView' is a function that wants to increase the 'visits' field but also wants to return it.
// The comma operator evaluates each of its operands from left to right and returns the last one as a result.
// That is why the resylt of the function is the new value of the property. 

// Someone will ask when such type of writing is useful. The truth is that the comma operator makes sense 
// the most in places where we write the code in one line. Like for example the ternary operator.

const a = () => 'a';
const b = () => 'b';
const isValid = true;
const result = isValid ? (a(), b()) : 'Nope';
console.log(result)