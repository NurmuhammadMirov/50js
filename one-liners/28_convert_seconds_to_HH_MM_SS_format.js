// Convert a given number of seconds into the "hours:minutes:seconds" format.

const secondsToHHMMSS = (seconds) => {
  const pad = (num) => String(num).padStart(2, '0');
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const sec = seconds % 60;
  return `${pad(hours)}:${pad(minutes)}:${pad(sec)}`;
};

console.log(secondsToHHMMSS(3660)); // '01:01:00'