function analyzeText(str) {
  // You have to write your code here

  //input checking:
  if (typeof str !== "string" || str.trim() === "" || str.length === 0) {
    return "Invalid";
  }
  //without space counting:
  let strWithoutSpace = str.split(" ").join("");
  let totalCharacter = strWithoutSpace.length;

  //word splitting:
  let allWords = str.split(" ");
  let biggestWord = "";

  for (let word of allWords) {
    if (word.length > biggestWord.length) {
      biggestWord = word;
    }
  }

  return {
    longwords: biggestWord,
    token: totalCharacter,
  };
}

let output1 = analyzeText("I am a little honest person");
console.log(output1);
let output2 = analyzeText("Hello world");
console.log(output2);
let output3 = analyzeText("Keep coding keep shining");
console.log(output3);
let output4 = analyzeText(12345);
console.log(output4);
let output5 = analyzeText("Programming is fun");
console.log(output5);
let output6 = analyzeText("A quick brown fox");
console.log(output6);
let output7 = analyzeText(" ");
console.log(output7);
