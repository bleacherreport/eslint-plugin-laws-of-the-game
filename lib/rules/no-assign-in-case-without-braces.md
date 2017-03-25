# Disallow assigning a variable in a `case` statement, unless the `case` body is wrapped in braces creating new scope

`switch` statements can be tricky, especially when their `case` clauses modify variables outside of the `switch`.

This rule discourages the use of `switch`es to assign variables.


## Rule Details

The following patterns are considered warnings:

```js
/* eslint no-assign-in-case-without-braces */
var foo;
switch (qux) {
  case baz:
    foo = bar;
}
```

The following patterns are not considered warnings:

```js
/* eslint no-assign-in-case-without-braces */
switch (qux) {
  case baz: {
    var foo = bar;
  }
}

function determine(q) {
  switch (q) {
    case baz:
      return bar;
  }
}
var foo = determine(qux)
```
