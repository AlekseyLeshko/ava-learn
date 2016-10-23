import test from 'ava';
import sum from '../src/sum-es6';

test('should return 10', t => {
  const expected = 10;
  const actual = sum(3, 7);

  t.is(actual, expected);
});

