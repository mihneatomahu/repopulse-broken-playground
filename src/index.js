// Intentionally messy + spelling mistakes

const { adddNumbers, divdeNumbers, greetUserr } = require("./math");

function main() {
  console.log("Starting app...");

  // obvious typo: greetUserr exists but should be greetUser
  console.log(greetUserr("Mihnea"));

  // adddNumbers exists but should be addNumbers
  console.log("2 + 2 =", adddNumbers(2, 2));

  // divdeNumbers has a bug: division by zero not handled properly
  console.log("10 / 0 =", divdeNumbers(10, 0));
}

main();
