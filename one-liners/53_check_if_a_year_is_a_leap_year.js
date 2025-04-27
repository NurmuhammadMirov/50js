// check if a given year is a leap year.

const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

console.log(isLeapYear(2024)); 