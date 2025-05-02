// check if  a given string is a valid URL.
const isValidURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

console.log(isValidURL("https://www.example.com")); // true
console.log(isValidURL("invalid-url")); // false