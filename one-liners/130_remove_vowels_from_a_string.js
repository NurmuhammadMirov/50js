// the removeVowels function eliminates all vowels (both uppercase and lowercase) from
// a given string using the replace method alonf with a regular expression.

// replace solution
const removeVowels = (str) => str.replace(/[aeiouAEIOU]/g, '');
console.log(removeVowels("Hello, World!")); // 'Hll, Wrld!'


// with filter solution
const rmVowels = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return str.split('').filter(item => !vowels.includes(item)).join('');
}

console.log(rmVowels('Hello, World!')); // 'Hll, Wrld!'