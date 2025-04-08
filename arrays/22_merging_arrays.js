// When you have multiple arrays and you want to combine them into a single array, you have a way
// of doing that by using the spread operator. Take a look at the following example:

let smileys = ["😃", "😇", "😛", "🥶"];
let foods = ["🍊", "🥦", "🍔", "🍕", "🍰"];
let animals = ["🦑", "🐝", "🐈"];

let combine = [...smileys, ...foods, ...animals];
console.log(combine);