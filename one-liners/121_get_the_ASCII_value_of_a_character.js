// the getASCIIValue function retrieves the ASCII value of a given character. It employs the charCodeAt method,
// which returns the ASCII code of the character at the specified index (0 in this case).

const getASCIIValue = (char) => char.charCodeAt(0);
console.log(getASCIIValue('A')); // 65