"use strict";

function makeExemptionsFilter(exemptions) {
  if (!exemptions) {
    return function() {
      return true;
    };
  }
  return function(key) {
    return !exemptions.includes(key);
  };
}

function isStandardProperty(objectProperty) {
  // will filter out ExperimentalSpreadProperty nodes
  return objectProperty.key && objectProperty.key.name;
}

function extractKey(objectProperty) {
  return objectProperty.key.name;
}

function extractName(exportSpecifier) {
  return exportSpecifier.local.name;
}

module.exports = {
  esLintRuleName: "alphabetize-properties-of-large-objects",
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
              : 5;
    var exemptions = context.options.length && context.options[0].exempt;
    if (exemptions && !Array.isArray(exemptions)) {
      throw new Error("Value of `exempt` option must be an array of strings (key names); saw a: " + typeof exemptions);
    }
    var removeExemptions = makeExemptionsFilter(exemptions);
    function checkExport(node) {
      if (!node.specifiers.length) {
        return;
      }
      var rawExportNames = node.specifiers.map(extractName);
      if (rawExportNames.length < limit) {
        return;
      }
      var exportNames = rawExportNames.filter(removeExemptions);
      function isKeyOutOfOrder(key, index) {
        // TODO control sorting order?
        return index !== 0 && key < exportNames[index-1];
      }
      if (exportNames.find(isKeyOutOfOrder)) {
        context.report({message: "Exports with "+limit+" or more specifiers should have specifiers in alphabetical order. (Saw "+rawExportNames.length+")", node: node});
      }
    }
    function checkObject(node) {
      if (!node.properties.length) {
        return;
      }
      var rawPropertyKeys = node.properties.filter(isStandardProperty).map(extractKey);
      if (rawPropertyKeys.length < limit) {
        return;
      }
      var propertyKeys = rawPropertyKeys.filter(removeExemptions);
      function isKeyOutOfOrder(key, index) {
        // TODO control sorting order?
        return index !== 0 && key < propertyKeys[index-1];
      }
      if (propertyKeys.find(isKeyOutOfOrder)) {
        context.report({message: "Objects with "+limit+" or more properties should have properties in alphabetical order. (Saw "+rawPropertyKeys.length+")", node: node});
      }
    }
    return {
      "ExportNamedDeclaration": checkExport,
      "ObjectExpression": checkObject
    };
  }
};
