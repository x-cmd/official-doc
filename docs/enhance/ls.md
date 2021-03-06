---
title: x ls
description: x-cmd 增强 ls 命令 | 文件列表展示命令
sidebarDepth: 1
lastUpdated: true
sitemap:
    priority: 0.6
    exclude: false
---

# x ls

<Terminal :termIndex="0"/>

## 概要
<p class="x-desc">x ls [ OPTION ]... [ Folder ]...  ——  增强输出文件列表</p>

> 利用 x-cmd 静态编译模块，对 [exa](https://github.com/ogham/exa) 进行分发托管，达到在不同环境下的快速安装使用。

<br>

::: tip 提示
`x ll` 命令等同 `x ls -l` 输出长列表命令
:::

## 描述

`x ls` 是 Unix 和 Linux 操作系统附带的古老文件列表命令行程序的现代替代品，赋予它更多功能和更好的默认值。它使用颜色来区分文件类型和元数据。它了解符号链接、扩展属性和 Git。它体积小、速度快，而且只有一个二进制文件，相比传统的 `ls` 命令 `x ls` 功能更强大、对用户更友好。

- **颜色**:不同类型的文件和数据将采用不同的颜色，并且将为当前用户突出显示用户和组列。
- **信息**:显示文件的扩展属性，以及标准文件系统信息，例如 权限，大小和文件创建更新的日期和时间。
- **树视图**:标准tree工具是内置的。
- **Git支持**:查看每个文件的暂存和未暂存状态，就在标准视图中。也适用于树状视图，以获取存储库的高级概览。

## 命令选项

-1 , --oneline
:   每行显示一个条目

-G , --grid
: 将条目显示为网格（默认）

-l , --long
: 显示扩展细节和属性

-R , --recurse
:  递归到目录

-T , --tree
: ==作为树递归到目录中==

-x , --across
: 对网格进行排序，而不是向下排序

-F , --classify
: 按文件名显示类型指示器

--icons
: 显示图标

--no-icons
: 不显示图标（总是覆盖 --icons）

### 过滤选项

-a , --all
: ==显示隐藏和“点”前缀文件==

-d , --list-dirs
: 普通文件一样列出目录

-L , --level=(depth)
: 限制递归深度

-r , --reverse
: 反转排序顺序

-s , --sort=(field)
: 按哪个字段排序

--group-directories-first
: 在其他文件之前列出目录

-D , --only-dirs
: 只列出目录

--git-ignore
: 忽略中提到的文件.gitignore

-I , --ignore-glob=(globs)
: 要忽略的文件的全局模式（管道分隔）

### 长视图选项

-b , --binary
: 列出带有二进制前缀的文件大小

-B , --bytes
: 以字节为单位列出文件大小，不带任何前缀

-g , --group
: 列出每个文件的组

-h , --header
: 为每一列添加一个标题行

-H , --links
: 列出每个文件的硬链接数

-i , --inode
: 列出每个文件的 inode 编号

-m , --modified
: 使用修改后的时间戳字段

-S , --blocks
: 列出每个文件的文件系统块数

-t , --time=(field)
: 使用哪个时间戳字段

-u , --accessed
: 使用访问的时间戳字段

-U , --created
: 使用创建的时间戳字段

-@ , --extended
: 列出每个文件的扩展属性和大小

--changed
: 使用改变的时间戳字段

--git
: 列出每个文件的 Git 状态，如果被跟踪或忽略

--time-style
: 如何格式化时间戳

--no-permissions
: 禁止权限字段

--octal-permissions
: 以八进制格式列出每个文件的权限

--no-filesize
: 取消文件大小字段

--no-user
: 禁止用户字段

--no-time
: 抑制时间字段


> 更多内容可查看 [exa 文档查阅](https://github.com/ogham/exa)
