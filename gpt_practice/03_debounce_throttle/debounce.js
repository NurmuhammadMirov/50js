// what is debounce?
// Debounce is a technique where a function is deleyed until after a certain amount of time
// has passed without it being called again.

// Real-time search input (wait until user stops typing)
// Resize window listener
// Scroll event performance
// Vue/React controlled input field with romote data fetchin

/**
 * Create s debounce version of a function.
 * @param {Function} fn - The function to debounce.
 * @param {number} delay - Delay in ms.
 * @returns {Function} - Debounced version of fn.
 */

export function debounce(fn, delay) {
  console.log('calllinf');
  let timeoutId;

  return function(...args) {
    clearTimeout(timeoutId); // cancel previous timeout
    timeoutId = setTimeout(() => {
      fn.apply(this, args); // call after delay with latest args
    }, delay);
  };
}