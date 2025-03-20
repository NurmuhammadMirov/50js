// There are tons of different opinions on what is a good code. For me, the best answer is
// "Good code is the one that I and my teammates understand". Readability comes to play a lot
// here. Some tips could make our code easier to follow.

// --1. When writing a function, return  early. In other words, we should make our
// code fails fast. Check out the following example:

if (status === 200 || status === 202) {
  // ok
} else {
  if (status === 500) {
    // internal server error
  } else if (status === 400) {
    // not Found
  } else {
    // generic error
  }
}

// Some people advise starting with the happy path, but I'm finding the version below better.
if (status === 500) {
  // internal server error
}
if (status === 400) {
  // not Found
}
if (status !== 200 && status !== 202) {
  // generic error
}
// ok

// --2. Avoid sending flags as arguments to a function. That is not because the function itself is not
// readable. That is because the place where you call it looks unclear.
function saveUser(profileData, isAdmin) {
  const user = {...profileData, admin: isAdmin};
  //....
}
saveUser({name: "Garen", age: 28}, false);

// See how the second argument, false makes you a bit nervous. That is because you don't know what it does.
// To solve this problem, we may wrap that flag into an object. Like so:
function saveUser(profileData, { isAdmin }) {
  const user = { ...profileData, admin: isAdmin };
  //....
}
saveUser({name: 'Garen', age: 28}, {isAdmin: false});

// --3. Last but not least, I want to mention the naming. We all know that this is one of the most 
// challenging tasks in programming. JavaScript is not an exception. We need to name our variables
// and functions properly, so they bring context to the reader.
let arr = ['BE:Node', "BE:PHP", "FE:HTML", "BE:Python", "FE:CSS"];
let arrFiltered = arr.filter(i => i.startsWith('FE:'));

function getText(items) {
  const str = `Front-end: ${items.map(i => i.replace(/^FE:/, '')).join(', ')}`
  return str;
}
getText(arrFiltered); // Front-end: HTML, CSS

// This code is not bad but what if we change the naming a bit:
let languages = ['BE:Node', "BE:PHP", "FE:HTML", "BE:Python", "FE:CSS"];
let FELanguages = languages.filter(lang => lang.startsWith('FE:'));

function formatLanguagesText(languages) {
  const str = `Front-end: ${
    languages.map(lang => lang.replace(/^FE:/, '')).join(', ')
  }`
  return str;
}
formatLanguagesText(FELanguages); // Front-end: HTML, CSS

// 'arr' and 'arrFiltered' constant are just too generic and will quickly lose meaning. 
// 'getText' function is indeed about generating a string, but again it doesn't bring
// enough context. So, languages, FELanguages and formatLanguagesText are a bit longer
// but give a better idea of what we mean with this code.