const assertEqual = (actual, expected) => {
  let message = '';
  if (actual !== expected) {
    message = `🛑 Assertion Failed:  ${actual} !==  ${expected}`;
  } else {
    message = `✅ Assertion Passed: ${actual} === ${expected}`;
  }
  return message; //Function was giving undefined.
};

const tail = (array) => {
  let newArray = array.slice(array[0]);
  return newArray;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
console.log(assertEqual(words.length, 3));