class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`My name is ${this.name} and I am ${this.age} years old`);
  }
}

class Student extends Person {
  constructor(name, age, id) {
    // delegate the responsibility of initializing
    // "name" and "age" properties to the parent class
    super(name, age);
    this.id = id;
  }
}

// This code above gives us the same result as the one with the constructor functions. It also creates the same prototype
// linkages. We can verify this with the follwoing comparisons: 

const leo = new Student('Leo', 20, 222);

console.log(Object.getPrototypeOf(leo) === Student.prototype); 
// -> true

console.log(Object.getPrototypeOf(Student.prototype) === Person.prototype);
// -> true
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);
// -> true

// One importatn thing to mention here is that the classes are just syntactic sugar the traditional constructor functions.
// Under the hood, we are still using the constructor functions, but classes allow us to write the code in a moredeclarative way.

// One extra thing that the extends keyword does is that, apart from setting the linkage between Student.prototype and Person.prototype
// objects, it also links the constructor functions, It does this by setting the Person.prototype class as the prototype of the Student class.
// The following code verified the second prototype chain that the extends keyword sets up for us behind the scenes.