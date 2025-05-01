// pattern 6
//   *
//  * *
// * * *
//* * * *

const p_height = 5;

for (let i = 1; i < p_height; i++) {
  let spaces = "";
  for (let k = p_height - 1; k >= i; k--) {
    spaces+=' ';
  }

  let stars = '';
  for (let j = 1; j<=i; j++) {
    stars+="*";
  }

  console.log(spaces+stars);
}
