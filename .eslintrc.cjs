module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {    
    "import/prefer-default-export": "off",
    "no-console": [
      "warn",
      {
        allow: ["error", "info", "table", "warn"],
      },
    ],
  },
};
