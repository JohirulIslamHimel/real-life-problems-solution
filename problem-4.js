/*function signature/sample */
function gonoVote(array) {
  //write your code here

  //input Array checking:
  if (Array.isArray(array) === false) {
    return "Invalid";
  }

  // vote counting:
  let haCount = 0;
  let naCount = 0;

  for (let vote of array) {
    if (vote === "ha") {
      haCount++;
    } else if (vote === "na") {
      naCount++;
    }
  }
  // result check:
  if (haCount > naCount) {
    return true;
  } else if (haCount === naCount) {
    return "equal";
  } else {
    return false;
  }
}

let output1 = gonoVote(["ha", "na", "ha", "na"]);
console.log(output1);
let output2 = gonoVote(["ha", "na", "na"]);
console.log(output2);
let output3 = gonoVote(["ha", "ha", "ha", "na"]);
console.log(output3);
let output4 = gonoVote("ha, na");
console.log(output4);
let output5 = gonoVote(12345);
console.log(output5);
let output6 = gonoVote(["ha", "hi", 123]);
console.log(output6);
