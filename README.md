# eslint-plugin-laws-of-the-game
[![CircleCI](https://circleci.com/gh/bleacherreport/eslint-plugin-laws-of-the-game/tree/trunk.svg?style=svg)](https://circleci.com/gh/bleacherreport/eslint-plugin-laws-of-the-game/tree/trunk)

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


## Contributions

We welcome contributions!
There are a few ideas in the [Issues] of this repo.

To get started with how to lint JavaScript, play around with the [AST Explorer].

Please add tests!

Note that the default branch of this repo is `trunk`.


## Release Process

This codebase attempts to follow [Semantic Versioning].

1. **Merge.** One or more *approved* Pull Requests are merged to the `trunk` branch.
1. **Test.** Ensure the test suite passes, and runs the expected number of tests: `npm test`
1. **Measure.** Choose the appropriate New Version Number according to [Semantic Versioning]. (The `CHANGELOG.md` file may help with identifying the nature of the changes.)
1. **Changelog.** Edit the `CHANGELOG.md` file, replacing the "Unreleased" label with the New Version Number, linked to the (as-yet-uncreated) GitHub tag as well (the pattern is `https://github.com/<user>/<repo>/releases/tag/<version-number>`). Ensure that the notes under this version reflect the changes made by the merged Pull Requests. Commit and push.
1. **Version.** Run `npm version <version-number> --message "Version %s"` to both update the version in the `package.json` file and create the tag on GitHub.
1. **Publish.** Run `git push && npm publish` to push the merges & version to GitHub, and publish the new package on npmjs.com.
1. **Release.** Create a new Release on GitHub. Visit `https://github.com/<user>/<repo>/releases`, click the "Draft a new release" button. In the Tag field, enter "v<version-number>"; in the Title field, enter just the version number; in the Description, write a brief description of the changes in this version. Then click "Publish release".




[alphabetize-properties]: ./lib/rules/alphabetize-properties.md
[git-flow]: http://nvie.com/posts/a-successful-git-branching-model/
[no-assign-in-case-without-braces]: ./lib/rules/no-assign-in-case-without-braces.md
[no-unauthorized-global-properties]: ./lib/rules/no-unauthorized-global-properties.md
[no-use-entire-process-dot-env]: ./lib/rules/no-use-entire-process-dot-env.md
[npm version]: https://docs.npmjs.com/getting-started/publishing-npm-packages#how-to-update-a-package
[prefer-includes-over-indexof]: ./lib/rules/prefer-includes-over-indexof.md
[AST Explorer]: https://astexplorer.net/
[ESLint]: http://eslint.org
[Issues]: https://github.com/bleacherreport/eslint-plugin-laws-of-the-game/issues
[PillarsOfJS]: https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3
[Process-dot-env]: https://nodejs.org/api/process.html#process_process_env
[Semantic Versioning]: https://semver.org/spec/v2.0.0.html
