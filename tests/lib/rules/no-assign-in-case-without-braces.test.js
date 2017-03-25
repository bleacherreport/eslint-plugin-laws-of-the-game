"use strict";

var testHelper = require("../../test-helper");
var rule = require("../../../lib/rules/no-assign-in-case-without-braces");

testHelper.tester.run("no-assign-in-case-without-braces", rule, {

  valid: [
    "foo = bar;",
    "if (baz) foo = bar;",
    "if (baz) { foo = bar; }",
    "switch (qux) { case baz: { var foo = bar; } }"
  ],

  invalid: [
    "switch (qux) { case baz: foo = bar; }"
  ].map(testHelper.makeInvalidCase({message: /case.+braces/}))

});
