"use strict";

function makeInvalidCase(messageMatcher) {
  // Call with the object specifying how to match the ESLint error.
  // Returns a function which can be mapped over an array of:
  // - string, of code which trips the ESLint error
  // - array, where [0] is code, and [1] is the config options array
  // Example is in the alphabetize-properties-of-large-objects test file.
  return function(code) {
    var invalidCase = {
      errors: [messageMatcher]
    };
    if (typeof code === "string") {
      return Object.assign(invalidCase, {code: code});
    }
    return Object.assign(invalidCase, {code: code[0], options: code[1]});
  };
}

var RuleTester = require("eslint").RuleTester;
RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  }
});

module.exports = {
  makeInvalidCase: makeInvalidCase,
  tester: new RuleTester()
};
