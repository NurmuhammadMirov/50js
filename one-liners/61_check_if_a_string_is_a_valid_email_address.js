// check if a given string is a valid email address
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
console.log(isValidEmail("user@example.com"));
console.log(isValidEmail("invalid-email"));