// Step 1: Create a reusable async fetch function

async function fetchPost(postId) {
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`❌ HTTP ${response.status}: ${response.statusText}\nBody: ${body}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    // This will catch both fetch failures and throw errors
    console.error("Fetch failed:", err.message);
    throw err; // rethrow so caller can handle it if needed
  }
}

// Step 2: Use the async function in an IIFE (immediately-invoked async function expression)

(async () => {
  console.log("Fetching post...");

  try {
    const post = await fetchPost(1);
    console.log("Post received:", post);
  } catch (err) {
    console.error('Final catch:', err.message);
  }

  console.log("Done.");
})();

// Instead of IIFE we can
// Option 1: Define and Call a Named Async Function
// the cleanest and most common alternative:
async function main() {
  try {
    const post = await fetchPost(1);
    console.log("Post reveived:", post);
  } catch(err) {
    console.error("Error:", err.message);
  }
}

main(); // call it

// or Option 2: Use ".then()" after async function

fetchPost(1)
  .then((post) => console.log("Post", post))
  .catch((err) => console.error('Error:', err.message));