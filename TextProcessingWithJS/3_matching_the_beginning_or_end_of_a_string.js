// matching the beginning or end of a string with startsWith() and endsWith()

/* Task */
// Let's assume you have a database of articles about pet care and your task is to compile a list
// of questions that are answered in the articles. Suppose the articles are formatted in the Markdown
// language and the questions are all in level 2 heading tags (preceded with ##).

// How would you write a code that distinguished a heading from a normal sentence? And what would
// you use if you wanted to filter those that are questions? You need a solution that lets you check
// the characters at the befinning and end of a string.

/* Solution */ 
// First, we'll use the startsWith() method to determine if the string begins with ##:
const str1 = '## Why is chocolate bad for your dog?';
const str2 = '# 10 Amazing Dog Facts';
const searchStr = '##';

console.log(str1.startsWith(searchStr)); // true
console.log(str2.startsWith(searchStr)); // false

// then we'll use the endsWith() method to check if the string ends with a question mark:
const searchString = "?";

console.log(str1.endsWith(searchString)); // true
console.log(str2.endsWith(searchString)); // false

// Now that we know startsWith() and endsWith() produce the result we want, let's create a
// function that performs both these operations at the same time:

function startsWithEndsWith(str, start, end) {
  /* before */ 
  // if ((str.startsWith(start) === true) && (str.endsWith(end) === true)) {
  //   return true;
  // } else {
  //   return false;
  // }

  /* fater */ 
  return str.startsWith(start) && str.endsWith(end);
}

// This code works fine for testing a string containing a signle sentence, but we want to
// extract level 2 Markdown headings from an article. So, we need a way to pass each line of
// the article to our function. Divide the string at line breaks by calling split("\n"), then
// loop over the resulting array with forEach() and pass each line to startsWithEndsWith():

const str = 
`## Why is chocolate bad for your dog?
Some text ...
## Best way to trim your dog's nails
More text...
## Are there human foods that are safe for dogs?
`;

str.split("\n").forEach(str => {
  if (startsWithEndsWith(str, "##", "?")) {
    console.log(str);
  }
});

// logs:
// -> '## Why is chocolate bad for your dog?' 
// -> '## Are there human foods that are safe for dogs?'