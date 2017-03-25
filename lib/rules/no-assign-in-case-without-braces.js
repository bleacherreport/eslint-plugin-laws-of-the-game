"use strict";

module.exports = {
  esLintRuleName: "no-assign-in-case-without-braces",
  schema: [], // no options
  create: function(context) {
    return {
      "SwitchCase > ExpressionStatement > AssignmentExpression": function(node) {
        context.report({message: "Do not assign variables in `case` blocks without new scope braces.", node: node});
      }
    };
  }
};
