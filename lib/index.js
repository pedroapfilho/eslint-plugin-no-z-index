import noZIndex from "./rules/no-z-index.js";

export default {
  rules: {
    "no-z-index": noZIndex,
  },
  configs: {
    recommended: {
      rules: {
        "no-z-index/no-z-index": "error",
      },
    },
  },
};
