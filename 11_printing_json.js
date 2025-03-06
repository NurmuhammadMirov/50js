// Most debugging tool of every developer - printing to the console. In JavaScript, we work with
// data structures all the time. Very often we need to look inside objects. One of my favorite ways
// to print an object is to use JSON.stringify API.

const user = {
  name: "Molecule Man",
  age: 29,
  secretIdentity: "Dan Jukes",
  powers: ["Radiation resistance", "Radiation blast"],
};

console.log(JSON.stringify(user, null, 2));

// Notice the 'null' and 2 arguments. Without them, everything will appear in one
// line. The socnd argument (null) is for a replacer function. That comes in handy
// when we want to have custom traversing. A couple of times I had to write my own
// replacer. That was when I wanted to treat some of the properties in a specific way.
// The other, more popular, use case is to solve the problem of having a circular data
// structure. The DOM element is a good example of such a structure because every DOM
// element points to its parent which points to its children and so on.

// Another quick trick that is possible with JSON.stringify and JSON.parse is cloning
// an object. For example:

const user1 = {
  name: "Molecule Man",
  age: 29,
  secretIdentity: "Dan Jukes",
  powers: ["Radiation resistance", "Radiation blast"],
}

const user2 = JSON.parse(JSON.stringify(user1));
console.log(user1 === user2); // false

// We have to clarify that this doesn't work every time. If the object is a complex one 
// with the mentioned above circular dependencies the process will fail.

