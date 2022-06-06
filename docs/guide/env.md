---
title: x env
description: x env 可以帮助你管理，下载，安装，移除，快速切换常见的环境(例如：python,node,go,java等)版本
sidebarDepth: 1
lastUpdated: true
sitemap:
    priority: 0.6
    exclude: false
---

# x env

<Terminal :termIndex="9"/>

## 概要

<p class="x-desc">x env [ subcommand ]... [ environment name ]...  ——  环境版本管理器</p>

## 描述

`x env` 环境版本管理器，可以帮助你管理，下载，安装，移除，快速切换常见的环境(例如：python,node,go,java等)版本。


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

