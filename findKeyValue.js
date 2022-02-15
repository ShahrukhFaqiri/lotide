const findKeyByValue = (object, value) => {
  for (let k in object) {
    if (value === object[k]) {
      return k;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

