"use strict";

module.exports = {
  esLintRuleName: "no-use-entire-process-dot-env",
  schema: [], // no options
  create: function(context) {
    function noUseProcessDotEnv(node) {
      context.report({message: "Do not use the entire `process.env` object.", node: node});
    }
    return {
      // "[object.name='process'][property.name='env']": noUseProcessDotEnv
      "ArrowFunctionExpression[body.object.name='process'][body.property.name='env']": noUseProcessDotEnv,
      "AssignmentPattern[right.object.name='process'][right.property.name='env']": noUseProcessDotEnv,
      "AssignmentExpression[right.object.name='process'][right.property.name='env']": noUseProcessDotEnv,
      "ReturnStatement[argument.object.name='process'][argument.property.name='env']": noUseProcessDotEnv
    };
  }
};
