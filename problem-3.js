/*function signature/sample */
function finalScore(omr) {
  //write your code here
  if (typeof omr !== "object" || omr === null || Array.isArray(omr)) {
    return "Invalid";
  }

  if (
    typeof omr.right !== "number" ||
    typeof omr.wrong !== "number" ||
    typeof omr.skip !== "number"
  ) {
    return "Invalid";
  }

  if (omr.right < 0 || omr.wrong < 0 || omr.skip < 0) {
    return "Invalid";
  }

  let rightAnswers = omr.right;
  let wrongAnswers = omr.wrong;
  let skippedAnswers = omr.skip;

  let totalQuestions = rightAnswers + wrongAnswers + skippedAnswers;
  if (totalQuestions !== 100) {
    return "Invalid";
  }

  let positiveMarks = rightAnswers * 1;
  let negativeMarks = wrongAnswers * 0.5;
  let skippedMarks = skippedAnswers * 0;

  let totalScore = positiveMarks - negativeMarks + skippedMarks;

  return Math.round(totalScore);
}

let output1 = finalScore({ right: "110", wrong: -10, skip: 0 });
console.log(output1);
let output2 = finalScore({ right: 80, wrong: 25, skip: 0 });
console.log(output2);
let output3 = finalScore({ right: 50, wrong: 10, skip: 40 });
console.log(output3);
let output4 = finalScore({ right: 30, wrong: 30, skip: 40 });
console.log(output4);
let output5 = finalScore("!@#");
console.log(output5);
let output6 = finalScore(["Raj"]);
console.log(output6);
