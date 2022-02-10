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
};

const letterPositions = function (sentence) {
  let result = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (result[sentence[i]] === undefined) {
        result[sentence[i]] = [i];
      }
      else {
        result[sentence[i]].push(i);
      }
    }
  }
  return result;
};

console.log(letterPositions("te tst"));
assertArraysEqual(letterPositions("te tst"),{ t: [ 0, 3, 5 ], e: [ 1 ], s: [ 4 ] });










// for (let i = 0; i < sentence.length; i++) {
//   if (sentence[i] !== ' ') {
//     if (result[sentence[i]] === undefined) {
//       result[sentence[i]] = [i];
//     }
//     else {
//       result[sentence[i]].push(i);
//     }
//   }
// }
// return result;