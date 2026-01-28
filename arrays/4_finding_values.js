// ---finding values
let friends = ["Joey", "Monica", "Ross", "Chandler", "Phoebe", "Rachel"];
let result = friends.indexOf("Chandler");
console.log(result); // 3

// if the value does not exist, indexOf will return a -1:
let res = friends.indexOf("Lola");
console.log(res); // -1