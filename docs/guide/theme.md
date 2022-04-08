---
title: x theme
description: X-cmd Indicates the subject of the terminal command line | Quick management terminal command line topics command, support one-click generation of command line topics | zsh theme | bash theme | ash theme | dash theme
sidebarDepth: 1
lastUpdated: true
sitemap:
    priority: 0.6
    exclude: false
---

# x theme

<Terminal :termIndex="1"/>

## Synopsis

==x theme [[ subcommand ]...](#subcommand)== ——  Manage command line topics

## Description

`x theme` command helps you quickly manage the command line theme of the current terminal. Written based on standard POSIX specifications, it can be used in common operating system shells, such as bash and zsh, to quickly obtain the command line theme in different environments.

- **Linkage ability**：`x theme` will be linked with other commands to adjust the color to **achieve a uniform style**, eliminating configuration difficulties.
- **Small size, on demand introduction**：A single theme file is **no larger than 6KB** and can be downloaded on demand, taking up less space.
- **Strong compatibility**：`x theme` is written using standard POSIX specifications, so that **is set up once, and is used cross-side**.
- **Zsh supports**： As well as focusing on Zsh configuration interaction,we also provide `x theme zinit` [Command](#Zsh supports) to quickly initialize Zsh.

## Subcommand

ls
:  list all theme

use  \<theme name\>
:   ==use theme when starting the shell==

try  \<theme name\>
:   try theme

unset
:   unset the theme


### Zsh supports
<Badge type="tip" text="Tip" vertical="middle" /> This parameter is available only in the Zsh environment

```bash
x theme zinit
```

- Automatically loads and sets a default theme ( ys )
- Automatically loads and sets the official Zsh plugin [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting) | [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)
- Download a Powerline style font
