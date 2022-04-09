---
title: x theme
description: x-cmd 终端命令行主题 | 快速管理终端命令行主题命令，支持一键生成命令行主题 | zsh主题 | bash主题 | ash主题 | dash主题
sidebarDepth: 1
lastUpdated: true
sitemap:
    priority: 0.6
    exclude: false
---

# x theme

<Terminal :termIndex="1"/>

## 概要

==x theme [[ subcommand ]...](#子命令)== ——  管理命令行主题

## 描述

`x theme` 命令可以帮助你快速管理当前终端的命令行主题，基于标准的POSIX规范进行编写，可在常见的操作系统Shell中使用，比如 bash 和 zsh，可在不同环境下快速获得命令行主题。

- **联动能力**：`x theme` 会与其他命令进行联动调整颜色做到**风格统一化**，免去了配置种种困难。
- **体积小，按需引入**：单个 theme 文件体积**不超过 6KB**，并且按需引入下载，占据空间小。
- **兼容性强**：`x theme` 采用标准的POSIX规范进行编写，做到**一次设置，跨端使用**。
- **Zsh支持**： 在注重 Zsh 配置交互的同时，我们还提供 `x theme zinit` [命令](#zsh支持)可快速初始化的Zsh环境。

## 子命令

ls
:  显示所有的主题列表

use  \<theme name\>
:   ==根据主题名称，设置当前的命令行主题==

try  \<theme name\>
:   根据主题名称，设置当前终端会话的命令行主题

unset
:   取消设置命令行主题


### Zsh支持
<Badge type="tip" text="提示" vertical="middle" /> 仅在 Zsh 环境下才能使用

```bash
x theme zinit
```

- 自动加载并设置 一款默认主题 ( ys )
- 自动加载并设置 Zsh 官方插件 [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting) | [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)
- 下载一款 Powerline 风格字体
