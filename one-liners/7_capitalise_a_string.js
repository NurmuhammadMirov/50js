// Javascript doesn't have an inbuil capitalise function, se we can use the following code for the purpose.
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
capitalize('hello');