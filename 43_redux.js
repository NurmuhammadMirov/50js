// Historically Redux came after Flux and, it has almost the same structure. The one-way direction
// data flow is still here. We again dispatch actions and, our views subscribe to store changes. In
// Reduxe though, we have just one store. To keep it organized, we have to create the so-called 'slices'.
// Each slice has its function that accepts actions and the current state. Based on that takes a decision 
// what will be the next state. Those functions are called reducers.

// Similar to Flux, Redux can be implemented in a lot of different ways. The pattern became a standard. Because
// of that, the community develops all sorts of tooling and helps for it. The code that you are going to see here
// lacks action creators and selectors. Those are, as the name suggests, for creating actions and getting data from
// the store.  For the sake of simplicity, we are not going to implement them. We will use the example from the previous
// chapter where we solved the collecting of numbers in one place and letters in another.

// The following functions gives us the backbone of the Redux pattern - dispatching of actions, updating the state in an
// immutable fashion, and subscribing for changes.

function configure(slices) {
  const state = {};
  const views = [];
  return {
    dispatch(action) {
      Object.keys(slices).forEach(key => {
        state[key] = slices[key](state[key], action);
      });
      views.forEach(view => view(state));
    },
    connect(view) {
      views.push(view);
    }
  }
}

// Our store will have a slice that keeps the letters and another that keeps the numbers.
const { dispatch, connect } = configure({
  letters(state = [], action) {
    if (typeof action.payload === 'string') {
      return [...state, action.payload];
    }
    return state;
  },
  numbers(state = [], action) {
    if (typeof action.payload === 'number') {
      return [...state, action.payload];
    }
    return state;
  }
});

// What we pass to the 'configure' function are our reducers. They receive the current state and the action. 
// As a result, they should return a new version of the state (or the same array if nothing is changed).

// Here is a demo of how everything works:
connect(state => console.log(
  `${state.letters} ${state.numbers}`
));
dispatch({ payload: 'A' }); // A
dispatch({ payload: 'B' }); // A,B
dispatch({ payload: 5 }); // A,B 5
dispatch({ payload: 'C' }); // A,B,C 5
dispatch({ payload: 10 }); // A,B,C 5,10

// Our "view" here is just a function that prints the values from the state. In the actual application,
// that is probably a component that renders information on the DOM.

