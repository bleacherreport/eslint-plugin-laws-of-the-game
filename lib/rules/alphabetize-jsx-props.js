"use strict";

function returnTrue() {
  return true;
}

function makeExemptionsFilter(exemptions) {
  if (!exemptions) {
    return returnTrue;
  }
  return function(key) {
    return !exemptions.includes(key);
  };
}

function extractAttributeName(attribute) {
  return attribute.name.name;
}

module.exports = {
  esLintRuleName: "alphabetize-jsx-props",
  schema: [
    {
      "type": "object",
      "properties": {
        "exempt": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "uniqueItems": true
        },
        "limit": {
          "type": "integer"
        }
      },
      "additionalProperties": false
    }
  ],
  create: function(context) {
    var limit = context.options.length && context.options[0].limit
              ? Number(context.options[0].limit)
              : 3;
    var exemptions = context.options.length && context.options[0].exempt;
    if (exemptions && !Array.isArray(exemptions)) {
      throw new Error("Value of `exempt` option must be an array of strings (key names); saw a: " + typeof exemptions);
    }
    var removeExemptions = makeExemptionsFilter(exemptions);
    return {
      "JSXOpeningElement": function(node) {
        if (!node || !node.attributes || !node.attributes.length) {
          return;
        }
        var allPropNames = node.attributes.map(extractAttributeName);
        if (allPropertyKeys.length < limit) {
          // slightly-earlier exit
          return;
        }
        var unexemptedPropNames = allPropNames.filter(removeExemptions);
        if (unexemptedPropNames.some(function(propName, index) { return index !== 0 && key < unexemptedPropNames[index-1]; })) {
          context.report({message: "something with alphabetize JSX in it"});
        }
      }
    };
  }
};
