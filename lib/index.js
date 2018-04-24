/**
 * @fileoverview Disincentivizes some coding practices.
 * @author Bleacher Report
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports = {
  rules: requireIndex(__dirname + "/rules"),
  configs: {
    recommended: {
      rules: {
        "@br/laws-of-the-game/alphabetize-properties": "error",
        "@br/laws-of-the-game/no-assign-in-case-without-braces": "error",
        "@br/laws-of-the-game/no-unauthorized-global-properties": "error",
        "@br/laws-of-the-game/no-use-entire-process-dot-env": "error",
        "@br/laws-of-the-game/prefer-includes-over-indexof": "error"
      }
    }
  }
};
