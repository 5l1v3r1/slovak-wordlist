'use strict';

var assert = require('assert');
var slovakWordlist = require('./');

it('Should return word list', function (cb) {
  slovakWordlist({start: 0, end: 500}).on('data', function (data) {
    data = data.toString().split('\n');
    assert.equal(data[0], 'a 824912');
    assert.equal(data[1], 'v 790766');
    assert.equal(data[2], 'je 639788');
    cb();
  });
});

