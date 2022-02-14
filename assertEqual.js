const assertEqual = (actual, expected) => {

  if (actual !== expected) {
    return console.log(`🛑 Assertion Failed:  ${actual} !==  ${expected}`);
  } else {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
   }

};

module.exports = assertEqual;

