module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ["airbnb-base", "prettier", "prettier/react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "class-methods-use-this": "off",
    "no-param-reassgn": "off",
    camaelcase: "off",
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "next"
      }
    ]
  }
};
