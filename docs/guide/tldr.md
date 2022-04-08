---
title: x tldr
description: x-cmd tldr | one-stop quick view terminal command usage, simplified version of the command description manual. tldr is a community maintenance, a growing integration of UNIX, Linux, macOS, SunOS and Windows command line tools sample instruction manual, compared to the traditional manual MAN is simpler, better user experience, through the use of command quickly read the way.
sidebarDepth: 1
lastUpdated: true
sitemap:
    priority: 0.6
    exclude: false
---

# x tldr

<Terminal :termIndex="5"/>

## Synopsis

==x tldr [[ subcommand ]...](#subcommand) [\<module\>]== ——  Simplified version of the command description manual

## Description

`x tldr` tldr is a[community](https://github.com/tldr-pages/tldr)maintained，growing example of integration of UNIX、Linux、macOS、SunOS and Windows command line tools**manual**，simpler than the traditional manual `man` better user experience, to **quickly browse commands**.

- **Language pack**：Through the maintenance of community staff, the manual has a variety of language instructions, can be quickly changed by the command `x tldr lang` language package.
- **Interaction comes first**：We have a better layout and use of traditional tldr commands while focusing on interaction.

## Subcommand

ls
:  List all possible commands

cat \<command\>
:  ==Concatenate tldr file to standard output==

lang \<language\>
:  Set Prefered language or show languange candidates | <Badge type="tip" text="Tip" vertical="middle" /> If the instruction manual does not have a translation in that language, English will be used automatically.

update
:   Updated all command line tool example manuals