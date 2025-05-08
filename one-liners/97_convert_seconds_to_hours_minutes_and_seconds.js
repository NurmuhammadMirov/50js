// Convert seconds to hours, minutes, and seconds.
const secsToHoursMinsSecs = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const remainingSeconds = seconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  const remainingSecs = remainingSeconds % 60;
  return `${hours} hours, ${minutes} minutes, and ${remainingSecs} seconds`;
};

console.log(secsToHoursMinsSecs(20));
