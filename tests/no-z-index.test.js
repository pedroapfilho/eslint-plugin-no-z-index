import { RuleTester } from "eslint";
import rule from "../lib/rules/no-z-index.js";

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
});

ruleTester.run("no-z-index", rule, {
  valid: [
    { code: '<div className="foo"></div>' },
    { code: '<div style={{ color: "red" }}></div>' },
  ],
  invalid: [
    {
      code: '<div className="z-10"></div>',
      errors: [{ message: 'Classname contains a "z-*" value.' }],
    },
    {
      code: '<div className="-z-20"></div>',
      errors: [{ message: 'Classname contains a "z-*" value.' }],
    },
    {
      code: "<div style={{ zIndex: 10 }}></div>",
      errors: [{ message: 'Inline style contains a "zIndex" value.' }],
    },
  ],
});
