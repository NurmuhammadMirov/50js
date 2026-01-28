//forEach approach
let animals = ['F', 'B', 'O', 'W', 'D', 'A'];

animals.forEach((item) => console.log(item));

// if we want to include the current index position as well, our callback function
// accepts the index position as its second argument:

animals.forEach((item, index) => console.log(index + ": " + item));

// purely from a code simplicity point of view, the forEach method is really nice.
// it has some quirks like missing support for 'break' and 'continue'.