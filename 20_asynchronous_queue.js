// Sometimes I like to solve problems that are already solved by libraries.
// One of those problems is handling multiple async operations one after the other.
// Or in other words, having an API that accepts promises at random intervals
// and returns the result of all of them. For example:

const queue = createQueue();

function nationality(name) {
  return () => fetch(`https://api.nationalize.io/?name=${name}`)
        .then((res) => res.json())
        .then((data) => `${name}: ${data.country[0].country_id}`);
}

queue.add(nationality("Krasimir"));
queue.add(nationality("Natalie"));
setTimeout(() => {
  queue.add(nationality("Hans"));
}, 10);
queue.done.then(console.log);

queue.execute();
// After a while: ['Krasimir: BG', 'Natalie: GB', 'Hans: FO' ]


// nationality is a function that receives a name and asks api.nationalize.io where
// that name comes from. It returns a promise. We are adding all the promises to a
// queue. At the end, when all the promises are resolved we get the final result.

// Here's my implementation of this asynchronous queue.

function createQueue() {
  let tasks = [], results = [], processing = false, done = () => {};
  const handle = (res) => {
    results.push(res);
    processing = false;
    execute();
  };
  function execute() {
    if (tasks.length > 0 && !processing) {
      processing = true;
      tasks.shift()().then(handle).catch(handle);
    } else if (tasks.length === 0 && !processing) {
      done(results);
    }
  }
  function add(task) { tasks.push(task) }
  return {
    add,
    execute,
    done: new Promise((cb) => (done = cb))
  }
}

// It is defining a list of tasks and monitoring when those tasks are done.
// Whenever an operation is finished we check if there are any pending promises
// if not, we consider the job done. Further optimization may be to run the requests
// in parallel because now they wait for each other.