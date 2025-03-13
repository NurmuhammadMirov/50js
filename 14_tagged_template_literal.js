// Some time ago we weren't able to write multiline strings in JavaScript. We
// had to concatenate. Then the template was born. Suddenly our life became easier.

const what = "dummy text";
const bigString = `
 Lorem ipsum is simply ${what} of the
 printing and typesetting industry.
`;

// In terms of string manipulations, this is probably the best thing that happen to JavaScript
// in the last couple of years.

// The template literals are expremely useful but tagged template literals are
// even better. They allow us to define a fucntion that will process the string.
// The function accepts all the text and the expressions in the placeholders. Check
// out the example below. Instead of a primitives, we are passing a function to the
// placeholder. That fuction is fired with a theme object.

const theme = {
  brandColor1: "#BE2525",
  brandColor2: "#BE0000",
};
function css(strings, ...values) {
  return strings.reduce((res, str, i) => {
    return res + str + (values[i] ? values[i](theme) : "");
  }, "");
}
const styles = css`
  font-size: 1.2em;
  color: ${(theme) => theme.brandColor2};
`;
console.log(styles);
// font-size: 1.2em;
// color: #BE0000

// The JavaScript community uses this feature of the languages in places where
// complex parsing is needed. There is all sort of libraries that rely on a tagged
// template. The most popular ones are implementing CSS-in-JS solutions.
// There we have our CSS writing as a tagged template literal. Similar to the exampe above.