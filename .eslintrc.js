module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    parserOptions: {
        sourceType: 'module'
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-s
    // tyle
    extends: [
        "eslint:recommended", "react-app"
    ],
    // required to lint *.vue files
    plugins: [
        "react"
        // 'html'
    ],
    // add your custom rules here
    'rules': {
        'strict': 0,
        'no-mixed-spaces-and-tabs': 0,
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production'
            ? 2
            : 0,
        'eol-last': 0,
        'semi': 0,
        "indent": 0,
        "no-undef": 0,
        "spaced-comment": 0,
        "comma-dangle": 0,
        "space-before-function-paren": 0,
        "no-unused-vars": 0,
        "no-dupe-keys": 0,
        "no-console": 0,
        "no-irregular-whitespace": 0,
        'no-redeclare': 0,
        "no-script-url": 0,
        "no-useless-escape":0
    }
}