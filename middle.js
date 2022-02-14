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

module.exports = middle;