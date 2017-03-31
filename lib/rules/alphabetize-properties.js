"use strict";

function isStandardProperty(objectProperty) {
  // will filter out ExperimentalSpreadProperty nodes
  return objectProperty.key && objectProperty.key.name;
}

function extractKey(objectProperty) {
  return objectProperty.key.name;
}

module.exports = {
  esLintRuleName: "alphabetize-properties-of-large-objects",
  schema: [
    {
      "type": "object",
      "properties": {
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
              : 5;
    function checkObject(node) {
      if (!node.properties.length) {
        // somewhat-earlier exit...
        return;
      }
      var propertyKeys = node.properties.filter(isStandardProperty).map(extractKey);
      if (propertyKeys.length < limit) {
        return;
      }
      function firstKeyOutOfOrder(key, index) {
        // TODO control sorting order?
        return index !== 0 && key < propertyKeys[index-1];
      }

      if (propertyKeys.find(firstKeyOutOfOrder)) {
        context.report({message: "Objects with "+limit+" or more properties should have properties in alphabetical order. (Saw "+propertyKeys.length+")", node: node});
      }
    }
    return {
      "ObjectExpression": checkObject
    };
  }
};
