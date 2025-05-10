// this function performs the conversion of a binary number to its equivalent decimal representation,
// all without utilizing the parseInt function. The process involes splitting the binary numbers's
// digits, reversing them, and using a reduce operation to calculate the decimal value by considering
// each digit's position and value.

const binaryToDecimalWithoutParseInt = (binary) =>
  binary.split('').reverse().reduce((dec, bit, index) => dec + bit * (2**index), 0);

console.log(binaryToDecimalWithoutParseInt("1101")); // 13