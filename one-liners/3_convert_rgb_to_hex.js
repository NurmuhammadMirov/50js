// rgbToHex enables you to convert RGB values to their corresponding hexadecimal representation

const rgbToHex = (r, g, b) => 
  '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

console.log(rgbToHex(0, 51, 255)); // '#0033ff'