// ##--Adding to the Prototype--##
// Extending objects is something JavaScript has supported since the beginning of time. This OG approach invovles 
// relying on prototypes, which is the main way JavaScript objects inherit functuonality from each other. Adding new
// methods or properties on the prototype ensures that all object instances of that prototype get those methods and
// properties as well. That last sentence will probably make more sense with an example, so let's revisit an example
// we have seen earlier.

// Let's sau we have a 'swap' method that we would like to make available to all arrays. The way we can do that is by
// us adding the 'swap' method to our array's prototype:

Array.prototype.swap = function(index_A, index_B) {
  let input = this;

  let temp = input[index_A];
  input[index_A] = input[index_B];
  input[index_B] = temp;
}

// After defining this method, the way we call this 'swap' method is no different than calling any other
// method on our array:

let myData = ["a", "b", "c", "d", "e", "f", "g"];

myData.swap(2, 5);
console.log(myData);

// Despite our 'swap' method being something we defined, using it as part of our array feels
// totally natural - like it was always part of our array all this time! To better highlight
// this, the following is what the prototype chain for 'myData' looks like:

// Pay special attention to where the 'swap' method is in relation to 'myData'. From our 'myData'
// array's point of view, the 'swap' method is something that has always been there since it looks
// to it prototype and sees it there. It isn't just 'myData' that has access to our 'swap' method
// Any arrays that we have defined in the same scope as our 'swap' method. Any arrays that we have
// defined on the same scope as our 'swap' method have access to it as well.

// ##--Subclassing our Array--##
// Instead of adding more capabilities directly to our array prototype, we have more modern approach
// where we can create our own Array-like object that extends our default Array. This is something
// known as subclassing where our custom array object has any custom methods/properties we define in
// addition to everything the base Array object provides. Take a look at the followign example of 
// this in action:

class AwesomeArray extends Array {
  swap(index_A, index_B) {
    let input = this;

    let temp = input[index_A];
    input[index_A] = input[index_B];
    input[index_B] = temp;
  }
}

// We are defining a class called 'AwesomeArray' that subclasses our 'Array' by using the 'extends'
// keyword. Inside 'AwesomeArray', we define our 'swap' method. The way we can use this 'swap' method.
// The way we can use this 'swap' method is by creating an 'AwesomeArray' object and then just calling
// swap on it:

let data = new AwesomeArray("a", "b", "c", "d", "e", "f", "g");
data.swap(0, 1);
console.log(data);

// In the highlighted lines, we create our 'AwesomeArray' object called 'data'. We create it by
// using the 'new'  keyword and calling the 'AwesomeArray' constructor. Because 'AwesomeArray' is 
// still as 'Array' behind the scenes, we can perform our usual array-like operations. For example
// to initialize our array with some default values, we pass in our initial values as arguments to
// our 'AwesomeArray' constructor

// There is one more thing to cover when it comes to subclassing our array. A handful of array
// methods (such as 'map', 'filter', etc.) return an array as part of their regular operation
// This array that gets returned respexts the type of the array it was invoked from. This means
// calling 'map' on our 'AwesomeArray' type will return an array that is also an AwesomeArray:


let newData = new AwesomeArray("a", "b", "c", "d", "e", "f", "g");
let mapNewData = newData.map((letter) => letter.toUpperCase());
console.log(mapNewData);