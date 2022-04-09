---
title: x advise
description: x advise, terminal command line completion management tool, command line TAB completion, terminal TAB completion, quickly generate command line completion
sidebarDepth: 1
lastUpdated: true
sitemap:
    priority: 0.6
    exclude: false
---

# x advise

<Terminal :termIndex="6"/>

## Synopsis

==x advise man[[ subcommand ]...](#subcommand) [\<command name\>]== ——  Command line completion management tool

## Description

`x advise` command line completion management tool, in interactive `Shell` such as `Zsh` and `Bash`allows the user to use the `Tab ↹` key to fill in the rest of a command or give a prompt when using a command.

- **Completion management**：Provides one-stop command completion management, eliminating configuration difficulties
- **Load on demand**：Load the completion of corresponding commands as required.

## Subcommand

ls
:  Show all available advise json obj

load \<command name\>
:  Load the completion of the corresponding command module

rm \<command name\>
:  Remove one obj, if no obj is given, remove all obj.

update
:  Update the completion list of all commands

::: tip Tip
All the commands of `x cmd` are automatically loaded with completion information. When using the `x cmd` command, you can use the `Tab ↹` key to greatly improve the command usage experience
:::
