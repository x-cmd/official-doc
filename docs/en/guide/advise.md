---
title: x advise
description: x advise, 终端命令行补全管理工具, 命令行tab补全, 终端tab补全，快速生成命令行补全
sidebarDepth: 1
lastUpdated: true
sitemap:
    priority: 0.6
    exclude: false
---

# x advise

<Terminal :termIndex="6"/>

## Summary

==x advise man[[ subcommand ]...](#subcommand) [\<command name\>]== ——  Command line completion management tool

## Describe

`x advise` command line completion management tool, in interactive `Shell` such as `Zsh` and `Bash`allows the user to use the `Tab ↹` key to fill in the rest of a command or give a prompt when using a command.

- **Completion management**：Provides one-stop command completion management, eliminating configuration difficulties
- **According to the need to load**：Load the completion of corresponding commands as required.

## Subcommand

ls
:  Displays a list of all loadable completion commands

load \<command name\>
:  Load the completion of the corresponding command module

rm \<command name\>
:  Cancel loading the completion of the corresponding command module

update
:  Update the completion list of all commands

::: tip Tip
All the commands of `x cmd` are automatically loaded with completion information. When using the `x cmd` command, you can use the `Tab ↹` key to greatly improve the command usage experience
:::
