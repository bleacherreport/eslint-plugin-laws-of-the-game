# Prefer `Array.includes()` over `Array.indexOf()`

When verifying the absence or presence of an element in an array, prefer using `array.includes(element)` rather than `array.indexOf(element) !== -1`.

This rule warns on detecting a comparison of the result of `indexOf()` to `-1`.


## Rule Details

The following patterns are considered warnings:

```js
/* eslint prefer-includes-over-indexof */

if (foo.indexOf(bar) === -1)
  baz();

if (foo.indexOf(bar) > -1)
  qux();
```

The following patterns are not considered warnings:

```js
/* eslint prefer-includes-over-indexof */

if (!foo.includes(bar))
  baz();

if (foo.includes(bar))
  qux();

tPosition = "string".indexOf("t")
```
