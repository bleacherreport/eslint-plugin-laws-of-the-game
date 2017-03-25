# Disallow `process.env` as a value

When using the [inline-environment-variables-webpack-plugin], it's not safe to use the entire `process.env` as a value, because the plugin only looks for and replaces uses of the *properties* within it.

This rule warns on uses of the entire `process.env`.

(This rule is different from the [no-process-env] rule, which discourages any use of `process.env` at all. This rule intends to encourage usses of specific properties within `process.env`.)


## Rule Details

The following patterns are considered warnings:

```js
/* eslint no-use-entire-process-dot-env */

env = process.env
```

The following patterns are not considered warnings:

```js
/* eslint no-use-entire-process-dot-env */

FOO = process.env.FOO
```



[inline-environment-variables-webpack-plugin]: https://github.com/tikotzky/inline-environment-variables-webpack-plugin
[no-process-env]: http://eslint.org/docs/rules/no-process-env
