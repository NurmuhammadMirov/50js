// There are some APIs that I use very often. 'Object.assign' is one of them.
// The use case for me is almost always constructing a new object by merging
// various properties. Here are the basic:

const skills = { JavaScript: true, GraphQL: false };
const user = { name: "Garen" };

const profile = Object.assign({}, user, skills);
console.log(profile); // {  name: "Garen", JavaScript: true, GraphQL: false }

// There are a couple of aspects that make this method useful. We can for
// example set a default value of a field and then overwrite it:

const defaults = { JavaScript: false, GraphQL: false, name: 'unknown' };
const skills2 = { JavaScript: true };

const profile1 = Object.assign(defaults, skills2);
console.log(profile1); // { JavaScript: true, GraphQL: false, name: 'unknown' }

// The falsy arguments are ignored so we can add a field only if it exists with a neat one-liner:
function createUser(accessToken) {
  const user = Object.assign(
    { name: "Lux" },
    accessToken && { accessToken }
  ); 
  return user;
}

console.log(createUser('xxx')); // { name: 'Lux', accessToken: 'xxx' }
console.log(createUser()); // { name: 'Lux' }

// Overall I use this API as a safety net. Especially in the cases where data is missing or is incomplete.