"use strict";

var standardGlobalProperties = [
  "Array",
  "ArrayBuffer",
  "Boolean",
  "DataView",
  "Date",
  "Error",
  "EvalError",
  "Float32Array",
  "Float64Array",
  "Function",
  "Generator",
  "GeneratorFunction",
  "Infinity",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "InternalError",
  "Intl",
  "JSON",
  "Map",
  "Math",
  "NaN",
  "Number",
  "Object",
  "Promise",
  "Proxy",
  "RangeError",
  "ReferenceError",
  "Reflect",
  "RegExp",
  "Set",
  "String",
  "Symbol",
  "SyntaxError",
  "TypeError",
  "URIError",
  "Uint16Array",
  "Uint32Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "WeakMap",
  "WeakSet",
  "WebAssembly",
  "clearInterval",
  "clearTimeout",
  "console",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "eval",
  "isFinite",
  "isNaN",
  "null",
  "parseFloat",
  "parseInt",
  "setInterval",
  "setTimeout",
  "undefined",
  "unescape"
];

var nodeGlobalProperties = [
  "__dirname",
  "__filename",
  "clearImmediate",
  "exports",
  "global",
  "module",
  "process",
  "require",
  "setImmediate"
];

var browserGlobalProperties = [
  "Methods",
  "URL",
  "addEventListener",
  "alert",
  "applicationCache",
  "atob",
  "blur",
  "btoa",
  "cancelIdleCallback",
  "close",
  "closed",
  "confirm",
  "controllers",
  "convertPointFromNodeToPage",
  "createImageBitmap",
  "crypto",
  "devicePixelRatio",
  "document",
  "event",
  "fetch",
  "focus",
  "forward",
  "frameElement",
  "frames",
  "fullScreen",
  "getAttention",
  "getComputedStyle",
  "getDefaultComputedStyle",
  "getSelection",
  "history",
  "home",
  "indexedDB",
  "innerHeight",
  "innerWidth",
  "isSecureContext",
  "isSecureContext",
  "length",
  "localStorage",
  "location",
  "locationbar",
  "matchMedia",
  "menubar",
  "messageManager",
  "minimize",
  "moveBy",
  "moveTo",
  "mozAnimationStartTime",
  "mozInnerScreenX",
  "mozInnerScreenY",
  "mozPaintCount",
  "name",
  "navigator",
  "onabort",
  "onafterprint",
  "onanimationcancel",
  "onanimationend",
  "onappinstalled",
  "onbeforeinstallprompt",
  "onbeforeprint",
  "onbeforeunload",
  "onblur",
  "onchange",
  "onclick",
  "onclose",
  "oncontextmenu",
  "ondblclick",
  "ondevicemotion",
  "ondeviceorientation",
  "ondeviceorientationabsolute",
  "onerror",
  "onfocus",
  "ongotpointercapture",
  "onhashchange",
  "oninput",
  "onkeydown",
  "onkeypress",
  "onkeyup",
  "onload",
  "onloadend",
  "onloadstart",
  "onlostpointercapture",
  "onmousedown",
  "onmousemove",
  "onmouseout",
  "onmouseover",
  "onmouseup",
  "onmozbeforepaint",
  "onpointercancel",
  "onpointerdown",
  "onpointerenter",
  "onpointerleave",
  "onpointermove",
  "onpointerout",
  "onpointerover",
  "onpointerup",
  "onpopstate",
  "onrejectionhandled",
  "onreset",
  "onresize",
  "onscroll",
  "onselect",
  "onstorage",
  "onsubmit",
  "ontransitioncancel",
  "ontransitionend",
  "onunhandledrejection",
  "onunload",
  "open",
  "opener",
  "origin",
  "outerHeight",
  "outerWidth",
  "parent",
  "performance",
  "personalbar",
  "postMessage",
  "print",
  "prompt",
  "removeEventListener",
  "requestAnimationFrame",
  "requestIdleCallback",
  "resizeBy",
  "resizeTo",
  "restore",
  "screen",
  "screenX",
  "screenY",
  "scroll",
  "scrollBy",
  "scrollByPages",
  "scrollTo",
  "scrollX",
  "scrollY",
  "scrollbars",
  "self",
  "sessionStorage",
  "sizeToContent",
  "status",
  "statusbar",
  "stop",
  "toolbar",
  "top",
  "updateCommands",
  "window"
];

function determinePropertiesToAllow(options) {
  if (!options.length) {
    return standardGlobalProperties;
  }
  const {permitted, preset} = options[0];
  const customPropertyList = permitted && permitted.length
    ? permitted
    : [];
  const basePropertyList = standardGlobalProperties.concat(customPropertyList);
  switch (preset) {
  case "node":
    return basePropertyList.concat(nodeGlobalProperties);
  case "browser":
    return basePropertyList.concat(browserGlobalProperties);
  case "both":
    return basePropertyList.concat(nodeGlobalProperties).concat(browserGlobalProperties);
  default:
    return basePropertyList;
  }
}

module.exports = {
  esLintRuleName: "no-unauthorized-global-properties",
  schema: [
    {
      "type": "object",
      "properties": {
        "permitted": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "uniqueItems": true
        }
      }
    }
  ],
  create: function(context) {
    var allowedProperties = determinePropertiesToAllow(context.options);
    function checkMemberExpression(node) {
      if (!allowedProperties.includes(node.property.name)) {
        context.report({message: "Not permitted to access the "+node.property.name+" property of the `global` object.", node: node});
      }
    }
    return {
      "MemberExpression[object.name='global']": checkMemberExpression
    };
  }
};
