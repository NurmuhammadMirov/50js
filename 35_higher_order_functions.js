// The main building block of every application is the fuction. You've probably heard that
// the functions in JavaScript are first-class citizens. This means that we can assign a
// function to a variable and pass that variable to a method or return it as result.
// For example:
function getProducts(fetchData) {
  return async (categoryId) => {
    const data = await fetchData({ id: categoryId });
    return data.products;
  }
}
function fetchData(query) {
  return fetch(`https://salesforce.com/ap/products?id=${query.id}`)
}

const byCategoryId = getProducts(fetchData);
const shoes = await byCategoryId('XYZ');

// Notice that 'fetchData' is a function and we are passing as an argument to 'getProducts'.
// Internally 'getProducts' returns another function. In such cases, we say that 'getProducts'
// is a higher-order function.

// We are writing higher-order function all the time. And that is because they are the natural
// abstraction on top of the smaller one-job methods. We rarely want to write all the logic in
// one place se we break it into smaller reusable functions. Then we need a glue code that operates
// with them. Very often that glue code consists of higher-order functions.