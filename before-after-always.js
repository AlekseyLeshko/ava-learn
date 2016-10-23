import test from 'ava';

test.before(t => {
  console.log('before');
});

test.before(t => {
  console.log('before#2');
});

test.after(t => {
  console.log('after');
});

test.after(t => {
  console.log('after#2');
});

test.after.always(t => {
  console.log('after always');
});

test('test#1', t => {
  console.log('test');
  t.fail();
});

test('test#2', t => {
  console.log('test');
  t.pass();
});

