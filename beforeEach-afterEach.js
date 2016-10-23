import test from 'ava';

test.beforeEach(t => {
  console.log('beforeEach');
});

test.beforeEach(t => {
  console.log('beforeEach#2');
});

test.afterEach(t => {
  console.log('afterEach');
});

test.afterEach(t => {
  console.log('afterEach#2');
});

test.afterEach.always(t => {
  console.log('afterEach always');
});

test('test#1', t => {
  console.log('test');
  t.fail();
});

test('test#2', t => {
  console.log('test');
  t.pass();
});


