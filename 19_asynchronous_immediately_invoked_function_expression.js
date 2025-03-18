// Earier, we mentioned the async/await API. I remember the time when it was
// introfuced. It made my code a bit easier to read and manage. Very often
// though, I was writing code in the global scope where I couldn't use
// await. In such cases, I reached out to the self-invoked async function.

const url = "https://api.thecatapi.com/v1/images/search";
(async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data[0].url); // cat image url
})();

// This pattern is also known as IIFE (Immediately Invoked Function Expression)
// It is useful for the cases where we want to wrap logic in its dedicated scope.
// In the example above, res and data constants are only accessible inside the 
// getData function. (Nowadays V8 JavaScript engine supports a top level await.
// So, we don't have to use a self-invoked function anymore.)

