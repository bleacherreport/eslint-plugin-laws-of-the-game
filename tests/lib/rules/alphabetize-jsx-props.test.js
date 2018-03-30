"use strict";

var testHelper = require("../../test-helper");
var RuleTester = testHelper.RuleTester;
var rule = require("../../../lib/rules/alphabetize-jsx-props");


new RuleTester({
  plugins: [ "react" ],
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true
    }
  }
}).run("alphabetize-jsx-props", rule, {

  valid: [
    'var React; <span baz="qux" foo="bar" quux={() => true}>foo</span>',
    {code: "var React; <span foo='bar' baz='qux' quux={() => true} />", options: [{limit: 4}]},
    {code: "var React; <span foo='bar' baz='qux' quux={() => true} />", options: [{exempt: ["baz"]}] }
  ],

  invalid: [
    ["var React; <span foo='bar' baz='qux' quux={() => true} />", [{limit: 2}]],
    ["var React; <span foo='bar' baz='qux' />", [{limit: 2}]]
  ].map(testHelper.makeInvalidCase({message: /JSX.+props.+alphabet/}))

});
