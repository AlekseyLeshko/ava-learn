import { describe } from 'ava-spec';
import sum from '../src/sum';

describe('sum', it => {
  it('should return 10', t => {
    const expected = 10;
    const actual = sum(3, 7);

    t.is(actual, expected);
  });
});
