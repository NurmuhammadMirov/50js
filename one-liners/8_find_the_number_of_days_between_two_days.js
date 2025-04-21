// Find the days between 2 given days using the following snippet.
const dayDiff = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
console.log(dayDiff(new Date("2020-10-21"), new Date("2021-10-22"))); // 366
