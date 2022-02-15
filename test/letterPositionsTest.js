const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe('#LetterPositions', () => {
  it('should return object with letter position excluding space', () => {
    const actual = letterPositions('te tst');
    const expected = { t: [0, 3, 5], e: [1], s: [4] };
    assert.deepEqual(actual, expected);
  });
});
