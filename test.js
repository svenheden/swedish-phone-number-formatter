const test = require('tape');
const format = require('./index');

test('mobile phone numbers', function(assert) {
  assert.equal(format('0707354909'), '070-735 49 09');
  assert.equal(format('070 73 549 09'), '070-735 49 09');
  assert.equal(format('070-7354-909'), '070-735 49 09');
  assert.equal(format('070ad-7b354-90a9'), '070-735 49 09');
  assert.equal(format('+46707354909'), '070-735 49 09');
  assert.equal(format('+45707354909'), '+45707354909');
  assert.equal(format('070735445663909'), '070735445663909');
  assert.end();
});
