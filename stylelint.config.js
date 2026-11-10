export default {
  extends: ["stylelint-config-standard-scss"],
  rules: {
    // legacy class names are referenced from markup and blog posts
    "selector-class-pattern": null,
    // h7 is used as a custom subtitle tag in older markup
    "selector-type-no-unknown": [true, { ignoreTypes: ["h7"] }],
    "number-max-precision": null,
  },
};
