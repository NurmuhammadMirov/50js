// As most of the programming languages today JavaScript supports regular
// expressions. I have never been so good with this. It just gets
// complicated quickly.

// I want to share my favorite feature - capture groups. It can
// solve a whole set of problems with just one line of code.
// Recently I had to rename a file from script.js to script.prod.js.
// Capture groups are perfect for this:

function renameFile(file, postfix) {
  return file.replace(
    /(\.(js|ts|jsx|tsx))/i,
    `.${postfix}$1`
  );
}

console.log(renameFile("public/js/script.js", "prod")); // 'public/js/script.prod.js

// The (\.(js|ts|jsx|tsx)) difines a capture group that matches .js. Later in the
// second argument of the replace method we have it as $1. $2 will contain the value
// of the second capture group and so on.