---
title: x tldr
description: x-cmd tldr | tldr，一站式快速查阅终端命令使用方式，简化版本的命令说明手册。tldr是社区维护，一个不断增长的集成了 UNIX、Linux、macOS、SunOS 和 Windows 命令行工具的示例说明手册，相对传统的手册 man 更简单，更好的用户体验，通过使用即可快速翻阅命令的使用方式。
sidebarDepth: 1
lastUpdated: true
---

# x tldr

<Terminal :termIndex="5"/>

## 概要

==x tldr [[ subcommand ]...](#子命令) [\<module\>]== ——  简化版本的命令说明手册

## 描述

`x tldr` tldr 是一个由[社区](https://github.com/tldr-pages/tldr)维护，不断增长的集成了 UNIX、Linux、macOS、SunOS 和 Windows 命令行工具的示例**说明手册**，相对传统的手册 `man` 更简单，更好的用户体验，达到快速翻阅**命令的使用方式**。

- **语言包**：通过社区人员的维护，手册拥有了多种语言的说明，可通过 `x tldr lang` 命令进行快速的切换语言包。
- **交互至上**：我们在注重交互的同时，对于传统的 tldr 命令有着更好的排版和使用方式。

## 子命令

ls
:  列出所有命令行工具示例说明手册

cat \<command\>
:  ==输出命令的说明手册==

lang \<language\>
:  切换说明手册语言包 | <Badge type="tip" text="提示" vertical="middle" /> 如果说明手册未拥有该语言的翻译，将自动使用英语。

update
:   更新所有命令行工具示例说明手册