const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe('#CountOnly', () => {
  const firstNames = [
    'Karl',
    'Salima',
    'Agouhanna',
    'Fang',
    'Kavith',
    'Jason',
    'Salima',
    'Fang',
    'Joe',
  ];
  const itemsToCount = {
    Jason: true,
    Karima: true,
    Fang: true,
    Agouhanna: false,
  };
  it(`should return the count of passed name`, () => {
    const actual = countOnly(firstNames, itemsToCount);
    const expected = 1;
    assert.strictEqual(actual["Jason"], expected)
  });
  it(`should return undefined if name doesn't exist`, () => {
    const actual = countOnly(firstNames, itemsToCount);
    const expected = 1;
    assert.strictEqual(actual["Jasson"], undefined)
  });
});
