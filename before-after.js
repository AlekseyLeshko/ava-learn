import test from 'ava';
import fs from 'fs';

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

test('test#1', t => {
  console.log('test');
  t.pass();
});

test('test#2', t => {
  console.log('test');
  t.pass();
});
