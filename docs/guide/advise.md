---
title: x advise
description: x advise, 终端命令行补全管理工具, 命令行tab补全, 终端tab补全，快速生成命令行补全
sidebarDepth: 1
lastUpdated: true
---

# x advise

<Terminal :termIndex="6"/>

## 概要

==x advise man[[ subcommand ]...](#子命令) [\<command name\>]== ——  命令行补全管理工具

## 描述

`x advise` 命令行补全管理工具，在交互性强的 `Shell` 比如 `Zsh` 和 `Bash`中允许用户在使用命令的时候使用 `Tab ↹` 键来填充命令的剩余部分或者给予提示信息。

- **补全管理**：提供一站式的命令的补全管理，告别配置困难。
- **按需加载**：按需加载对应命令的补全。

## 子命令

ls
:  显示所有可加载补全命令的列表

load \<command name\>
:  加载对应命令模块的补全

rm \<command name\>
:  取消加载对应命令模块的补全

update
:  更新所有的命令的补全列表

::: tip 提示
`x cmd` 的所有命令都已自动加载了补全信息，使用`x cmd` 命令的过程中可使用 `Tab ↹` 键可以大幅提升命令的使用体验
:::
