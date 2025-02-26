// ####----A mixin example----####
// The simplest way to implement a mixin in JavaScript is to make an 
// object with useful methods, so that can easily merge them into a prototype of any class.

// For instance here the mixin "sayHiMixin" is used to add some "speech" to "User":

// mixin
let sayHiMixin = {
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  }
};

// usage:
class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods 
Object.assign(User.prototype, sayHiMixin);

// now user can say hi 
new User("Dude").sayHi();