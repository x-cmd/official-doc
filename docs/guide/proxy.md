---
title: x proxy
description: x-cmd 代理管理代理切换命令行工具，快速切换常见包管理工具的命令行代理（例如：maven, npm, pip, cargo, go 等），并且可在常见的Linux系统中的包管理工具达到快速换源（例如：apt, apk, yum, pacman 等）以及命令行的代理（例如：http/https）
sidebarDepth: 1
lastUpdated: true
---

# x proxy

<Terminal :termIndex="2"/>

## 概要

==x proxy [ \<modules\> ...](#支持镜像源模块) [[ subcommand ]...](#子命令)== ——  管理命令行镜像源

## 描述

`x proxy` 命令可以帮助你管理，快速切换常见包管理工具的命令行代理（例如：maven, npm, pip, cargo, go 等），并且可在常见的Linux系统中的包管理工具达到快速换源（例如：apt, apk, yum, pacman 等）以及命令行的代理（例如：http/https）。

- **方便快捷**：通过命令的交互，快速切换官方镜像源。
- **种类多样**：涵盖常见的包管理工具。

## 支持镜像源模块

- 语言包管理工具
    - npm
    - yarn
    - maven
    - pip
    - go
    - cargo
    - gem
- 系统包管理工具
    - apt
    - apk
    - yum
    - brew
    - pacman
    - dnf
    - brew
- 命令工具
    - docker

## 子命令

set
:  设置http/https当前终端会话的代理

unset
:  取消设置当前终端会话的所有http/https代理

\<module name\> url
:   列出所有的镜像源列表

\<module name\> set, replace [镜像源]
:   ==设置更换镜像源 | 不输入[镜像源]将使用默认官方镜像源==

\<module name\> unset
:   取消镜像源设置

\<module name\> rollback
:   回退镜像源设置

<Badge type="tip" text="提示" vertical="middle" /> 在 go 包管理工具的换源操作中，提供 <code>x proxy go tutorial</code> 命令来查看具体的详细的命令。