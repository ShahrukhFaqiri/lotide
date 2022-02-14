const tail = (array) => {
  let newArray = array.slice(array[0]);
  return newArray;
};

module.exports = tail;
