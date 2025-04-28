// convert a given number of seconds to minutes and remaining seconds.

const secsToMinsAnsSecs = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const remainingSecs = seconds % 60;
  return `${mins} minutes and ${remainingSecs} seconds`;
}

console.log(secsToMinsAnsSecs(120)); // '2 minutes and 0 seconds'