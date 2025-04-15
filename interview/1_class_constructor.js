// Constructor method
// The constructor method is a method that is defined within a class declaration using the 'constructor' keyword. It will
// create and initialize the properties of an instance of a class. 

// We will set the values of the arguments passed in to the constructor method using the 'this' keyword:

class Person {
  constructor(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
  }
}

// A class can only have one constructor method. More than one constructor method will result in a SyntaxErrpr.

// To initialize an instance of the "Person" class, use the new keyword:

let person1 = new Person('Rover', 10, 'snacking');

// In this example the variable 'person1' refers to an instance of the 'Person' class. The 'person1' instance has 
// its name property equal to the string 'Rover', 'age' is set to the numeric value '10' and hobby has a value of 
// 'snacking'. Logging 'person1' to the console will return the following:

console.log(person1);

// This is just one object instance using the 'Person' class. We can instantiate many more object instances from the same
// class. Therefore, allowing us to implement inheritance in JavaScript by using one parent class.