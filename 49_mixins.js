// A mixin is a set of helpers that we can inherit.
// In the world of JavaScript, this is often an object that
// we merge with another one. The power of the mixins comes from
// the fact that we may create many of them. By default in JavaScript,
// we can inherit from one class. This creates limitations. The mixins
// don't have such problems because we can apply multiple to a single object

// Let's look at the following car engine case
function Car() {
  this.speed = 50;
}

function engineMixin(obj) {
  return Object.assign(obj, {
    forward() { console.log(`forward ${this.speed} km/h`); },
    backward() { console.log(`backward ${this.speed} km/h`); },
  });
}

function extrasMixin(obj) {
  return Object.assign(obj, {
    horn() { console.log("Beeeeeeeeeep!"); }
  })
}

// if we create a car (via new Car() statement) we will get just an object with a
// speed property. However, if we pass the car to engineMixin and extrasMixin mixins
// we will enhance the car's API with three new methods.

const car = extrasMixin(engineMixin(new Car()));
car.forward();
car.horn();
car.backward();

// We have to use this pattern wisely. The common problems of the mixins are
// with the dependencies management, level of complexity, and name clashing.
// if a team decides to adopt the mixins pattern, the developers need to create
// conventions, so they avoid such issues.