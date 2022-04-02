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

## Summary

==x theme [[ subcommand ]...](#subcommand)== ——  Manage command line topics

## Describe

`x theme` command helps you quickly manage the command line theme of the current terminal. Written based on standard POSIX specifications, it can be used in common operating system shells, such as bash and zsh, to quickly obtain the command line theme in different environments.

- **Linkage ability**：`x theme` will be linked with other commands to adjust the color to **achieve a uniform style**, eliminating configuration difficulties.
- **Small size, on demand introduction**：A single theme file is **no larger than 6KB** and can be downloaded on demand, taking up less space.
- **Strong compatibility**：`x theme` is written using standard POSIX specifications, so that **is set up once, and is used cross-side**.
- **Zsh supports**： As well as focusing on Zsh configuration interaction,we also provide `x theme zinit` [Command](#Zsh supports) to quickly initialize Zsh.

## Subcommand

ls
:  Displays a list of all topics

use  \<theme name\>
:   ==Sets the current command line theme based on the theme name==

try  \<theme name\>
:   Sets the command line topic of the current terminal session based on the topic name

unset
:   Cancels setting the command line theme


### Zsh supports
<Badge type="tip" text="Tip" vertical="middle" /> This parameter is available only in the Zsh environment

```bash
x theme zinit
```

- Automatically loads and sets a default theme ( ys )
- Automatically loads and sets the official Zsh plugin [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting) | [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)
- Download a Powerline style font
