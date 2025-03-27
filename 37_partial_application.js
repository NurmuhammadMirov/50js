// Developers that used to write in functional languages feel good with JavaScript.
// The language supports functional concepts. One of them is partial application.

// Partial application is when we duplicate a function but with some of its arguments
// already applied. It sounds a bit weird, but it is a useful technique.
// Consider the following function:

function createLogMessage(type, message) {
  return `${type}: ${message}`;
}

// and some of its potential usage:

console.log(createLogMessage('Error', 'Ops!'));
// 'Error: Ops!'
console.log(createLogMessage('Info', 'Data delivered.'))
// 'Info: Data delicered.'

// Think about how we have to use 'createLogMessage' everywhere in our application.
// This means specifying the type all the time. We can extract that to a constant,
// but it is still a duplicate.

// We can make our life easier by using the partial application.
function partial(func, ...args1) {
  return (...args2) => {
    return func(...args1, ...args2);
  }
}

const onError = partial(createLogMessage, 'Error');
const onInfo = partial(createLogMessage, 'Info');

console.log(onError('Ops!'));
// 'Error: Ops!'
console.log(onInfo('Data delivered.'));
// 'Info: Data delivered'

// Notice how we abstracted the original createLogMessage function. We not only
// avoid repeating ourselvs, but we have these little helpers 'onError' and 'onInfo'.


// JavaScript had a built-in method that is doing a partial application. We mentioned it
// when we were talking about scope. That is the bind function. This last snippet we could
// replace with the following:

const onErrorB = createLogMessage.bind(null, 'Error');
const onInfoB = createLogMessage.bind(null, 'Info');