// generate an array of random nubers.
const randomArray = (length) => Array.from({ length }, () => Math.floor(Math.random() * 100));
console.log(randomArray(5));
