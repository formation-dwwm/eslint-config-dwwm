module.exports = {
    "root": true,
    "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module",
      "parser": "babel-eslint"
    },
    "env": {
      "browser": true,
      "es6": true
    },
    "extends": [
        "eslint:recommended"
    ],
    "rules": {
        "no-console": "off",
        "no-case-declarations": "off",
        "no-fallthrough": "off",
        "no-debugger": "off",
        "no-prototype-builtins": "warn",
        "no-var": "error",
        "no-shadow": "error",
        "prefer-const": "error",
        "no-eval": "error",
        "no-invalid-this": "warn",
        "max-len": ["error", { "code": 100 }],
        "eqeqeq": "error",
        "no-multi-spaces": "error",
        "no-trailing-spaces": "error",
        "no-unreachable": "error",
        "camelcase": "error",
        "no-global-assign": "error",
        "no-sequences": "error",
        "no-unused-expressions": "error",
        "no-redeclare": "error",
        "no-throw-literal": "error",
        "brace-style":["error", "1tbs", { "allowSingleLine": true }],
        "indent": ["error", 4],
        "semi": "error",
        "no-whitespace-before-property": "error",
        "no-const-assign": "error",
        "constructor-super": "error",
        "no-this-before-super": "error",
        "no-mixed-spaces-and-tabs": "error",
        "new-cap": "error",
        "default-case": "error",
        "no-duplicate-case": "error",
        "no-empty": "error",
        "no-unmodified-loop-condition": "warn"
    }
}