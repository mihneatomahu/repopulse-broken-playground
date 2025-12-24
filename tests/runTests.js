// Intentionally failing tests
const { adddNumbers, divdeNumbers, greetUserr } = require("../src/math");

function assertEqual(actual, expected, msg) {
  if (actual !== expected) {
    console.error("FAIL:", msg);
    console.error("  expected:", expected);
    console.error("  actual:  ", actual);
    process.exitCode = 1;
  } else {
    console.log("PASS:", msg);
  }
}

// This one passes
assertEqual(adddNumbers(2, 2), 4, "adds numbers");

// Intentionally wrong expected value (will fail)
assertEqual(adddNumbers(2, 2), 5, "adds numbers (broken on purpose)");

// This should ideally throw, but doesn't (will fail if you expect a throw)
const div = divdeNumbers(10, 0);
assertEqual(div, 0, "division by zero should be 0 (wrong on purpose)");

// spelling/grammar mismatch (will fail)
assertEqual(greetUserr("Mihnea"), "Hello Mihnea, welcome to RepoPulse testing!", "greeting message should be correct");

if (process.exitCode) {
  console.error("\nTests finished with failures (as intended).");
  process.exit(1);
} else {
  console.log("\nAll tests passed (unexpected).");
}
