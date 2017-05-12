"use strict";

var testHelper = require("../../test-helper");
var rule = require("../../../lib/rules/no-unauthorized-global-properties");

testHelper.tester.run("no-unauthorized-global-properties", rule, {

  valid: [
    "global.console()",
    "global.Object",
    {code: "global.console.log()", options: [{preset: "browser"}]},
    {code: "global.document", options: [{preset: "browser"}]},
    {code: "global.addEventListener()", options: [{preset: "browser"}]},
    {code: "global.setImmediate()", options: [{preset: "node"}]},
    {code: "global.document || global.setImmediate()", options: [{preset: "both"}]},
    {code: "global.foo", options: [{permitted: ["foo"]}]}
  ],

  invalid: [
    "global.setImmediate()",
    "global.foo",
    ["global.setImmediate()", [{preset: "browser"}]],
    ["global.document", [{preset: "node"}]],
    ["global.addEventListener()", [{preset: "node"}]],
    ["global.foo", [{preset: "browser"}]],
    ["global.foo", [{preset: "both"}]],
    ["global.foo", [{permitted: ["bar"]}]]
  ].map(testHelper.makeInvalidCase({message: /property/}))

});
