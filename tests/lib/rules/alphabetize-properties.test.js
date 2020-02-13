"use strict";

var testHelper = require("../../test-helper");
var rule = require("../../../lib/rules/alphabetize-properties");

testHelper.tester.run("alphabetize-properties", rule, {

  valid: [
    "export {}",
    "let a, z; export {z, a}",
    "let a, b, c, d, z; export {a, b, c, d, z}",
    {code: "let a, b, y, z; export {a, z, y, b}", options: [{limit: 3, exempt: ["y", "z"]}]},
    "obj = {}",
    "obj = {z:z, a:a}",
    "obj = {a:a, b:b, c:c, d:d, z:z}",
    "obj = {...foo, z:z, a:a, b:b, c:c}",
    {code: "obj = {a:a, z:z, b:b}",      options: [{limit: 3, exempt: ["z"]}] },
    {code: "obj = {a:a, z:z, y:y, b:b}", options: [{limit: 3, exempt: ["y", "z"]}] }
  ],

  invalid: [
    "let a, b, c, d, z; export {z, a, b, c, d}",
    ["let a, z; export {z, a}", [{"limit": 2}]],
    ["let a, b, z; export {a, z, b}", [{limit: 3, exempt: ["a"]}]],
    ["let a, b, y, z; export {a, z, y, b}", [{limit: 3, exempt: ["a", "z"]}]],
    "obj = {z:z, a:a, b:b, c:c, d:d}",
    "obj = {...foo, z:z, a:a, b:b, c:c, d:d}",
    ["obj = {z:z, a:a}", [{"limit": 2}]],
    ["obj = {a:a, z:z, b:b}", [{limit: 3, exempt: ["a"]}]],
    ["obj = {a:a, z:z, y:y, b:b}", [{limit: 3, exempt: ["a", "z"]}]]
  ].map(testHelper.makeInvalidCase({message: /alphabet/}))

});
