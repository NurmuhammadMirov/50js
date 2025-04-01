// With the earlier 'for' loop, there is a bit of extra work we need to do up-front
// as part of getting our loop to run. For a much simpler and cleaner way of looping
// through our array items, we have the 'for...of' appraoch. Below is the 'for...of'
// loop in action:

let animals = ["F", "B", "O", "W", "D"];

for (let animal of animals) {
  console.log(animal);
}

// "F"
// "B"
// "O"
// "W"
// "D"

// Notice what's going on here. We don't really specify anything as part of getting our loop
// to run. All we specify is the variable that will refer to the current item (animal) and 
// the array (animals) to iterate through. The rest is automatically taken care of for us.
// That's nice, right?

// This simokicity does come with some minor hurdles. For example, we don't have a direct way
// to get the index position of the item we are currently looping on. To access the index
// position and array item as part of each loop iteration, we have to do a few more things as
// shown in the following snippet:

for (let [index, animal] of animals.entries()) {
  console.log(`${index}: ${animal}`);
}

// '0: F' 
// '1: B' 
// '2: O' 
// '3: W' 
// '4: D'

// Instead of looping over our array directly, we are instead looping over our array's
// enteries that are stored as key and value pairs. The keu is going to be the index
// position, and the value will be the contents of the array item. By relying on a
// technique known as destructuring, we can access the key and value directly and map
// it to the 'index' and 'animal' variables within our loop definition.