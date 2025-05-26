/* Task */
// Suppose you're building an online bakeshop and want to filter messages so they can be rounted to the correct baker.
// You need to check the strings in incoming emails to account for different spellings of words like 'doughnut' versus
// 'donut'. You can't use the includes() method alone because it allows you to look for only a single word.

/* Solution */ 
const msg = "I'd like to order two donuts";
const words = ["doughnut", "donut"];

function hasSomeWords(str, arr) {
  return arr.some(el => str.includes(el));
}

console.log(hasSomeWords(msg, words)); // true

// The some() methods returns true if at least one element in the array passes the test