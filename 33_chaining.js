// Back in the days when the Web was all made of jQuery, we were constantly using a 
// pattern - function(or method) chaining. It looks like that:

/*
  $("#p1")
    .css("color", "red")
    .slideUp(2000)
    .slideDown(2000);
*/ 

// The first line ($("#p1")) selects a DOM element. The rest is changing the color
// and animating it.

// We should consider method chaining when we have a lot of small functions, and
// they have to be executed on a single object.

// Let's see how the implementation of this pattern looks like. We will define a
// shopping cart factory function:

function ShoppingCart() {
  const products = [];
  function add(product, price) {
    products.push({ product, price });
  }
  function total() {
    return products.reduce((res, product) => (res += product.price), 0);
  }
  return { add, total }
}

// We may create a shopping cart, add products and get the total price at the end.

const cart = ShoppingCart();
cart.add("t-shirt", 50);
cart.add("backpack", 120);
cart.add("socks", 7);
console.log(cart.total()); // 177

// Now let's make the add method chainable. To do that we have to return an 
// object that itself has this add method. This is so we can call it again and again.

function ShoppingCartChain() {
  const products = [];
  const api = {add, total};
  function add(product, price) {
    products.push({ product, price });
    return api;
  }
  function total() {
    return products.reduce((res, product) => (res += product.price), 0);
  }
  return api;
}

// This will allow us to rewrite our example as:
const cartt = ShoppingCartChain();
const total = cartt
  .add("t-shirt", 50)
  .add("backpack", 120)
  .add("socks", 7)
  .total();
console.log(total); // 177
// Notice that total is not the same as add because it doesn't return
// the same api object.