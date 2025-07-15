import js from "@eslint/js";
import queryPlugin from "@tanstack/eslint-plugin-query";
import importPlugin from "eslint-plugin-import";
import perfectionist from "eslint-plugin-perfectionist";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

import checkFilename from "./eslint-plugin-check-filename.mjs";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
    ],
    files: ["src/**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "check-filename": checkFilename,
      import: importPlugin,
      perfectionist,
      query: queryPlugin,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports" },
      ],
      "check-filename/convention": "error",
      "import/no-cycle": ["error", { maxDepth: 1 }],
      "lines-between-class-members": "error",
      "max-len": [
        "error",
        {
          code: 90,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreUrls: true,
          tabWidth: 2,
        },
      ],
      "no-case-declarations": "error",
      "no-confusing-arrow": ["warn", { allowParens: true }],
      "no-console": "warn",
      "no-else-return": "warn",
      "no-loss-of-precision": "warn",
      "no-return-assign": "warn",
      "no-trailing-spaces": [
        "warn",
        { ignoreComments: false, skipBlankLines: true },
      ],
      "no-unexpected-multiline": "error",
      "no-unreachable": "error",
      "no-unreachable-loop": "warn",
      "no-unsafe-optional-chaining": "warn",
      "no-use-before-define": ["error", { functions: false }],
      "no-useless-catch": "warn",
      "no-useless-concat": "error",
      "no-var": "error",
      "object-shorthand": ["error", "always"],
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", next: "export", prev: ["import"] },
      ],
      "perfectionist/sort-imports": [
        "error",
        { ignoreCase: true, type: "alphabetical" },
      ],
      "perfectionist/sort-interfaces": [
        "error",
        { ignoreCase: true, type: "alphabetical" },
      ],
      "perfectionist/sort-intersection-types": [
        "error",
        { order: "asc", type: "natural" },
      ],
      "perfectionist/sort-jsx-props": [
        "error",
        { ignoreCase: true, type: "alphabetical" },
      ],
      "perfectionist/sort-named-imports": [
        "error",
        { ignoreCase: true, type: "alphabetical" },
      ],
      "perfectionist/sort-objects": [
        "error",
        { ignoreCase: true, type: "alphabetical" },
      ],
      "perfectionist/sort-union-types": [
        "error",
        { ignoreCase: true, type: "alphabetical" },
      ],
      "prefer-template": "error",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/destructuring-assignment": [
        "error",
        "always",
        { destructureInSignature: "always" },
      ],
      "react/jsx-boolean-value": ["error", "always"],
      "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
      "react/jsx-fragments": ["error", "element"],
      "react/jsx-handler-names": ["warn"],
      "react/jsx-no-useless-fragment": ["error"],
      "react/jsx-pascal-case": ["error"],
      "react/no-unescaped-entities": "off",
      "react/react-in-jsx-scope": "off",
      "react/self-closing-comp": ["error", { component: true, html: true }],
      semi: ["error", "never"],
      "spaced-comment": ["warn", "always", { markers: ["/"] }],
      "template-curly-spacing": ["error", "never"],
    },
  }
);
