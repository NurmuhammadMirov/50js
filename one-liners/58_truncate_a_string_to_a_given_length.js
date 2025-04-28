// Truncate a given string to a specified maximum length.
const truncateString = (str, maxLength) => str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
console.log(truncateString("Hello, world!", 5)); // 'Hello...'