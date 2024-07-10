import { FlatCompat } from "@eslint/eslintrc";
import noZIndex from "./lib/index.js";

// Compatibility helper for old-style .eslintrc files
const compat = new FlatCompat({
  baseDirectory: import.meta.url,
});

export default [
  {
    files: ["tests/**/*.js"],
    plugins: {
      "no-z-index": noZIndex,
    },
    rules: {
      "no-z-index/no-z-index": "error",
    },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
  },
  ...compat.config({}),
];
