// Shuffling an array is super easy with sort and random methods

const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
console.log(shuffleArray([1, 2, 3, 4, 5]));