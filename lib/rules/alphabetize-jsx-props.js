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

function makeSortChecker(unexemptedPropNames) {
  return function(propName, index) {
    return index !== 0 && propName < unexemptedPropNames[index-1];
  };
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
    var removeExemptions = makeExemptionsFilter(exemptions);
    return {
      "JSXOpeningElement": function(node) {
        if (!node || !node.attributes || !node.attributes.length) {
          return;
        }
        var allPropNames = node.attributes.map(extractAttributeName);
        if (allPropNames.length < limit) {
          // slightly-earlier exit
          return;
        }
        var unexemptedPropNames = allPropNames.filter(removeExemptions);
        var sortCheck = makeSortChecker(unexemptedPropNames);
        if (unexemptedPropNames.some(sortCheck)) {
          context.report({
            node: node,
            message: "JSX elements with "+limit+" or more props should have props in alphabetical order."
          });
        }
      }
    };
  }
};
