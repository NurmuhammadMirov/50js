// the isTriangularNumber function determines wether a given number is a triangular number.

const isTriangularNumber = (num) => {
  let n = 0;
  let sum = 0;
  while(sum < num) {
    n++;
    sum += n;
  }
  return sum === num;
}

console.log(isTriangularNumber(10)); // true
console.log(isTriangularNumber(15)); // true
console.log(isTriangularNumber(7)); // false