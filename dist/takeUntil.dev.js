"use strict";

var takeUntil = function takeUntil(array, callback) {
  var results = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var x = _step.value;

      if (!callback(x)) {
        results.push(x);
      } else {
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return results;
};

var data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
var results1 = takeUntil(data1, function (x) {
  return x < 0;
});
console.log(results1);
console.log('---');
var data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
var results2 = takeUntil(data2, function (x) {
  return x === ',';
});
console.log(results2);