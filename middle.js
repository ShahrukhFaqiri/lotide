const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2) !== true) {
    console.log(`🛑 Assertion Failed: ${arr1} !==  ${arr2}`);
  } else {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  }
};

const middle = (array) => {
  let halved = array.length / 2;
  let result = [];
  if (array.length <= 2) {
    return result;
  }
  if (array.length % 2 !== 0) {
    let index = Math.floor(halved);
    result.push(array[index]);
  } else {
    let index = halved;
    result.push(array[index - 1], array[index]);
  }
  return result;
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1]), []);
