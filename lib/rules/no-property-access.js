"use strict";

module.exports = {
  esLintRuleName: "no-property-access",
  schema: [], // no options
  create: function(context) {
    return {
      "MemberExpression[object.type=MemberExpression][property.type=SequenceExpression]": function(node) {
        switch (true) {
          case (node.object.object.name === "Intl"    && node.object.property.name === "getCanonicalLocales"):
          case (node.object.object.name === "Promise" && node.object.property.name === "all"):
          case (node.object.object.name === "Promise" && node.object.property.name === "race"):
            context.report({message: "Do not access the properties of things which should be called as functions.", node: node});
        }
      }
    };
  }
};
