"use strict";

var testHelper = require("../../test-helper");
var rule = require("../../../lib/rules/alphabetize-properties");

testHelper.tester.run("alphabetize-properties", rule, {

  valid: [
    "obj = {}",
    "obj = {z:z, a:a}",
    "obj = {a:a, b:b, c:c, d:d, z:z}"
    // TODO support object spreads
    /* "obj = {...foo, z:z, a:a, b:b, c:c}"*/
  ],

  invalid: [
    "obj = {z:z, a:a, b:b, c:c, d:d}",
    ["obj = {z:z, a:a}", [{limit: 2}]]
  ].map(testHelper.makeInvalidCase({message: /alphabet/}))

});
