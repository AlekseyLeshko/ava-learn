import test from 'ava';

test('test', t => {
  t.pass();
  t.skip.fail();
  t.truthy(true);
  t.truthy('unicorn');
  t.falsy(false);
  t.falsy(1 === 0);
  t.true(true);
  t.false(false);
  t.is(1, 1);
  t.not(1, 0);
  t.deepEqual([0, 1, 2], [0, 1, 2]);
  t.notDeepEqual([0, 2, 2], [0, 1, 2]);
});

test(t => {
  const a = /foo/;
  const b = 'bar';
  const c = 'baz';
  t.true(a.test(b) || b === c);
});
