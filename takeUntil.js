const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2) !== true) {
    console.log(`🛑 Assertion Failed:  ${arr1} !==  ${arr2}`);
  } else {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  }
}

const takeUntil = (array, callback) => {
  const results = [];
  for (let x of array) {
    if (!callback(x)) {
      results.push(x);
    } else {
      break;
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const results1 = takeUntil(data1, x => x < 0);
const results2 = takeUntil(data2, x => x === ',');

// console.log(results1);
// console.log('---');
// console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2,]) //Pass
assertArraysEqual(results2, [1, 2, 5, 7, 2,]) //Fail
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]) //Pass