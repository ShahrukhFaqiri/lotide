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

const without = (arrayWord, filtered) => {
  let newArray = [];
  for(let i = 0; i < arrayWord.length; i++){
    if(arrayWord[i] !== filtered[i]){
      newArray.push(arrayWord[i])
    }
  }
 return newArray;
}
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without functionv
assertArraysEqual(words, ["hello", "world", "lighthouse"]);