module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新特性
        'fix', // 修补bug
        'docs', // 只修改文档
        'style', // 样式及格式修改，不改动代码的设计
        'refactor', // 重构，不包括bug修复以及增加新功能在内
        'perf', // 性能提升
        'test', // 增加测试代码或者修复已存在的测试代码
        'build', // 修改会影响构建系统的代码（webpack）或者依赖
        'ci', // 修改cli配置文件和脚本
        'chore', // 其他修改，不会涉及到src下面的文件和测试文件
        'revert' // 回退之前的提交
      ]
    ],
    'type-empty': [2, 'never'], // type不能为空
    'type-case': [2, 'always', 'lower-case'], // type限制小写
    'scope-case': [0, 'always', 'lower-case'], // scope不限制大小写
    'subject-empty': [2, 'never'], // subject（简短得描述）不能为空
    'subject-max-length': [1, 'always', 50], // subject最大长度，超出只会警告，不阻止提交
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 72]
  }
};
