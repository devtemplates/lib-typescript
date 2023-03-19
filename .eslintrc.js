"use strict";

/* -----------------------------------------------------------------------------
 * eslint config
 * -------------------------------------------------------------------------- */

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["standard-with-typescript", "prettier"],
  plugins: ["eslint-plugin-tsdoc"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "tsdoc/syntax": "warn",
  },
  // TODO: Disable this once eslint supports typescript 5.0
  ignorePatterns: ["**/*.ts"],
};