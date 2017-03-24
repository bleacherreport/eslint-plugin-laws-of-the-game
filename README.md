# eslint-plugin-laws-of-the-game

Disincentivizes some coding practices.

## Installation

You'll first need to install [ESLint](http://eslint.org):

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
        "laws-of-the-game/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





