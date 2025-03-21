// Even though I am writing JavaScript for many years, I am still learning. And I'm
// getting surprised by simple things. It could be a pattern or just a style of writing.

function calculateAge(birthDate) {
  return formatDate(today() - birthDate);

  function today() {
    return new Date();
  }

  function formatDate(diff) {
    return Math.ceil(diff / (1000 * 3600 * 24) / 365);
  }
}

const age = calculateAge(new Date(1984, 1, 1));
console.log(`You are approx ${age} years old.`);

// See how in calculateAge we have the return statement quite early. After that though, we have two
// functions definitions. This example shows us that the code after the return statement is not dead.
// Some things are getting hoisted at the top of the function and we can use them.

// Hoisting is the engine mechanism where it allocates memory before the code execution. Or in other
// words, the interpreter "moves" things at the top of the current scope. In our case the today and 
// formatDate functions.