const middle = require('../middle');
const assert = require('chai').assert;

describe('#MIDDLE', () => {
  it(`should return the two middle indexes of the array`, () => {
    const actual = middle([1, 2, 3, 4]);
    const expected = [2, 3];
    assert.deepEqual(actual, expected);
  });
  it(`should return empty array if array has 2 or less elements`, () => {
    const actual = middle([1]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });
});
