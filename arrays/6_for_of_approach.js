// for of approach

let animals = ['F', 'B', 'O', 'W', 'D'];

for (let animal of animals) {
    console.log(animal);
}

// this simplicity does come with some minor hurdles. For example, we don't have a direct way to get
// the index position of the item we are currently looping on. To access the index position and array 
// item as part of each loop iteration, we have to do a few more things as shown in the following snippes:

for (let [index, animal] of animals.entries()) {
    console.log(index + ": " + animal);
}

// Instead of looping over our array directly, we are instead looping over our array's
// enteries that are stored as key and values pairs. The key is going to be the index position, 
// and the value will be the contents of the array item. By relying on a technique known as
// destructuring, we can access the key and value directly and map it to the index and animal
// variables within our loop definition. 