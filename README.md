# eslint-plugin-laws-of-the-game
[![CircleCI](https://circleci.com/gh/bleacherreport/eslint-plugin-laws-of-the-game/tree/master.svg?style=svg)](https://circleci.com/gh/bleacherreport/eslint-plugin-laws-of-the-game/tree/master)

This is a plugin full of ESLint rules.
It is intended to be a somewhat-opinionated set of standards to follow when contributing to Bleacher Report JavaScript/ES codebases.


### Custom rules

There are a handful of custom rules implemented in this repo.
Some rules emphasize the use of functions and transformations, and discourage mutation and implicit state.
Some rules intend to warn you of [potential footguns][PillarsOfJS].


## Installation

You'll first need to install [ESLint]:

```
$ npm install --save-dev eslint
```

Next, install `@br/eslint-plugin-laws-of-the-game`:

```
$ npm install --save-dev @br/eslint-plugin-laws-of-the-game
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `@br/eslint-plugin-laws-of-the-game` globally.


## Usage

Add `"@br/laws-of-the-game"` to the `plugins` section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "@br/laws-of-the-game"
    ]
}
```

It's Recommended that you use the Recommended set of rules by adding to the `extends` section:

```json
{
    "extends": [
        "plugin:@br/laws-of-the-game/recommended",
    ]
}
```

Then configure any rules you'd like to tweak under the `rules` section:

```json
{
    "rules": {
        "@br/laws-of-the-game/alphabetize-properties": ["error", {"limit": 3}],
        "@br/laws-of-the-game/no-assign-in-case-without-braces": "warn"
    }
}
```


## Custom Rules

* [alphabetize-properties]: Encourages keeping an object's properties in alphabetical order if there are more than a given number of properties.
* [no-assign-in-case-without-braces]: Discourages assigning a variable in a `case` statement, unless it is wrapped in braces creating new scope.
* [no-unauthorized-global-properties]: Discourages the use of nonstandard properties of the `global` object.
* [no-use-entire-process-dot-env]: Discourages the use of [the `process.env` global value][Process-dot-env].
* [prefer-includes-over-indexof]: Encourages the use of `Array.includes()` rather than comparing `Array.indexOf()` to `-1`.



[alphabetize-properties]: ./lib/rules/alphabetize-properties.md
[no-assign-in-case-without-braces]: ./lib/rules/no-assign-in-case-without-braces.md
[no-unauthorized-global-properties]: ./lib/rules/no-unauthorized-global-properties.md
[no-use-entire-process-dot-env]: ./lib/rules/no-use-entire-process-dot-env.md
[prefer-includes-over-indexof]: ./lib/rules/prefer-includes-over-indexof.md
[ESLint]: http://eslint.org
[PillarsOfJS]: https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3
[Process-dot-env]: https://nodejs.org/api/process.html#process_process_env
