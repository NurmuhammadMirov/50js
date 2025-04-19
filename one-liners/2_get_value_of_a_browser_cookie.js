// Retrieve the value of cookie by accessing with document.cookie

const cookie = name => `;${document.cookie}`.split(`;${name}=`).pop().split(';').shift();
cookie('_ga');