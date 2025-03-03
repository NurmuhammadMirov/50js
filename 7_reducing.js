// Very often, we have to transform objects from one shape to another.
// My favorite tool for such transformation is the'reduce' function. Let's
// say that we have the following array of objects:

const positions = [
  { languages: ["HTML", "JavaScript", "PHP"], years: 4 },
  { languages: ["JavaScript", "PHP"], years: 2 },
  { languages: ["C", "PHP"], years: 3 },
];

// And we need the total number of years for each of the languages. The
// solution involes looping over the items in some sort of aggregation.
// Exactly what 'reduce' is made for:

const yearsOfWriting = positions.reduce((res, { languages, years }) => {
  languages.forEach((lang) => {
    if (!res[lang]) res[lang] = 0;
    res[lang] += years;
  });
  return res;
}, {});

console.log(yearsOfWriting);

// 'reduce' is a method of the Array prototype. It allows us to accumulate a value
// by looping over the items of the array.

// It is possible to use the function of objects too. We need a little bit of help. If
// we pass the object to 'Object.keys', we will get back an array of all the keys/fields. 
// Then we can iterate them. Let's continue the example and ask another question -
// how many years in total?

const yearsOfWorking = { HTML: 4, JavaScript: 6, PHP: 9, C: 3 };
const totalYears = Object.keys(yearsOfWorking).reduce((total, key) => {
  return total + yearsOfWorking[key];
}, 0);

console.log(totalYears); // 22