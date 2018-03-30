# Require a JSX element with more than a given number of props to keep the props in alphabetical order.

When JSX elements have many props, it can be frustrating to find specific ones or know where to put new ones. The alphabet is a pretty good organization strategy in the absence of a noteworthy scheme.

The specific limit of "how many props is too many" is configurable; it defaults to 3.


## Rule Details

The following patterns are considered warnings:

```js
/* eslint alphabetize-jsx-props: ["error"] */
<span foo="bar" baz="qux" quux={() => true} />
```

The following patterns are not considered warnings:

```js
/* eslint alphabetize-jsx-props: ["error"] */
<span foo="bar" baz="qux" />
<span baz="qux" foo="bar" quux={() => true} />
```

```js
/* eslint alphabetize-jsx-props: ["error", {limit: 10}] */
<span foo="bar" baz="qux" quux={() => true} />
```



```js
/* eslint alphabetize-jsx-props: ["error", {except: ["baz"]}] */
<span foo="bar" baz="qux" quux={() => true} />
```



## Related Rules

* [alphabetize-properties] is similar but for plain-old-JavaScript-objects


[alphabetize-properties]: ./alphabetize-properties.md
