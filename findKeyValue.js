const assertEqual = (actual, expected) => {

  if (actual !== expected) {
    console.log(`🛑 Assertion Failed:  ${actual} !==  ${expected}`);
  } else {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }

};

const findKeyByValue = (object, value) => {
  for(let k in object) {
    if (value === object[k]) {
      return k
    }
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);