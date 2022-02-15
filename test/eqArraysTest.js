const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('#eqArrays', () => {
  it('should return true if the arrays are identical', () => {
    const actual = eqArrays([1, 2, 3], [1, 2, 3]);
    const expected = true;
    assert.strictEqual(actual, expected);
  });
  it('should return false if the arrays are NOT identical', () => {
    const actual = eqArrays([1, 2, 3, 4], [1, 2, 3]);
    const expected = false;
    assert.strictEqual(actual, expected);
  });
  it('should return false if the arrays are same size but not identical', () => {
    const actual = eqArrays([1, 2, 3], [1, 2, 4]);
    const expected = false;
    assert.strictEqual(actual, expected);
  });
});

