const test = require('tape');
const format = require('./index');

test('mobile phone numbers', assert => {
  assert.equal(format('0707354909'), '070-735 49 09');
  assert.equal(format('070 73 549 09'), '070-735 49 09');
  assert.equal(format('070-7354-909'), '070-735 49 09');
  assert.equal(format('070ad-7b354-90a9'), '070-735 49 09');
  assert.equal(format('+46707354909'), '070-735 49 09');
  assert.equal(format('+45707354909'), '+45707354909');
  assert.equal(format('070735445663909'), '070735445663909');
  assert.end();
});

test('phone numbers with 2 area code digits', assert => {
  assert.equal(format('0812345'), '08-123 45');
  assert.equal(format('08123456'), '08-12 34 56');
  assert.equal(format('081234567'), '08-123 45 67');
  assert.equal(format('0812345678'), '08-123 456 78');
  assert.end();
});

test('phone numbers with 3 area code digits', assert => {
  assert.equal(format('03112345'), '031-123 45');
  assert.equal(format('031123456'), '031-12 34 56');
  assert.equal(format('0311234567'), '031-123 45 67');
  assert.equal(format('03112345678'), '031-123 456 78');
  assert.end();
});

test('phone numbers with 4 area code digits', assert => {
  assert.equal(format('030312345'), '0303-123 45');
  assert.equal(format('0303123456'), '0303-12 34 56');
  assert.equal(format('03031234567'), '0303-123 45 67');
  assert.equal(format('030312345678'), '0303-123 456 78');
  assert.end();
});
