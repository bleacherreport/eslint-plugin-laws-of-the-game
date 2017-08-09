"use strict";

var testHelper = require("../../test-helper");
var rule = require("../../../lib/rules/no-property-access");

testHelper.tester.run("no-property-access", rule, {

  valid: [
    "Promise.all(foo)",
    "Promise.all([foo, bar])",
    "Promise.race([foo, bar])",
    "Promise.all.foo",
    "Promise.all[foo]",
    "Something.else[foo, bar]"
  ],

  invalid: [
    "Intl.getCanonicalLocales[foo, bar]",
    "Promise.all[foo, bar]",
    "Promise.race[foo, bar]"
  ].map(testHelper.makeInvalidCase({message: /access the properties/}))

});
