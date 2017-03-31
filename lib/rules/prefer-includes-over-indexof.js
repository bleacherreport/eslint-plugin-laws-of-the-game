"use strict";

module.exports = {
  esLintRuleName: "prefer-includes-over-indexof",
  create: function(context) {
    function checkBinaryExpression(node) {
      var rhs = node.right;
      var message;
      if (rhs.raw && rhs.raw === "0") {
        if (node.operator === ">=") {
          message = "Use (Array.includes(element)) rather than (Array.indexOf(element) >= 0).";
        }
      } else if (rhs.operator === "-" && rhs.argument.raw === "1") {
        if (node.operator === ">" || node.operator[0] === "!") {
          message = "Use (Array.includes(element) rather than (Array.indexOf(element) " + node.operator + " -1).";
        } else {
          message = "Use (!Array.includes(element) rather than (Array.indexOf(element) " + node.operator + " -1).";
        }
      }
      if (message) {
        context.report({message: message, node: node});
      }
    }
    return {
      "BinaryExpression[left.callee.property.name='indexOf'][operator='>='][right.value=0]": checkBinaryExpression,
      "BinaryExpression[left.callee.property.name='indexOf'][right.operator='-'][right.argument.value=1]": checkBinaryExpression
    };
  }
};
