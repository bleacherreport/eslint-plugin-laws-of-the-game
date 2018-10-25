"use strict";

var testHelper = require("../../test-helper");
var rule = require("../../../lib/rules/alphabetize-properties");

testHelper.tester.run("alphabetize-properties", rule, {

  valid: [
    "export {}",
    "export {z, a}",
    "export {a, b, c, d, z}",
    {code: "export {a, z, y, b}", options: [{limit: 3, exempt: ["y", "z"]}]},
    "obj = {}",
    "obj = {z:z, a:a}",
    "obj = {a:a, b:b, c:c, d:d, z:z}",
    "obj = {...foo, z:z, a:a, b:b, c:c}",
    {code: "obj = {a:a, z:z, b:b}",      options: [{limit: 3, exempt: ["z"]}] },
    {code: "obj = {a:a, z:z, y:y, b:b}", options: [{limit: 3, exempt: ["y", "z"]}] }
  ],

  invalid: [
    "export {z, a, b, c, d}",
    ["export {z, a}", [{"limit": 2}]],
    ["export {a, z, b}", [{limit: 3, exempt: ["a"]}]],
    ["export {a, z, y, b}", [{limit: 3, exempt: ["a", "z"]}]],
    "obj = {z:z, a:a, b:b, c:c, d:d}",
    "obj = {...foo, z:z, a:a, b:b, c:c, d:d}",
    ["obj = {z:z, a:a}", [{"limit": 2}]],
    ["obj = {a:a, z:z, b:b}", [{limit: 3, exempt: ["a"]}]],
    ["obj = {a:a, z:z, y:y, b:b}", [{limit: 3, exempt: ["a", "z"]}]]
  ].map(testHelper.makeInvalidCase({message: /alphabet/}))

});
