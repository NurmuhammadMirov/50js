// find the difference between two dates in days.
const dateDifferenceInDays = (date1, date2) => Math.abs(Math.floor((date2 - date1) / (1000 * 60 * 60 * 24)));

const startDate = new Date("2023-08-01");
const endDate = new Date("2023-08-10");
console.log(dateDifferenceInDays(startDate, endDate)); // 9