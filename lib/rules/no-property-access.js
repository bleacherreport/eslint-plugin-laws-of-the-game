"use strict";

module.exports = {
  esLintRuleName: "no-property-access",
  schema: [], // no options
  create: function(context) {
    return {
      "MemberExpression[object.type=MemberExpression][property.type=SequenceExpression]": function(node) {
        context.report({message: "Do not access the properties of things which should be called as functions.", node: node});
      }
    };
  }
};
