const { execSync } = require('child_process');
const fs = require("fs");
const path = require("path");

const getDirNames = (_path) => {
  return fs
  .readdirSync(path.resolve(__dirname, _path))
  .map((value) => {
    value = value.substring(0, value.lastIndexOf('.'));
    if (value === 'README') return null;
    return { name: value };
  })
  .filter(i => i !== null);
};

// @tip: git branch name = feat_33_qb   =>    auto get defaultIssues = #33
const issue = execSync('git rev-parse --abbrev-ref HEAD')
  .toString()
  .trim()
  .split("_")[1]

/** @type {import('cz-git').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-empty': [2, 'never'], // subject（简短得描述）不能为空
  },
  prompt: {
    messages: {
      type: "选择你的提交类型    | Select the type of change that you're committing:",
      scope: "选择一个模块范围(可选) | Denote the SCOPE of this change (optional)",
      customScope: "自定义修改模块名 | Denote the SCOPE of this change:",
      subject: "简短说明 | Write a SHORT, IMPERATIVE tense description of the change:\n",
      body: '详细说明(可选) 使用"|"可换行 \n  Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking: "非兼容性说明(可选) | List any BREAKING CHANGES (optional):\n",
      footerPrefixsSelect: "选择关联issue前缀 | Select the ISSUES type of changeList by this change (optional):",
      customFooterPrefixs: "输入自定义issue | Input ISSUES Prefix:",
      footer: "列举关联issue (可选) 例如: #22, #31  List any ISSUES CLOSED by this change (optional) :\n",
      confirmCommit: "是否提交或修改commit | Are you sure you want to proceed with the commit above?"
    },
    types: [
      {value: 'docs',     name: 'docs:     文档更新  | Documentation only changes'},
      {value: 'feat',     name: 'feat:     新特性    | A new feature'},
      {value: 'fix',      name: 'fix:      修复缺陷  | A bug fix'},
      {value: 'style',    name: 'style:    样式更改  | Changes that do not affect the meaning of the code'},
      {value: 'refactor', name: 'refactor: 代码重构  | A code change that neither fixes a bug nor adds a feature'},
      {value: 'perf',     name: 'perf:     性能提升  | A code change that improves performance'},
      {value: 'test',     name: 'test:     测试相关  | Adding missing tests or correcting existing tests'},
      {value: 'build',    name: 'build:    构建相关  | Changes that affect the build system or external dependencies (example scopes: gulp, webpack, npm)'},
      {value: 'ci',       name: 'ci:       命令行工具| Changes to our CI configuration files and scripts'},
      {value: 'revert',   name: 'revert:   回退代码  | Revert to a commit'},
      {value: 'chore',    name: 'chore:    其他修改  | Other changes that do not modify src or test files'},
    ],
    scopes: [
      {name: 'official'},
      ...getDirNames("docs/guide"),
      ...getDirNames("docs/enhance"),
      {name: 'plugin-seo'},
      {name: 'plugin-codecopy'},
    ],
    allowBreakingChanges: ['feat', 'fix'],
    issuePrefixs: [
      { value: "link", name: "link:     关联issue | processing to ISSUES" },
      { value: "closed", name: "closed:   关闭issue | ISSUES has been processed" }
    ],
    customIssuePrefixsAlign: !issue ? "top" : "bottom",
    defaultIssues: !issue ? "" : `#${issue}`
  }
};
