# eslint-plugin-laws-of-the-game
[![CircleCI](https://circleci.com/gh/bleacherreport/eslint-plugin-laws-of-the-game/tree/master.svg?style=svg)](https://circleci.com/gh/bleacherreport/eslint-plugin-laws-of-the-game/tree/master)

laws-of-the-game
================

This is a plugin full of ESLint rules.

Some rules emphasize the use of functions and transformations, and discourage mutation and implicit state.
Some rules intend to warn you of [potential footguns][PillarsOfJS].


## Installation

You'll first need to install [ESLint]:

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-laws-of-the-game`:

```
$ npm install eslint-plugin-laws-of-the-game --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-laws-of-the-game` globally.

## Usage

Add `laws-of-the-game` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "laws-of-the-game"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "laws-of-the-game/alphabetize-properties": [2, {"limit": 3}],
        "laws-of-the-game/no-assign-process-dot-env": 2
    }
}
```

## Supported Rules

* [alphabetize-properties]: Encourages keeping an object's properties in alphabetical order if there are more than a given number of properties.
* [no-assign-in-case-without-braces]: Discourages assigning a variable in a `case` statement, unless it is wrapped in braces creating new scope.
* [no-use-entire-process-dot-env]: Discourages the use of [the `process.env` global value][Process-dot-env].
* [prefer-includes-over-indexof]: Encourages the use of `Array.includes()` rather than comparing `Array.indexOf()` to `-1`.



[alphabetize-properties]: ./lib/rules/alphabetize-properties.md
[no-assign-in-case-without-braces]: ./lib/rules/no-assign-in-case-without-braces.md
[no-use-entire-process-dot-env]: ./lib/rules/no-use-entire-process-dot-env.md
[prefer-includes-over-indexof]: ./lib/rules/prefer-includes-over-indexof.md
[ESLint]: http://eslint.org
[PillarsOfJS]: https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3
[Process-dot-env]: https://nodejs.org/api/process.html#process_process_env
