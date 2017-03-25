"use strict";

module.exports = {
  esLintRuleName: "prefer-includes-over-indexof",
  create: function(context) {
    function checkBinaryExpression(node) {
      var bangOrNot = node.operator[0] === "!"
                    ? ""
                    : "!";
      context.report({message: "Use `"+bangOrNot+"Array.includes(element)` rather than `Array.indexOf(element) "+node.operator+" -1`.", node: node});
    }

    return {
      "BinaryExpression[left.callee.property.name='indexOf'][operator='>='][right.value=0]": checkBinaryExpression,
      "BinaryExpression[left.callee.property.name='indexOf'][right.operator='-'][right.argument.value=1]": checkBinaryExpression
    };
  }
};
