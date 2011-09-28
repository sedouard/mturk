var uri    = require('../../lib/uri')
  , assert = require('assert');

exports.testSimple = function() {
  assert.equal(
    'http://mechanicalturk.amazonaws.com/?ParamC=ValueC%2B1&ParamD=ValueD%20&ParamE=ValueE&Service=ServiceA&Operation=OperationB&Version=2006-05-05',
    uri('ServiceA', 'OperationB', {'ParamC': 'ValueC+1', 'ParamD': 'ValueD ', 'ParamE': 'ValueE'})
  );
};

exports.testObjects = function() {
  assert.equal(
    'http://mechanicalturk.amazonaws.com/?ParamC=ValueC%2B1&ParamD=ValueD%20&ParamE.1.A=1&ParamE.1.B.C=3,ParamE.1.B.D=4&Service=ServiceA&Operation=OperationB&Version=2006-05-05',
    uri('ServiceA', 'OperationB', {'ParamC': 'ValueC+1', 'ParamD': 'ValueD ', 'ParamE': {a: 1, b: {c: 3, d: 4}}})
  );
};