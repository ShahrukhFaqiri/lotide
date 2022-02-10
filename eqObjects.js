const assertEqual = (actual, expected) => {
  if (actual !== expected) {
    console.log(`🛑 Assertion Failed:  ${actual} !==  ${expected}`);
  } else {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

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
     return eqArrays(object1[keys], object2[keys]);
    }
    if (object1[keys] !== object2[keys]) return false;
  }
  return true;
};

// const abc = { a: "1", b: "2", c: "3" };
// const cd = { a: "2", b: "2" };
const ba = { b: "2", a: "2" };
const cd = { c: "1", d: ["2", 4] };
const dc = { d: ["2", 4], c: "1" };
const cd2 = { c: "1", d: ["2"]};
assertEqual(eqObject(cd, dc), true);
