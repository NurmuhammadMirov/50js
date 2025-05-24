const protoObj = {
  sayHello: function(name) {
    return `Hello ${name}`;
  }
};

const obj = Object.create(protoObj);
obj.firstName = 'Mirov';
obj.lastName = undefined;

const array = [1,,3];

/*----------Tests-----------*/ 

/* check own property */
console.log('firstName' in obj); // true

/* check property in prototype */
console.log('sayHello' in obj); // true

/* check property with undefined value */
console.log('lastName' in obj); // true

/* check property that does not exist */
console.log('fullName' in obj); // false

/* check for array hole (checking for index) */
console.log(1 in array); // false
console.log(0 in array); // true