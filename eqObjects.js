const eqArrays = require('./eqArrays');

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

module.exports = eqObject;
