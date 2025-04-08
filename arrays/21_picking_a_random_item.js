// If you need to select an item at random from our array, we can combine some of the concepts from
// the Random Numbers chapter and apply it to our array-centric world. The  snippet would be:
let myArray = ["Unos", "Dos", "Tres", "Catorce"];
let value = myArray[Math.floor(Math.random() * myArray.length)];

console.log(value);
