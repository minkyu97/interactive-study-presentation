import js from "@eslint/js";
import globals from "globals";

export default {
  ignores: ["dist"],
  extends: [js.configs.recommended],
  files: ["**/*.{js,jsx}"],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
};
