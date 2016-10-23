import test from 'ava';
import fs from 'fs';

const path = 'serial-test-two.txt';
test.cb.serial('serial 1', t => {
  fs.writeFile(path, 'test', function(err) {
    if (err) {
      t.fail();
    } else {
      t.pass();
    }
    t.end();
  }); 
});

test.cb.serial('serial 2', t => {
  fs.access(path, fs.F_OK, function(err) {
    if (err) {
      t.fail();
    } else {
      t.pass();
    }
    t.end();
  });
});


