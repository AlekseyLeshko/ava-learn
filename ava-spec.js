import {describe} from 'ava-spec';

describe('module#1', it => {
  it('can look almost like jasmine', t => {
    t.deepEqual([1, 2], [1, 2]);
  });

  it.todo('todo');

  it.skip('fail', t => {
    t.fail();
  });
});
