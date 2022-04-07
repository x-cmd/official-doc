---
title: x tldr
description: x-cmd tldr | tldr，一站式快速查阅终端命令使用方式，简化版本的命令说明手册。tldr是社区维护，一个不断增长的集成了 UNIX、Linux、macOS、SunOS 和 Windows 命令行工具的示例说明手册，相对传统的手册 man 更简单，更好的用户体验，通过使用即可快速翻阅命令的使用方式。
sidebarDepth: 1
lastUpdated: true
sitemap:
    priority: 0.6
    exclude: false
---

# x tldr

<Terminal :termIndex="5"/>

## Summary

==x tldr [[ subcommand ]...](#subcommand) [\<module\>]== ——  Simplified version of the command description manual

## Description

`x tldr` tldr is a[community](https://github.com/tldr-pages/tldr)maintained，growing example of integration of UNIX、Linux、macOS、SunOS and Windows command line tools**manual**，simpler than the traditional manual `man` better user experience, to **quickly browse commands**.

- **Language pack**：Through the maintenance of community staff, the manual has a variety of language instructions, can be quickly changed by the command `x tldr lang` language package.
- **Interaction is the highest**：We have a better layout and use of traditional tldr commands while focusing on interaction.

## Subcommand

ls
:  Lists all command line tool example manuals

cat \<command\>
:  ==Instruction manual for output commands==

lang \<language\>
:  Switch instruction manual language package | <Badge type="tip" text="Tip" vertical="middle" /> If the instruction manual does not have a translation in that language, English will be used automatically.

update
:   Updated all command line tool example manuals