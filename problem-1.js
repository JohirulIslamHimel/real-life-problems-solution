/*function signature/sample */
function newPrice(currentPrice, discount) {
  //type check:
  if (typeof currentPrice !== "number" || typeof discount !== "number") {
    return "Invalid";
  }

  //discount check:

  if (discount < 0 || discount > 100) {
    return "Invalid";
  }

  //discount calculation:

  let discountAmount = (currentPrice * discount) / 100;

  //final price:
  let finalPrice = currentPrice - discountAmount;

  return finalPrice.toFixed(3);

  // You have to write your code here
}

let output1 = newPrice(1500, -10);
console.log(output1);
let output2 = newPrice(2000, 15);
console.log(output2);
let output3 = newPrice(1200, 7);
console.log(output3);
let output4 = newPrice("1000", 10);
console.log(output4);
let output5 = newPrice(2000, 17.17);
console.log(output5);
let output6 = newPrice(500, "5");
console.log(output6);
