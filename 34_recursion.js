// Recursion is probably one of the oldest concepts in programming. It's the paradign where
// a function call itself. We usually use this technique to solve problems that require breaking
// them into smaller subproblems.

// In JavaScript, my favorite use case is reading a deeply nested object field.
// Let's say that we have the following:

const user = {
  profile: {
    age: 36,
    name: { first: "John", last: "Wick" },
  },
};

// We want to read the last name of the user. We have to write user.profile.name.last.
// And of course, if some of the data is missing we will get:

// Cannot read properties of undefined (reading 'last')

// To solve this problem, we use helpers like lodash's 'get' method.

// | get(user, 'profile.name.last', 'unknown');

// This utility safely tries to read the value and, if it doesn't exist returns the
// "unknown" string.

// Here is how the implementation of such utility may look like:
function get(obj, path, fallback) {
  const parts = path.split(".");
  const key = parts.shift();
  if (typeof obj[key] !== "undefined") {
    return parts.length > 0 ?
      get(obj[key], parts.join("."), fallback) :
      obj[key];
  }
  return fallback;
}

console.log(get(user, "profile.name.first")); // John
console.log(get(user, "profile.age")); // 36
console.log(get(user, "profile.registered")); // undefined
console.log(get(user, "profile.registered", false)); // false

// Notice how 'get' calls itself again and again till it reaches the last part
// of the path.