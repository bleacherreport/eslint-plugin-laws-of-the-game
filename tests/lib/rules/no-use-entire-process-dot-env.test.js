"use strict";

var testHelper = require("../../test-helper");
var rule = require("../../../lib/rules/no-use-entire-process-dot-env");

testHelper.tester.run("no-use-entire-process-dot-env", rule, {

  valid: [
    "foo = bar",
    "foo = bar.baz",
    "foo = process.env.bar",
    "foo = process.env[bar]",
    // "foo(process.env.bar)",
    "() => bar",
    "() => process.env[bar]",
    "(foo = process.env[bar]) => foo"
  ],

  invalid: [
    "() => process.env",
    "function env() { return process.env; }",
    "foo = process.env",
    // "foo(process.env)",
    "(foo = process.env) => foo"
  ].map(testHelper.makeInvalidCase({message: /process\.env/}))

});
