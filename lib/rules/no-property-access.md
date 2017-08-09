# Disallow accessing properties of objects which should probably be called as functions

...explanation...


## Rule Details

The following patterns are considered warnings:

```js
/* eslint no-property-access */

Promise.all[foo, bar];

Promise.race[foo, bar];
```

The following patterns are not considered warnings:

```js
/* eslint no-assign-in-case-without-braces */

Promise.all([foo, bar]);

Promise.race([foo, bar]);

foo[bar];
```
