// get the day of the week from a given date.

const getDayOfWeek = (date) => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return daysOfWeek[date.getDay()];
}

console.log(getDayOfWeek(new Date("2025-04-29"))); // 'Tuesday'