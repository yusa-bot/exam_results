import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser, // ブラウザのグローバル変数
        ...globals.jest, // ✅ Jest のグローバル変数を追加
      },
    },
  },
  pluginJs.configs.recommended,
];
