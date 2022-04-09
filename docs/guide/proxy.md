---
title: x proxy
description: x-cmd agent management Agent switch command line tool，quickly switch command line proxies of common package management tools (e.g. maven, npm, pip, cargo, go, etc.), and quickly switch sources in common Linux package management tools (e.g. apt, apk, yum, pacman, etc.) and command line agents (e.g. http/https)
sidebarDepth: 1
lastUpdated: true
sitemap:
    priority: 0.6
    exclude: false
---

# x proxy

<Terminal :termIndex="2"/>

## Synopsis

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
:  Setting proxy in local shell environments: http_proxy, https_proxy

unset
:  Unset all proxy in the shell environment

\<module name\> url
:   Provide url of mirror candidates

\<module name\> set, replace [Mirror source]
:   ==Setting the mirror | If you do not enter [Mirror source], the default official mirror source will be used==

\<module name\> unset
:   Reset the source to the original official

\<module name\> rollback
:   Example Roll back mirror source Settings

<Badge type="tip" text="Tip" vertical="middle" /> In the go package management tool, provide the <code>x proxy go tutorial</code> command to view the detailed commands.