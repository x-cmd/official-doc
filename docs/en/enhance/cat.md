---
title: x cat
description: x-cmd增强 cat 命令
sidebarDepth: 1
sitemap:
    priority: 0.6
    exclude: true
---

# 一级标题 —— md效果展示

## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

## Image
![图片](/images/logo.png)
## Text
正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文
正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文
正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文
正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文
正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文
正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文
正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文
正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文
> 引用

- list - 1
- list - 2
- list - 3

1. list-1
2. list-2
3. list-3

- [ ] Check Box
- [x] Checked Box

**粗体**

*斜体*

~~删除线~~

***加粗斜体***

## Table
  | Pattern    | 描述         |
  | ---------  | ----------  |
  | 1          |        2    |
  | 2          | 3           |
  | 3          | 4           |

## Link
[外部链接emoji-list :tada:](https://gist.github.com/rxaviers/7360908) <br>
[内部链接](../helloword/README.md)


## Code
### 行内代码
- 输入命令`ls`
### 代码块

```js
console.log('hello world')
```
### 高亮
```ts{1,6-8}
import type { UserConfig } from '@vuepress/cli'

export const config: UserConfig = {
  title: '你好， VuePress',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
}
```

### 导入代码
@[code](./code/hello.sh)
### 代码块组合
#### 1. 标签写法
<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash{1}
yarn add -D vuepress@next ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
yarn add -D vuepress@next
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm install -D vuepress@next
```

  </CodeGroupItem>
</CodeGroup>

#### 2. md语法写法
:::: code-group
::: code-group-item FOO
```js
const foo = 'foo'
```
:::
::: code-group-item BAR
```js
const bar = 'bar'
```
:::
::::

### 长代码折叠
::: details 点击查看代码
```js
console.log('hello, x-cmd！')
console.log('hello, x-cmd！')
console.log('hello, x-cmd！')
console.log('hello, x-cmd！')
console.log('hello, x-cmd！')
console.log('hello, x-cmd！')
console.log('hello, x-cmd！')
console.log('hello, x-cmd！')
console.log('hello, x-cmd！')
console.log('hello, x-cmd！')
console.log('hello, x-cmd！')
console.log('hello, x-cmd！')
console.log('hello, x-cmd！')
```
:::

## Tie


::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::
