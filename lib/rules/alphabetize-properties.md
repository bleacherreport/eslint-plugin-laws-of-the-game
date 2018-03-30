# Require an object with more than a given number of properties to keep the properties in alphabetical order.

When objects have many properties, it can become tedious to look through property names when they are not organized. The alphabet is a pretty good organization strategy in the absence of a noteworthy scheme.

The specific limit of "how many properties is too many" is configurable. It defaults to 5.

Individual properties can also be named as being exempt from the alphabetization rule. This is to address a situation where a specific key should always occur first or last in an object, while keeping the remaining properties alphabetized.


## Rule Details

The following patterns are considered warnings:

```js
/* eslint alphabetize-properties */
obj = {z:z, a:a, b:b, c:c, d:d}
```

```js
/* eslint alphabetize-properties: [2, {limit: 2}] */
obj = {z:z, a:a}
```

The following patterns are not considered warnings:

```js
/* eslint alphabetize-properties */
obj = {}
obj = {z:z, a:a}
obj = {a:a, b:b, c:c, d:d, z:z}
```

```js
/* eslint alphabetize-properties: [2, {except: ["mixins"]}] */
obj = {}
obj = {z:z, a:a}
obj = {a:a, b:b, c:c, d:d, z:z, mixins: [foo]}
```


## Related Rules

* [alphabetize-jsx-props] is similar but for JSX props


[alphabetize-jsx-props]: ./alphabetize-jsx-props.md
