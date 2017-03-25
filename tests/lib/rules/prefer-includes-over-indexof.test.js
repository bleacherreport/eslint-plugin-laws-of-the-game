"use strict";

var testHelper = require("../../test-helper");
var rule = require("../../../lib/rules/prefer-includes-over-indexof");

testHelper.tester.run("prefer-includes-over-indexof", rule, {

  valid: [
    "foo.indexOf(bar)",
    "foo.includes(bar)",
    "!foo.includes(bar)",
    "[foo].includes(bar)",
    "foo.indexOf(bar) === 1"
  ],

  invalid: [
    "foo.indexOf(bar) >= 0",
    "foo.indexOf(bar) > -1",
    "foo.indexOf(bar) === -1",
    "foo.indexOf(bar) !== -1",
    "[foo].indexOf(bar) === -1",
    "[foo].indexOf(bar) !== -1"
  ].map(testHelper.makeInvalidCase({message: /\.includes\(/}))

});
