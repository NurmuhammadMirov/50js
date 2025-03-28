// I believe that state machines must be taught equally as every other design pattern in programming.
// It is interesting that, once I found this concept, I started seeing state machines everywhere. 
// Especially in the development of user interfaces where we have to manage a lot of states. But what
// is a state machine? The mathematical explanation is that the state machine is a model of computation.
// The non-mathematical (my explanation) is that the state machine is a box that keeps your state and 
// changes it based on input and current value.

// There are different types of state machines. The one that we are interested in is called a finite state
// machine. As the name suggests, it had a finite number of possible states. Think about a map of what conditions
// your app may be and strict lines between the different values.

// To illustrate the concept, we will write software for and elevator. Our elevator is a simple one and can be in the
// following states: "idle", "moving", and "broken".

// So, this is a finite number (3)  of possible states. We can also define the
// transitions from one state to another:

// idle --- move --> moving
// moving --- stop --> idle
// moving --- error --> broken

// Here we can see one of the biggest benefits - if we implement the machine correctly, it will prevent wrong transitions.
// For example, we can't go from "idle" to a "stop" state or from "move" directly to "idle". Here is how this looks like
// in JavaScript:

function createEscalator() {
  
  let currentState = 'idle';
  debugger;
  const transition = {
    idle: {
      move: () => {
        currentState = 'moving';
      }
    },
    moving: {
      stop: () => {
        currentState = 'idle';
      },
      error: () => {
        currentState = 'broken';
      }
    },
    broken: {}
  }

  return (action) => {
    if (transition[currentState][action]) {
      transition[currentState][action]();
      console.log(currentState);
    } else {
      console.warn(
        `"${action}" is forbidden while in "${currentState}" state.`
      )
    }
  }
}

// The API of our machine is single function that accepts an action. Internally
// the machine checks if the action makes sense in the context of the current state.
// If not, it does nothing and prints a warning message.

const escalator = createEscalator();
escalator('move'); // success
escalator('move'); // "move" is forbidden while in "moving" state.
// escalator('stop'); // success
// escalator('move'); // success
// escalator('error'); // success
// escalator('stop'); // "stop" is fobidden while in "broken" state.

// Notice that we have no transitions if the machine falls into a "broken" state.
// We have to restart the machine, so it starts working again.