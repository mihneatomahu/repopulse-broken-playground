// Intentionally wrong naming + bugs

function adddNumbers(a, b) {
  // obvious: should be addNumbers
  return a + b;
}

function divdeNumbers(a, b) {
  // obvious bug: division by 0 should throw, but returns Infinity
  return a / b;
}

function greetUserr(name) {
  // obvious: spelling, and also returns weird grammar
  return `Helo ${name}, welcomme to RepoPulse testing!`;
}

module.exports = { adddNumbers, divdeNumbers, greetUserr };
