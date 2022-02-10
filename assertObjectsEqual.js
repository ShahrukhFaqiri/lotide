const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const eqObject = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (const keys in object1) {
    if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
      if (!eqArrays(object1[keys], object2[keys])) {
        return false;
      }
    } else if (object1[keys] !== object2[keys]) return false;
  }
  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect
  if (eqObject(actual, expected) !== true) {
    console.log(`🛑 Assertion Failed:  ${inspect(actual)} !==  ${inspect(expected)}`);
  } else {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

assertObjectsEqual({ c: "2" , d: ["2", 4]}, { d: ["2", 4], c: "2" });
