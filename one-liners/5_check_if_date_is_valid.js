// Use the following snippet to check if a given date is valid or not.

const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

// 19/12/2025 results to false
console.log(isDateValid("December 19, 2025 03:24:00")); // true
