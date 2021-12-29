module.exports = {
  root: true,
  extends: "vuepress",
  overrides: [
    {
      files: ["*.ts", "*.vue", "*.js"],
      extends: ["vuepress-typescript", "prettier"],
      parserOptions: {
        project: ["tsconfig.eslint.json"]
      },
      rules: {
        "semi": "off",
        "linebreak-style": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/ban-types": "off",
        "import/no-extraneous-dependencies": "off",
        "array-callback-return": "off",
        "vue/no-v-html": "off",
      }
    },
    {
      files: ["*.vue"],
      extends: "prettier",
      globals: {
        defineEmits: "readonly",
        defineProps: "readonly"
      },
      rules: {
        // disable for setup script
        "vue/match-component-file-name": "off",
        "semi": "off",
        "quotes": "off",
      }
    },
    {
      files: ["clientAppEnhance.ts"],
      rules: {
        "vue/match-component-file-name": "off"
      }
    }
  ]
};
