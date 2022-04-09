---
title: x env
description: x env It help you manage, download, install, remove, and quickly switch versions of common environments (eg:python, node, go, java, etc.).
sidebarDepth: 1
lastUpdated: true
sitemap:
    priority: 0.6
    exclude: false
---

# x env

<Terminal :termIndex="9"/>

## Synopsis

==x env [[ subcommand ]...](#subcommand) [\<environment name\>]== ——  Environment version manager

## Description

`x env` The environment version manager can help you manage, download, install, remove, and quickly switch versions of common environments (eg: python, node, go, java, etc.).


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


