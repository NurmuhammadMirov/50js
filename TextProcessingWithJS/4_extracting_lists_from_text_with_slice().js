/* Task */
// Suppose you run an online shop selling thousands of different clothes. You're tasked with making the
// products searchable by color. The problem is the available colors for each product are listed as a
// sentence in the product description. You need a way to find and extract those colors programmatically
// to build a searchable database. 

// So if you have a product description like this:
/*
  Feel confident in even the most unforeseen weather conditions with these waterproof trail-running shoes helping
  you stay dry. Available in four new colors: Velvet Brown, Black, Golden Moss, Medium Blue.
*/ 

// You want to extract the colors and store them in an array like this:
// -- ["Velvet Brown", "Black", "Golden Moss", "Medium Blue"]

// The list you want to extraxt may also come in different variations. It could have a forward slash(/) between items rather
// than a comma. Or it could have extra words such as "and", "or", "etc". That you don't want to end yp in your array.

// In this recipe, we first build a function that extracts simple lists and then enhance the function to handle more complex lists.

/* Solution */
// This recipe involves two steps: first, finding the sentence containing the list of colors, and second, extracting each color and
// storitng it an an array. You can perform the first step using the indexOf() method. The list of colors comes after a colon (:).
// Locate it wiht indexOf() and store the resulting index in a constant. Next, locate the first period that follows the colon and
// store the index in another constant:

const str = `Feel confident in even the most unforeseen weather conditions 
  with these waterproof trail-running shoes helping you stay dry. Available
  in four new colors: Velvet Brown, Black, Golden Moss, Medium Blue.`;

const start = str.indexOf(":");
const end = str.indexOf(".", start);

console.log(start);
console.log(end);

// Now, you have two indexes that mark the beginning and end of the list in the string.
// Pass them to the slice() method to extract the list:

const list = str.slice(start + 2, end);
console.log(list); // 'Velvet Brown, Black, Golden Moss, Medium Blue'

// The arguments you pass to slice() specify the string's start and end index to be returned. To offset the colon
// and the space at the beginning of the string, increase the start index by 2. The end index tells slice() to extract
// up to but not including the character at that index, so there's no need to subtract from it.

// Now comes the second step, where you need to convert the comma-separated list into an array. There are a couple of ways
// to do this in JavaScript. The long approach is to look for commas in a loop and add each item to an array. The more straightforward
// approach is to use the split() method. With spit(), you can define where each split in a string should occur and quickly get an array of items:

const colors = list.split(", ");
console.log(colors); // [ 'Velvet Brown', 'Black', 'Golden Moss', 'Medium Blue' ]

// Here's the final code put together in a function so you can reuse it:

function extractList(str) {
  const start = str.indexOf(":");
  const end = str.indexOf(".", start);
  const list = str.slice(start + 2, end);

  return list.split(", ");
}

console.log(extractList(str)); // [ 'Velvet Brown', 'Black', 'Golden Moss', 'Medium Blue' ]

/* Discussion */ 
// If the list you want to extract has extra words, such as "and," "or," "etc," or uses a forward slash(/)
// rather than a comma, then you need a more advanced function. You probably won't find "etc." in a list of
// available color optionsfor a product, but we have included it here so that you can remove it from ohter 
// types of lists, if needed.

// Consifer this example:

console.log(extractList('Available in three colors: red, black, and blue.'));
// -> [ 'red', 'black', 'and blue' ]

console.log(extractList("Availabe colors: Red/Black/Blue."));
// -> [ 'Red/Black/Blue' ]

console.log(extractList("Availabe colors: Red, Black, Blue, etc."));
// -> [ 'Red', 'Black', 'Blue', 'etc' ]

// This function isn't equipped to handle such lists properly. Let's revise it! You first need
// to check whether the list has a comma or a forward slash.

list.includes(",") ? list.split(", ") : list.split('/');

// the includes() method checks if the list contains a comma. If so, it returns true, and the
// ternary operator executes list.split(","). if not, the operator executes list.split("/").

// Next, remove "etc" from the resulting array:

// -> arr.at(-1) === "etc" ? arr.pop() : null

// at(-1) gets the last item in the array. If it has a value of "etc," pop() removes it. You could
// use a filter() here, but since "etc" is usually the last item in the array, it's more efficient
// to check only the last item's value.

// To remove "and"/"or" you can use map(), like this:
/*
  return arr.map(word => {
    if (word.startWith("and ")) {
      return word.slice(4);
    } else if (word.startsWith("or ")) {
     return word.slice(3);
    } else {
      return word; 
    }
  });
*/ 

// When you call map(), it executes a function on every element in the array. Use the startsWith()
// method to check if there's an extra "and" or "or" at the beginning of an item and remove it with slice().

// Your  revised function should look like this:

function revisedExtractList(str) {
  const start = str.indexOf(":");
  const end = str.indexOf(".", start);
  const list = str.slice(start + 2, end);

  // Split the string by comma or forward slash
  const arr = list.includes(",") ? list.split(", ") : list.split("/")

  // Remove "etc"
  arr.at(-1) === "etc" ? arr.pop() : null;

  // Remove and/or
  return arr.map(word => {
    if (word.startsWith("and ")) {
      return word.slice(4);
    } else if (word.startsWith("or ")) {
      return word.slice(3);
    } else {
      return word;
    }
  });
}

console.log(revisedExtractList('Available in three colors: red, black, and blue.'));
// -> [ 'red', 'black', 'blue' ]

console.log(revisedExtractList("Availabe colors: Red/Black/Blue."));
// -> [ 'Red', 'Black', 'Blue' ]

console.log(revisedExtractList("Availabe colors: Red, Black, Blue, etc."));
// -> [ 'Red', 'Black', 'Blue' ]