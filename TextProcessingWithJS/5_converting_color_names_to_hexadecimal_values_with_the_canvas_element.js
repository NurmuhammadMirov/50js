/* Task */ 
// Suppose you're working on a drawing application that works with hexadecimal(hex) colors codes.
// you want to provide a field that lets users enter a color name to be converted to its hex equivalence automatically.

// you need a solution for converting colors inot their hex representation.

/* Solution */ 
// create a temporary HTML canvas element, obtain its 2D context, and use the fillStyle
// property to convert the color:

function convertColorToHex(color) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = color;
  return ctx.fillStyle.toUpperCase();
}

convertColorToHex("Khaki");

// This function accepts a string containing a web color name and converts it into its corresponding hex value.

/* Discussion */
// Hexadecimal notation is commonly used to specify colors in programs and we development because it provides
// a compact and efficient way to represent a wide range of colors. 