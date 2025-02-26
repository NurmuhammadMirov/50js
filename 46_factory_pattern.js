// The factory pattern, same as a singleton, is into the category of creational
// patterns. Those are patterns that are focused on the initiallization of the
// objects. In the world of JavaScript this could be a fucntion that receives
// dependencies and returns the desired instance.

function vehicleFactory(engine) {
  return (type) => {
    switch(type) {
      case 'car': return new Car(engine);
      case 'track': return new Track(engine);
    }
    throw new Error(`Unrecognized type ${type}`);
  }
}

function Car(engine) { this.what = 'car'; }
function Track(engine) { this.what = 'track'; }
const engine = { vroom: true };
const factory = vehicleFactory(engine);
const A = factory('car');
const B = factory('track');
console.log(A.what, B.what);

// We use the factory pattern when we are not sure what kind of objects we
// need. Often this information comes at runtime. That is why the factories
// usually hold a switch type of logic.