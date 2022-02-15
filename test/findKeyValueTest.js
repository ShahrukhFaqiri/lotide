const findKeyByValue = require('../findKeyValue');
const assert = require('chai').assert;

describe('#FindKeyByValue', () => {
  const bestTVShowsByGenre = {
    sci_fi: 'The Expanse',
    comedy: 'Brooklyn Nine-Nine',
    drama: 'The Wire',
  };
  it('should return the key based on input value', () => {
    const actual = findKeyByValue(bestTVShowsByGenre, 'The Wire');
    const expected = 'drama';
    assert.strictEqual(actual, expected);
  });
  it('should return undefined if values are empty', () => {
    const actual = findKeyByValue();
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });
});
