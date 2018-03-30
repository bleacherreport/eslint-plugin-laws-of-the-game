"use strict";

var testHelper = require("../../test-helper");
var rule = require("../../../lib/rules/alphabetize-jsx-props");

// need to do something here to let it parse JSX
testHelper.tester.run("alphabetize-jsx-props", rule, {

  valid: [
    "<span baz='qux' foo='bar' quux={() => true} />",
    {code: "<span foo='bar' baz='qux' quux={() => true} />", options: [{limit: 4}]},
    {code: "<span foo='bar' baz='qux' quux={() => true} />", options: [{exempt: "baz"}] }
  ],

  invalid: [
    "<span foo='bar' baz='qux' quux={() => true} />",
    ["<span foo='bar' baz='qux' />", [{limit: 2}]]
  ].map(testHelper.makeInvalidCase({message: /alphabetize JSX/}))

});
