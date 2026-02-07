/*function signature/sample */
function validOtp(otp) {
  // You have to write your code here

  //input type checker:
  if (typeof otp !== "string") {
    return "Invalid";
  }

  //length check:
  let otpLength = otp.length;
  if (otpLength !== 8) {
    return false;
  }

  //space check:
  if (otp.includes(" ")) {
    return false;
  }

  //must start with  "ph-":

  if (!otp.startsWith("ph-")) {
    return false;
  }
  let number = otp.slice(3);

  if (isNaN(number)) {
    return false;
  }

  return true;
}
let output1 = validOtp("ph-12345");
console.log(output1);
let output2 = validOtp("ph-1234");
console.log(output2);
let output3 = validOtp("abc-12345");
console.log(output3);
let output4 = validOtp(["ph-10985"]);
console.log(output4);
let output5 = validOtp(12345678);
console.log(output5);
