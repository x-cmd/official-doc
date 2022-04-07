---
title: x proxy
description: x-cmd 代理管理代理切换命令行工具，快速切换常见包管理工具的镜像源（例如：maven, npm, pip, cargo, go 等），并且可在常见的Linux系统中的包管理工具达到快速换源（例如：apt, apk, yum, pacman 等）以及命令行的代理（例如：http/https）
sidebarDepth: 1
lastUpdated: true
sitemap:
    priority: 0.6
    exclude: false
---

# x proxy

<Terminal :termIndex="2"/>

## Summary

==x proxy [ \<modules\> ...](#mirror-source-modules-are-supported) [[ subcommand ]...](#subcommand)== ——  Manage the command line mirror source

## Description

`x proxy` command helps you manage, quickly switch command line proxies of common package management tools (e.g. maven, npm, pip, cargo, go, etc.), and quickly switch sources in common Linux package management tools (e.g. apt, apk, yum, pacman, etc.) and command line agents (e.g. http/https).

- **Convenient and quick**：You can quickly switch to the official mirror source through command interaction.
- **various types**：Covers common package management tools.

## Mirror source modules are supported

- Language pack management tool
    - npm
    - yarn
    - maven
    - pip
    - go
    - cargo
    - gem
- System package management tool
    - apt
    - apk
    - yum
    - brew
    - pacman
    - dnf
    - brew
- Command tool
    - docker

## Subcommand

set
:  Set the HTTP/HTTPS proxy for the current terminal session

unset
:  Cancel setting all HTTP/HTTPS proxies for the current terminal session

\<module name\> url
:   Lists all mirror sources supported by the module

\<module name\> set, replace [Mirror source]
:   ==Example Change the mirror source | If you do not enter [Mirror source], the default official mirror source will be used==

\<module name\> unset
:   Example Cancel setting the mirror source

\<module name\> rollback
:   Example Roll back mirror source Settings

<Badge type="tip" text="Tip" vertical="middle" /> In the go package management tool, provide the <code>x proxy go tutorial</code> command to view the detailed commands.