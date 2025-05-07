/**
 * Create a throttled version of a function
 * @param {Function} fn - The function to throttle.
 * @param {number} interval - Time in ms between calls.
 * @returns {Function}
 */ 

export function throttle(fn, interval) {
  let lastCall = 0;

  return function(...args) {
    const now = Date.now();

    if (now - lastCall >= interval) {
      lastCall = now;
      fn.apply(this, args);
    }
  }
}