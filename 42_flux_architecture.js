// ####----Flux Architecture----####
// The idea is to keep our state in multiple stores. There is a dispatcher that receives actions
// and it forwards them to each of the stores. Internally the store decides whether the action makes
// sense. Maybe it changes its state, maybe not. In case of a change, it notifies the views(React components).

// In this chapter, we will implement the pattern. Let's start by writing the dispatcher.

const D = (function() {
  const stores = [];
  return {
    register: function (store) {
      stores.push(store);
    },
    dispatch: function (action) {
      stores.forEach(function (s) {
        s.update(action);
      })
    }
  }
})();

// The are dozem of Flux libraries and in most of them, the dispatcher has such API.
// One method for registering a store and one for dispatching actions. We assume that the
// stores will have an update method. That is the function that will receive the action.

// To make the example a bit more interesting we will use two stores. Let's say that the first
// will collect only numbers and the second one only letters. The view will be just a simple function
// displaying what's in both stores.

const Numbers = {
  data: [],
  update(action) {
    if (typeof action.payload === 'number') {
      this.data.push(action.payload); renderView();
    }
  }
}

const Letters = {
  data: [],
  update(action) {
    if (typeof action.payload === 'string') {
      this.data.push(action.payload); renderView();
    }
  }
}

function renderView() {
  console.log(Numbers.data, Letters.data);
}

// At the end we have to dispatch some actions:
D.register({ payload: 'A' });