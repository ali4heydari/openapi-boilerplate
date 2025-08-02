import pluginYml from "eslint-plugin-yml";
import pluginJsonSchemaValidator from "eslint-plugin-json-schema-validator";
import pluginCheckFile from "eslint-plugin-check-file";
import { configs as pluginPackageJsonConfigs } from "eslint-plugin-package-json";
import pluginPrettier from "eslint-plugin-prettier/recommended";
import eslintJs from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: [
      "node_modules/**",
      "build/**",
      "swagger/index.html",
      "pnpm-lock.yaml",
    ],
  },
  {
    files: ["spec/**/*.*", "scripts/**/*.*"],
    plugins: {
      "check-file": pluginCheckFile,
    },
    rules: {
      "check-file/filename-naming-convention": [
        "warn",
        {
          "spec/**/*.yaml": "KEBAB_CASE",
        },
      ],
    },
  },
  {
    files: ["**/*.js", "**/*.cjs", "**/*.mjs", "**/*.json"],
    ...eslintJs.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  ...pluginYml.configs["flat/standard"],
  ...pluginYml.configs["flat/prettier"],
  ...pluginJsonSchemaValidator.configs["flat/recommended"],
  {
    rules: {
      "yml/block-mapping-colon-indicator-newline": "error",
      "yml/no-trailing-zeros": "error",
      "yml/no-multiple-empty-lines": "error",
      "yml/key-name-casing": "off",
      "yml/require-string-key": "off",
      "yml/sort-keys": "off",
      "yml/sort-sequence-values": [
        "off",
        {
          pathPattern: ".*",
          order: {
            type: "asc",
          },
        },
      ],
    },
  },
  pluginPackageJsonConfigs.recommended,
  /*
    Prettier plugin must be the last item
    https://github.com/prettier/eslint-plugin-prettier/blob/b307125faeb58b6dbfd5d8812b2dffcfdc8358df/README.md#configuration-new-eslintconfigjs
  */
  pluginPrettier,
];
