// We learned about the destructuring assignment. An interesting use case of this feature
// is that it allows us to remove a field from an object.

function allButPoints(obj) {
  const { points, ...res } = obj;
  return res;
}

const user = {
  firstName: "David",
  lastName: "Bird",
  points: 231,
};

console.log(allButPoints(user));

// We use that a lot in the world of React where a component receives a bunch of props
// but I need to pass down just a few of them.