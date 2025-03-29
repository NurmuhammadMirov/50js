// Now when we know what a state machine is, we can talk about 'reducers'. That term became
// popular around the Redux library, where it is the main actor. The reducer looks a lot like
// a state machine. By definition, the reducer is a function that accepts the current state
// and an action and returns a new state.

let state = 0;
const actions = [
  'INC', 'INC', 'FOO', 'DEC', 'INC'
];

function reducer(accumulatedValue, action) {
  if (action === 'INC') { return accumulatedValue + 1; }
  if (action === 'DEC') { return accumulatedValue - 1; }
  return accumulatedValue;
}
actions.forEach(action => {
  state = reducer(state, action);
});
console.log(state);

// We don't have that restrictive model used in a state machine, but there are some similarities.
// The reducer decides what will be the next state based on its current value and the incoming action.

// The concept of reducers touches on another intersting topic - immutability. In libraries like Redux,
// it is one of the main ideas. State management where we generate a new state after each change instead
// of amending the current one. Think about how we have an object with key-value pairs, and instead of
// updating the values, we create the whole object again. Maybe this sounds like a bad idea, but in fact,
// it works well.

