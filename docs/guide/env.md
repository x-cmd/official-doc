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

## Summary

==x env [[ subcommand ]...](#subcommand) [\<environment name\>]== ——  Environmental management tools

## Description

`x env` environment management tool, can help you manage, download, remove, quickly switch environment version.

- **Convenient and quick**：Quickly switch the environment through command interaction.
- **various types**：Cover common environments.

## Subcommand

ls \<environment name\>
:  List all installed environments

download \<environment name\>
:  Download environment

install \<environment name\>
:  Install environment

uninstall \<environment name\>
:  Remove environment

try \<environment name\>
:  Set environment version in this shell session

use \<environment name\>
:  Set global environment version

current \<environment name\>
:  Show current environment

which \<environment name\>
:  Display path of environment installed

exec \<environment name\>
:  Run an executable with the selected candidates version

## Supported environment

- environment
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


<!-- ::: tip 提示
`x cmd` 的所有命令都已自动加载了补全信息，使用`x cmd` 命令的过程中可使用 `Tab ↹` 键可以大幅提升命令的使用体验
::: -->
