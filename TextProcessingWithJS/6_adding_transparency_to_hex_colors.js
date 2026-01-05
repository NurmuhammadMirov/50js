// Task
// Suppose you want to add a semi-transparent overlay to some elements of your app. For
// example, you may have a prompt that asks the reader to log in before proceeding, and
// you may want to include a semi-transparent white color around the prompt to blur the
// remiander of the page.

// if you use a normal hexadecimal color, the overlay will completely obscure the content
// underneath it. if you use the CSS opcity, it will set the opacity of the element as a
// whole, including its contents.

// You need a solution that lets you add transparency to a hex color.

// Solution
// Write a function that accepts a hex value and a percentage as input parameters. The function should convert
// the percentage into a hex value and then add it to the original hex value.

function addAlphaToHex(hex, percent) {
    const decimal = percent / 100;
    const rgb = Math.round(decimal * 255);
    const alpha = rgb.toString(16).toUpperCase();

    if (alpha.length === 1) {
        alpha = "0" + alpha;
    }

    return hex + alpha;
}

console.log(addAlphaToHex("#FFFFFF", 70)); // '#FFFFFFB3'