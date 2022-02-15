const eqObject = require('../eqObjects');
const assert = require('chai').assert;

describe('#eqObjects', () => {
  const ab = { a: "1", b: "2", c: "3" };
  const cd = { a: "2", b: "2" };
  const ef = { d: ['2', 4], c: '2' };
  const gh = { d: ['2', 4], c: '2' };
  const ij = { d: ["2", 4], c: "1" };
  const kl = { d: ["2", 4], c: "2" }
  it('should return true if both objects ARE equal', () => {
    const actual = eqObject(ef, gh);
    const expected = true;
    assert.deepEqual(actual, expected)
  });
  it('should return false if both objects are NOT equal', () => {
    const actual = eqObject(ab, cd);
    const expected = false;
    assert.deepEqual(actual, expected)
  });
});
