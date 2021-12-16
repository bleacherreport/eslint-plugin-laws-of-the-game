# Disallow the use of arbitrary properties on the `global` object

This rule checks for the use of properties on the `global` object which are unrecognized.

It defaults to allowing the set of properties which are in the core JavaScript language. It can be configured to additionally allow all properties available in browser context, Node context, or both, and allows further customization.


## Rule Details

The following patterns are considered warnings:

```js
/* eslint no-unauthorized-global-properties: "error" */
global.document;
global.setImmediate();
global.foo;
```

```js
/* eslint no-unauthorized-global-properties: ["error", {preset: "browser"}] */
global.setImmediate();
```

```js
/* eslint no-unauthorized-global-properties: ["error", {preset: "node"}] */
global.document;
```

```js
/* eslint no-unauthorized-global-properties: ["error", {preset: "both"}] */
global.foo;
```

```js
/* eslint no-unauthorized-global-properties: ["error", {permitted: ["foo", "bar"]}] */
global.document;
```

The following patterns are not considered warnings:

```js
/* eslint no-unauthorized-global-properties: ["error", {preset: ["browser"]}] */
global.document;
```

```js
/* eslint no-unauthorized-global-properties: ["error", {preset: "both"}] */
global.document;
global.setImmediate();
```

```js
/* eslint no-unauthorized-global-properties: ["error", {permitted: ["foo", "bar"], preset: "both"}] */
global.document;
global.setImmediate();
global.bar;
global.foo;
```


[mdn-window]: https://developer.mozilla.org/en-US/docs/Web/API/Window
