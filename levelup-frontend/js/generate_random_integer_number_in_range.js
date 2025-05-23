// min(inclusive) and max(inclusive)
function getRandomNuberInRange(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

// min(inclusive) and max(exclusive)
function getRandomNumInRange(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}
// Here, Math.random() generates a random value between 0 and 1. It can never generate 1.
console.log(getRandomNumInRange(0,2));