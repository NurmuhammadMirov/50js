// get the name of the month from a given date.
const getMonthName = (date) => {
  const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  return months[date.getMonth()];
}

console.log(getMonthName(new Date("2025-04-29"))); // 'April'
console.log(getMonthName(new Date("2025-06-29"))); // 'June'