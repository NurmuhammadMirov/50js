// Convert a given number of minutes to hours and remaining minutes.

const minsToHoursAndMins = (mins) => {
  const hours = Math.floor(mins / 60);
  const remainingMins = mins % 60;
  return `${hours} hours and ${remainingMins} minutes`;
}

console.log(minsToHoursAndMins(150)); // '2 hours and 30 minutes'
