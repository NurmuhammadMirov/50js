// Another popular functional programming paradigm is currying. It is kind of similar
// to the partial application in the sense that ir allows us to split the function call.
// However, this time we apply one argument at a time. While with a partial application,
// we may do multiple arguments for each call. Look at the 'update' function below. It
// has three arguments:

const user = { age: 33, job: "developer" };

function update(user, prop, value) {
  user[prop] = value;
}
update(user, "age", 36);

// Ideally, we don't want to pass the 'user' object over and over again. A good step forward
// is to create a function that has it already applied and only accepts prop and value. We can
// do that by using 

function partial(func, ...args1) {
  return (...args2) => {
    return func(...args1, ...args2);
  }
}

// Now, lets transform this example to 'currying'
const curriedUpdate = curry(update);
const updateUser = curriedUpdate(user);
const updateAge = updateUser('age');
updateAge(36);

function curry(f) {
  return function curried(...params) {
    if (params.length >= f.length) {
      return f.apply(this, params);
    } else {
      return function(...param2) {
        return curried.apply(this, params.concat(param2));
      }
    }
  }
}

// Instead of 'partial' we now have 'curry'. This is a helper that returns a curried version
// of our functions. The idea is that our original function with N arguments is transformed
// into N functions with one argument.