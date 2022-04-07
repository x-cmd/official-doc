---
title: x env
description: x-cmd 查看环境命令
sidebarDepth: 1
lastUpdated: true
sitemap:
    priority: 0.6
    exclude: false
---

# x advise

<Terminal :termIndex="6"/>

## 概要

==x env [[ subcommand ]...](#子命令) [\<environment name\>]== ——  环境管理工具

## 描述

`x env` 环境管理工具，可以帮助你管理，下载，移除，快速切换环境版本。

- **方便快捷**：通过命令的交互，快速切换环境。
- **种类多样**：涵盖常见的环境。

## 子命令

ls \<environment name\>
:  显示所有已安装的环境

download \<environment name\>
:  下载环境

install \<environment name\>
:  安装环境

uninstall \<environment name\>
:  移除环境

try \<environment name\>
:  在此shell会话中设置环境版本

use \<environment name\>
:  设置全局环境版本

current \<environment name\>
:  显示当前环境

which \<environment name\>
:  已安装环境的显示路径

exec \<environment name\>
:  使用选定的候选版本运行可执行文件

## 支持的环境

- 环境
    - python
    - node
    - java
    - go
    - scala
    - maven
    - springboot
    - kotlin
    - gradle
    - deno
    - perl
    - ruby
    - rust


::: tip 提示
`x cmd` 的所有命令都已自动加载了补全信息，使用`x cmd` 命令的过程中可使用 `Tab ↹` 键可以大幅提升命令的使用体验
:::
