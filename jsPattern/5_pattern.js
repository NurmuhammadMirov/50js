// Pattern 5

// *****
// ****
// ***
// **
// *

const n = 5;

for (let i = n; i >= 1; i--) {
  let spaces = "";
  for (let j = n - 1; j >= i; j--) {
    spaces +='';
  }

  let stars = "";
  for (let k = 1; k <= i; k++) {
    stars += '*';
  }

  console.log(spaces + stars);
}

