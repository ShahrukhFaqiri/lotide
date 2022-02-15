const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

describe('#TAIL', () => {
  it(`should return length of words with new array`, () => {
    const words = ['Yo Yo', 'Lighthouse', 'Labs'];
    const actual = tail(words).length;
    const expected = 2;
    assert.strictEqual(actual, expected);
  });
  it(`should return length of original array unaltered`, () => {
    const words = ['Yo Yo', 'Lighthouse', 'Labs'];
    tail(words);
    const actual = words.length;
    const expected = 3;
    assert.strictEqual(actual, expected);
  });
});
