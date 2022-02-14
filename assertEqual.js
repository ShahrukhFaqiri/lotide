const assertEqual = (actual, expected) => {
  let message = '';
  if (actual !== expected) {
    message = `🛑 Assertion Failed:  ${actual} !==  ${expected}`;
    return message;
  } else {
    message = `✅ Assertion Passed: ${actual} === ${expected}`;
    return message;
  }
};

module.exports = assertEqual;
