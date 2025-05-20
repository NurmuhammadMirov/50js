// the secsToDaysHoursMinsSecs function converts a given number of secods into days, hours, 
// minutes, and remaining seconds.
const secsToDaysHoursMinsSecs = (seconds) => {
  const days = Math.floor(seconds / 86400);
  seconds %= 86400;
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  const remainingSecs = seconds % 60;
  return `${days} days, ${hours} hours, ${minutes} minutes, and ${remainingSecs} seconds`;
};

console.log(secsToDaysHoursMinsSecs(100000)); // '1 days, 3 hours, 46 minutes, and 40 seconds'