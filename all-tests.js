import test from 'ava';

test('test', t => {
  t.pass();
});

test.skip('test only', t => {
  t.fail();
});

test.todo('todo');

test.cb.skip('cb', t => {
  setTimeout(function() {
    console.log('time');
    t.end();
  }, 3000);
});

test.failing('failing', t => {
  t.fail();
});
