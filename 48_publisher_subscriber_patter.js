// Often in programming, we use design patterns without even knowing
// that they exist. The publish/subscribe pattern is one of them. I'm
// pretty sure that every web developer has to work with the DOM and has
// to listen for events like 'click' or 'load'. Whenever we use addEventListener
// we are using the publish/subscribe pattern.

// objects (subscribers) that need some information
// objects that are ready to provide it (publishers).
// The pattern implements a machanism/channel between them so
// they can communicate via messages. The message is often called 'event'.

const Bus = {
  _subscribers_: {},
  subscribe(type, callback) {
    if (!this._subscribers_[type]) this._subscribers_[type] = []; //if false then true
    this._subscribers_[type].push(callback);
    return () => {
      this._subscribers_[type] = this._subscribers_[type].filter((c) => c !== callback);
    };
  },
  dispatch(type, payload) {
    if (this._subscribers_[type]) {
      this._subscribers_[type].forEach((c) => c(payload));
    }
  },
};

// if you read the chapter for the Flux architecture, you will recognize a aimila API
// We need a local variable to keep the subscribers and a method for dispatching events

const unsubscribe = Bus.subscribe("hey", (data) => {
  console.log(`Hello, ${data.name}`);
});

Bus.dispatch("hey", {name: "Alan"});
Bus.dispatch("hey", {name: "Margie"});
unsubscribe();
Bus.dispatch("hey", {name: "George"});
