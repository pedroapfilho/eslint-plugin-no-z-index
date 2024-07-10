# eslint-plugin-no-z-index

## Overview

`eslint-plugin-no-z-index` is an ESLint plugin that disallows the usage of `z-*` classnames and inline styles with `zIndex`. This helps to enforce a consistent approach to managing z-index in your projects.

## Installation

### Option 1: Install from npm

1. Install the plugin using npm:
   ```bash
   npm install eslint-plugin-no-z-index --save-dev
   ```

### Option 2: Link Locally

1. Clone the plugin repository and navigate to the directory:
   ```bash
   git clone <repository-url>
   cd eslint-plugin-no-z-index
   ```

2. Link the plugin locally:
   ```bash
   npm link
   ```

3. In your project directory, link the local plugin:
   ```bash
   npm link eslint-plugin-no-z-index
   ```

## Usage

1. Add `no-z-index` to the plugins section of your ESLint configuration file (.eslintrc.js, eslint.config.js, etc.).

2. Enable the rule provided by the plugin.

### Example Configuration

**.eslintrc.js:**

```javascript
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["no-z-index"],
  extends: ["eslint:recommended"],
  rules: {
    "no-z-index/no-z-index": "error",
  },
};
```

### Example Configuration with eslint.config.mjs:

```javascript
import { FlatCompat } from "@eslint/eslintrc";
import noZIndex from "eslint-plugin-no-z-index";

// Compatibility helper for old-style .eslintrc files
const compat = new FlatCompat({
  baseDirectory: import.meta.url,
});

export default [
  {
    files: ["src/**/*.js", "src/**/*.jsx"],
    plugins: {
      "no-z-index": noZIndex,
    },
    rules: {
      "no-z-index/no-z-index": "error",
    },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      ecmaFeatures: { jsx: true },
    },
  },
  ...compat.config({}),
];
```

## Rule Details

### no-z-index/no-z-index

This rule disallows the usage of `z-*` classnames and inline styles with `zIndex`.

#### Examples of **incorrect** code:

```javascript
// Using z-* classname
<div className="z-10"></div>;

// Using inline style with zIndex
<div style={{ zIndex: 10 }}></div>;
```

#### Examples of **correct** code:

```javascript
// Classname without z-*
<div className="foo"></div>;

// Inline style without zIndex
<div style={{ color: "red" }}></div>;
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License.